import { StatusCodes } from 'http-status-codes';

import { loginService, passwordUpdateService, registerService } from "../services/auth.service.js";
import catchAsync from "../utils/catchAsync.js";

export const registerController = catchAsync(async (req, res) => {
    const token = await registerService(req.Body);
    
    return res.status(StatusCodes.OK).send({success: true, message: 'Employee registered successfully', token})    
})

export const loginController = catchAsync(async (req, res) => {
    const token = await loginService(req.Body);

    return res.status(StatusCodes.OK).send({success: true, message: 'Employee login successful', token})   
})

export const passwordUpdateController = catchAsync(async (req, res) => {
    const {employeeId} = req;
    const {currentPassword, newPassword} = req.Body;
    const token = await passwordUpdateService(employeeId, currentPassword, newPassword);

    return res.status(StatusCodes.OK).send({success: true, message: 'Password updated successfully', token})
});