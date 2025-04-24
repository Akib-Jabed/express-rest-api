import { StatusCodes } from 'http-status-codes';
import { QueryFailedError } from 'typeorm';

import environments from '../config/environment.config.js';
import logger from '../config/logger.config.js';
import ApiError from '../utils/ApiError.js';


export const errorConverter = (err, req, res, next) => {
    let error = err;
    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode || error instanceof QueryFailedError ? StatusCodes.BAD_REQUEST : StatusCodes.INTERNAL_SERVER_ERROR;
        const message = error.message || StatusCodes[statusCode];

        error = new ApiError(statusCode, message, false, err.stack);
    }

    next(error);
}

export const errorHandler = (err, req, res, next) => {
    let {statusCode, message} = err;
    if (environments.env !== 'development' && !err.isOperational) {
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        message = 'Something went wrong. Please contact admin.';
    }

    res.locals.errorMessage = err.message;

    const response = {
        code: statusCode,
        message,
        ...(environments.env === 'development' && {stack: err.stack})
    }
    
    logger.error(err);

    res.status(statusCode).send(response);
}

