import { StatusCodes } from 'http-status-codes';

import AppDataSource from '../config/database.config.js';
import HrEmployee from '../entities/hr_employee.entity.js';
import HrOrganizationSetup from '../entities/hr_organization_setup.entity.js';
import { isActiveEmployee } from '../helpers/query.js';
import ApiError from '../utils/ApiError.js';
import { generateToken, hashPassword, verifyPassword } from '../utils/auth.js';

export const registerService = async ({username, password}) => {
  const hrEmployeeRepo = AppDataSource.getRepository(HrEmployee);
  
  const employee = await isActiveEmployee(username);
  
  if (!employee) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Employee not found');
  }
  if (employee.organizationSetup.portal_access === 'Yes') {
    throw new ApiError(StatusCodes.CONFLICT, 'Employee already registered');
  }
  
  await AppDataSource.transaction(async transactionManager => {
    await transactionManager.update(HrEmployee, employee.employee_id, {
      password: await hashPassword(password)
    });
    
    await transactionManager.update(HrOrganizationSetup, {employee_id: employee.employee_id}, {
      portal_access: 'Yes'
    });
  })
  
  const token = generateToken({employeeId: employee.employee_id});
  return token;
}

export const loginService = async ({username, password}) => {
  const employee = await isActiveEmployee(username);
  
  if (!employee) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Employee not found');
  }  
  if (employee.organizationSetup.portal_access === 'No') {
    throw new ApiError(StatusCodes.FORBIDDEN, "Employee don't have portal access");
  }

  if (await verifyPassword(password, employee.password)) {
    const token = generateToken({employeeId: employee.employee_id});
    return token;
  }

  throw new ApiError(StatusCodes.UNAUTHORIZED, 'Invalid credentials');
}