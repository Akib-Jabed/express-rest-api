import { StatusCodes } from 'http-status-codes';

import { loginService, registerService } from "../services/auth.service.js";
import catchAsync from "../utils/catchAsync.js";
import AppDataSource from '../config/database.config.js';
import HrEmployee from '../entities/hr_employee.entity.js';
import ApiError from '../utils/ApiError.js';
import { verifyPassword, hashPassword, generateToken } from '../utils/auth.js';

export const registerController = catchAsync(async (req, res) => {
    const token = await registerService(req.Body);
    
    return res.status(StatusCodes.OK).send({success: true, message: 'Employee registered successfully', token})    
})

export const loginController = catchAsync(async (req, res) => {
    const token = await loginService(req.Body);

    return res.status(StatusCodes.OK).send({success: true, message: 'Employee login successful', token})   
})

export const passwordUpdateController = catchAsync(async (req, res) => {
    const hrEmployeeRepo = AppDataSource.getRepository(HrEmployee);
    const employee = await hrEmployeeRepo.findOne({
        select: {
            employeeId: true,
            password: true
        },
        where: {
            employeeId: req.employeeId,
            publicationStatus: 'activated',
        }
    });

    if (await verifyPassword(req.Body.currentPassword, employee.password)) {
        employee.password = await hashPassword(req.Body.newPassword);
        await hrEmployeeRepo.save(employee);
        
        const token = generateToken({employeeId: employee.employeeId});
        return res.status(StatusCodes.OK).send({success: true, message: 'Password updated successfully', token})
    }

    throw new ApiError(StatusCodes.BAD_REQUEST, 'Invalid current password');
});