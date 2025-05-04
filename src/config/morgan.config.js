import morgan from 'morgan';

import environments from './environment.config.js';
import logger from './logger.config.js';

morgan.token('message', (req, res) => res.locals.errorMessage || '');

const { env } = environments;
const ipFormat = env === 'production' ? ':remote-addr - ' : '';
const logFormat = `${ipFormat}:method :url :status - :response-time ms`;
const errorFormat = `${logFormat} - message: :message`;

const stream = (level) => ({
    write: (message) => logger[level](message.trim())
});

export const successHandler = morgan(successResponse, {
    skip: (req, res) => res.statusCode >= 400,
    stream: stream('info')
}); 

export const errorHandler = morgan(errorResponse, {
    skip: (req, res) => res.statusCode < 400,
    stream: stream('error')
});