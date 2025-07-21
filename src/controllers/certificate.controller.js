import { StatusCodes } from 'http-status-codes';

import catchAsync from '../utils/catchAsync.js';
import { createService, getService } from '../services/certificate.service.js';


export const certificateCreateController = catchAsync(async (req, res) => {
    const {employeeId} = req;
    await createService(employeeId, req.Body);

    res.status(StatusCodes.CREATED).send({success: true, message: 'Certificate request created successfully!'});
})

export const certificateGetController = catchAsync(async (req, res) => {
    const {employeeId} = req;
    const certificates = await getService(employeeId);
})