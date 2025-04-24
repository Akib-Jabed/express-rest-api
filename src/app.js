import compression from 'compression';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import { xss } from 'express-xss-sanitizer';
import helmet from 'helmet';
import hpp from 'hpp';
import nocache from 'nocache';
import passport from 'passport';
import path from 'path';
import zlib from 'zlib';

import environments from './config/environment.config.js';
import jwtStrategy from './config/passport.config.js';
import router from './routes/index.js';


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
            max: 100,
            standardHeaders: true,
            legacyHeaders: false,
            message: 'To many request, please try again later'
        })
    )
    app.use(
        slowDown({
            windowMs: 15 * 60 * 1000,
            delayAfter: 50,
            delayMs: (hits) => hits * 1000,
        })
    )

    app.use(passport.initialize())
    passport.use('jwt', jwtStrategy)
    
    app.use('/api/v1', router);
    
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
    
    return app
}



//   private async middleware() {
//     this.app.use(
//       session({
//         resave: false,
//         saveUninitialized: false,
//         secret: environments.SESSION_SECRET,
//         cookie: { httpOnly: true }
//       })
//     )
//   }

//   private async route() {
//     this.app.use(`${this.version}/auth`)
//   }
// }
