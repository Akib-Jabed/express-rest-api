import { StatusCodes } from 'http-status-codes';

import { loginService, registerService } from "../services/auth.service.js";
import catchAsync from "../utils/catchAsync.js";

export const registerController = catchAsync(async (req, res) => {
    const token = await registerService(req.Body);
    
    return res.status(StatusCodes.OK).send({success: true, message: 'Employee registered successfully', token})    
})

export const loginController = catchAsync(async (req, res) => {
    const token = await loginService(req.Body);

    return res.status(StatusCodes.OK).send({success: true, message: 'Employee login successful', token})   
})