import { StatusCodes } from 'http-status-codes';

import { informationService } from '../services/employee.service.js';
import catchAsync from '../utils/catchAsync.js';


export const employeeInformationController = catchAsync(async (req, res) => {
    const {employeeId} = req;
    const {type, fields} = req.Query;
    const { obj: employeeInfo, flattenObj: flattenEmployeeInfo } = await informationService(employeeId);
    
    let responseData = employeeInfo;

    if (type) {
        responseData = employeeInfo[type];
    } else if (fields) {
        responseData = fields.split(',').reduce((acc, key) => {
            acc[key] = flattenEmployeeInfo[key] || ''
            return acc;
        }, {});
    }

    res.status(StatusCodes.OK).send({success: true, data: responseData});
}); 