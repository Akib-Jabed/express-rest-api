import winston from 'winston';
import environments from './environment.config.js';


const { combine, timestamp, json } = winston.format;
const enumerateErrorFormat = winston.format((info) => {
    if (info instanceof Error) {
      Object.assign(info, { message: info.stack });
    }
    return info;
  });
  

const transports = [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/app.log' }),
];

if (environments.env === 'development') {
    transports.push(new winston.transports.Console({
        stderrLevels: ['error']
    }));
}

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        enumerateErrorFormat(),
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        json()
    ),
    transports,
});

export default logger;