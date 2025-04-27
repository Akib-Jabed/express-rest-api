import { In } from 'typeorm';
import AppDataSource from '../config/database.config.js';
import HrEmployee from '../entities/hr_employee.entity.js';
import HrOrganizationSetup from '../entities/hr_organization_setup.entity.js';
import ApiError from '../utils/ApiError.js';
import { generateToken, hashPassword } from '../utils/auth.js';

export const registerEmployee = async ({username, password}) => {
  const hrEmployeeRepo = AppDataSource.getRepository(HrEmployee);
  
  const employee = await hrEmployeeRepo.findOne({
    select: {
      employee_id: true, 
      hrOrganizationSetup: { 
        portal_access: true
      }
    },
    where: [
      {
        publication_status: 'activated',
        employee_custom_id: username
      },
      {
        publication_status: 'activated',
        hrOrganizationSetup: {
          off_email: username,
          publication_status: 'activated',
          working_status: In(['Working', 'JV'])
        }
      }
    ],
    relations: ['hrOrganizationSetup']
  });
  
  if (!employee) {
    throw new ApiError(400, 'Employee not found');
  }
  if (employee.hrOrganizationSetup.portal_access === 'Yes') {
    throw new ApiError(400, 'Employee already registered');
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