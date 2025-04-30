import { StatusCodes } from 'http-status-codes';

import ApiError from "../utils/ApiError.js";


const validate = (schema = {}) => (req, res, next) => {
    const errors = [];
    const validationSources = [
        { source: 'body', data: req.body },
        { source: 'query', data: req.query },
        { source: 'params', data: req.params }
    ];
    
    validationSources.flatMap(({source, data}) => {
        if (schema[source]) {
            const { error, value } = schema[source].validate(data, {
                abortEarly: false, 
                stripUnknown: true,
                allowUnknown: false 
            });

            if (error) {
                error.details.forEach(detail => {
                    errors.push({
                        source,
                        path: detail.path.join('.'),
                        message: detail.message
                    })    
                });
            } else {
                req[`${source.charAt(0).toUpperCase() + source.slice(1)}`] = value;
            }
        }
    })

    if (errors.length > 0) {
        const message = errors.map(err => `${err.source}.${err.path}: ${err.message.replaceAll('"', '')}`).join('\n');

        return next(new ApiError(StatusCodes.BAD_REQUEST, message));
    }

    next()
} 


export default validate;