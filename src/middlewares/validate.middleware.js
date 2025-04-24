import { StatusCodes } from 'http-status-codes';

import ApiError from "../utils/ApiError.js";


const validate = (schema = {}) => (req, res, next) => {
    const sources = ['body', 'params', 'query'];
    const errors = [];

    for (const source of sources) {
        if (schema[source]) {
            const { error, value } = schema[source].validate(req[source], {abortEarly: false, stripUnknown: true })

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

    console.log(errors);

    if (errors.length > 0) {
        return next(new ApiError(StatusCodes.BAD_REQUEST, 'Validation failed'))
    }

    next()
} 


export default validate;