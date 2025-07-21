import express from 'express';
import passport from 'passport';

import { employeeInformationController, employeeAvatarUploadController } from '../controllers/employee.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { informationGetSchema } from '../schemas/employee.schema.js';
import { fileUploader } from '../middlewares/file-uploader.middleware.js';

const router = express.Router();

router.get('/information', 
    passport.authenticate('jwt', {session: false}), 
    validate(informationGetSchema), 
    employeeInformationController)
router.put('/avatar', 
    passport.authenticate('jwt', {session: false}), 
    fileUploader,
    employeeAvatarUploadController);


export default router;
