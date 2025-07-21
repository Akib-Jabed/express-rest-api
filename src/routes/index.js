import express from 'express';

// import environments from '../config/environment.config.js';
import authRoute from './auth.route.js';
// import employeeRoute from './employee.route.js';
// import certificateRoute from './certificate.route.js';
// import leaveRoute from './leave.route.js';
// import attendanceRoute from './attendance.route.js';


const router = express.Router();

const routes = [
    {
        path: '/auth',
        route: authRoute
    },
    // {
    //     path: '/employee',
    //     route: employeeRoute
    // }, 
    // {
    //     path: '/certificates',
    //     route: certificateRoute
    // },
    // {
    //     path: '/leaves',
    //     route: leaveRoute
    // },
    // {
    //     path: '/attendance',
    //     route: attendanceRoute
    // }
];

routes.forEach(route => router.use(route.path, route.route));

// if (environments.env === 'development') {
//     // router.use('/docs')
// }


export default router;