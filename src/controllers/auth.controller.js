import { registerEmployee } from "../services/auth.service.js";
import catchAsync from "../utils/catchAsync.js";

export const register = catchAsync(async (req, res) => {
    const token = await registerEmployee(req.body);
    
    return res.status(200).send({success: true, message: 'Employee registered successfully', token})    
})