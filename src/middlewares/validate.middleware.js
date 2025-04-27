import { StatusCodes } from 'http-status-codes';

import ApiError from "../utils/ApiError.js";


const validate = (schema = {}) => (req, res, next) => {
    const sources = ['body', 'params', 'query'];
    const errors = [];
    
    for (const source of sources) {
        if (schema[source]) {            
            const data = req[source] || {};
            const { error, value } = schema[source].validate(data, {abortEarly: false, stripUnknown: true })

            if (error) {
                error.details.forEach(detail => {
                    errors.push({
                        path: detail.path.join('.'),
                        message: detail.message
                    })    
                });
            } else {
                req[source] = value;
            }
        }
    }

    if (errors.length > 0) {
        const message = errors.map(({message}) => message.replaceAll('"', '')).join(', ');
        return next(new ApiError(StatusCodes.BAD_REQUEST, message));
    }

    next()
} 


export default validate;