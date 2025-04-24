import compression from 'compression';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import { xss } from 'express-xss-sanitizer';
import helmet from 'helmet';
import hpp from 'hpp';
import { StatusCodes } from 'http-status-codes';
import nocache from 'nocache';
import passport from 'passport';
import path from 'path';
import zlib from 'zlib';

import environments from './config/environment.config.js';
import jwtStrategy from './config/passport.config.js';
import { errorConverter, errorHandler } from './middlewares/error.middleware.js';
import router from './routes/index.js';
import ApiError from './utils/ApiError.js';


export default function createApp() {
    const app = express();

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
    app.use(
        rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 20,
            standardHeaders: true,
            legacyHeaders: false,
            skipSuccessfulRequests: true,
            message: 'To many request, please try again later'
        })
    )
    app.use(
        slowDown({
            windowMs: 15 * 60 * 1000,
            delayAfter: 10,
            delayMs: () => 500,
            maxDelayMs: 2000,
            skipSuccessfulRequests: true
        })
    )

    app.use(passport.initialize())
    passport.use('jwt', jwtStrategy)
    
    app.use('/api/v1', router);
    app.use((req, res, next) => {
        next(new ApiError(StatusCodes.NOT_FOUND, 'Not found'));
    })

    app.use(errorConverter)
    app.use(errorHandler)
    
    return app
}
