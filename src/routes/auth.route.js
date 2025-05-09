import express from 'express';
import passport from 'passport';

import { loginController, registerController, passwordUpdateController } from '../controllers/auth.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { loginSchema, registerSchema, passwordUpdateSchema } from '../schemas/auth.schema.js';

const router = express.Router();

router.post('/register', validate(registerSchema), registerController);
router.post('/login', validate(loginSchema), loginController);
router.post('/update-password', passport.authenticate('jwt', {session: false}), validate(passwordUpdateSchema), passwordUpdateController);


export default router;
