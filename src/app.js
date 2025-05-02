import compression from 'compression';
import cors from 'cors';
import express from 'express';
import { xss } from 'express-xss-sanitizer';
import helmet from 'helmet';
import hpp from 'hpp';
import { StatusCodes } from 'http-status-codes';
import nocache from 'nocache';
import passport from 'passport';
import path from 'path';
import zlib from 'zlib';

import environments from './config/environment.config.js';
import { successHandler } from './config/morgan.config.js';
import jwtStrategy from './config/passport.config.js';
import { errorConverter, errorHandler } from './middlewares/error.middleware.js';
import { rateLimiter, speedLimiter } from './middlewares/limiter.middleware.js';
import router from './routes/index.js';
import ApiError from './utils/ApiError.js';


export default function createApp() {
    const app = express();

    app.use(successHandler);
    app.use(errorHandler);

    app.use(express.json({ limit: '3mb' }));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(environments.dirname, 'public')));
    app.use(nocache())
    app.use(xss())
    app.use(hpp({ checkBody: true, checkQuery: true }))
    app.use(helmet({ contentSecurityPolicy: false }))
    app.use(
        cors({
            origin: '*',
            methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
            credentials: true
        })
    )
    app.use(
        compression({
            strategy: zlib.constants.Z_RLE,
            level: zlib.constants.Z_BEST_COMPRESSION,
            memLevel: zlib.constants.Z_BEST_COMPRESSION
        })
    )
    app.use(rateLimiter())
    app.use(speedLimiter())

    app.use(passport.initialize())
    passport.use('jwt', jwtStrategy)

    // app.get('/', (req, res) => {
    //     res.send('Hello World!!');
    // })
    
    app.use('/api/v1', router);
    app.use((req, res, next) => {
        next(new ApiError(StatusCodes.NOT_FOUND, 'Not found'));
    })

    app.use(errorConverter)
    app.use(errorHandler)
    
    return app
}
