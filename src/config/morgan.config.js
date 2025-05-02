import morgan from 'morgan';

import environments from './environment.config.js';
import logger from './logger.config.js';

morgan.token('message', (req, res) => res.locals.errorMessage || '');

const { env } = environments;
const getIpFormat = () => env === 'production' ? ':remote-addr - ' : '';

const successResponse = `${getIpFormat()}:method :url :status - :response-time ms`;
export const successHandler = morgan(successResponse, {
    skip: (req, res) => res.statusCode >= 400,
    stream: {write: (message) => logger.info(message.trim())}
}) 

const errorResponse = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;
export const errorHandler = morgan(errorResponse, {
    skip: (req, res) => res.statusCode < 400,
    stream: {write: (message) => logger.error(message.trim())}
})