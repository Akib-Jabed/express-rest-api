import path from 'path';
import winston from 'winston';
import environments from './environment.config.js';


const logDirectory = 'logs';
const { combine, timestamp, json, errors, printf, colorize } = winston.format;

const appLog = new winston.transports.File({
    filename: path.join(logDirectory, 'app.log')
})
const errorLog = new winston.transports.File({
    filename: path.join(logDirectory, 'error.log'),
    level: 'error',
})

const consoleTransport = new winston.transports.Console({
    level: 'debug',
    format: combine(
        colorize(),
        timestamp({ format: 'YYYY-MM-DD hh:mm:ss A' }),
        printf(({ level, message, timestamp, stack }) => stack ? `[${timestamp}] ${level}: ${message}\n${stack}` : `[${timestamp}] ${level}: ${message}`),
    ),
    stderrLevels: ['error']
})

const transports = [appLog, errorLog];

if (environments.env === 'development') {
    transports.push(consoleTransport);
}

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        errors({stack: true}),
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        json()
    ),
    transports,
    exitOnError: false
});

export default logger;