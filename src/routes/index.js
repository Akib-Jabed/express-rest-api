import express from 'express';

import environments from '../config/environment.config.js';
import authRoute from './auth.route.js';
import employeeRoute from './employee.route.js';

const router = express.Router();

const routes = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/employee',
        route: employeeRoute
    }
];

routes.forEach(route => router.use(route.path, route.route));

if (environments.env === 'development') {
    // router.use('/docs')
}


export default router;