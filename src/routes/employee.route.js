import express from 'express';
import passport from 'passport';

import { employeeInformationController } from '../controllers/employee.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { informationSchema } from '../schemas/employee.schema.js';

const router = express.Router();

router.get('/information', passport.authenticate('jwt', {session: false}), validate(informationSchema), employeeInformationController);


export default router;
