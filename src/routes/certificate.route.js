import express from 'express';
import passport from 'passport';

import { certificateCreateController } from '../controllers/certificate.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { certificateCreateSchema } from '../schemas/certificate.schema.js';


const router = express.Router();


router.route('/')
// .get(passport.authenticate('jwt', {session: false}), validate(certificateSchema), certificateController)
.post(passport.authenticate('jwt', {session: false}), validate(certificateCreateSchema), certificateCreateController);


export default router;