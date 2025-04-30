import { In } from 'typeorm';
import AppDataSource from '../config/database.config.js';
import HrEmployee from '../entities/hr_employee.entity.js';

const hrEmployeeRepo = AppDataSource.getRepository(HrEmployee);

export const isActiveEmployee = async (username) => {
  const employee = await hrEmployeeRepo.findOne({
    select: {
      employee_id: true, 
      password: true,
      organizationSetup: { 
        portal_access: true
      }
    },
    where: [
      {
        publication_status: 'activated',
        employee_custom_id: username,
        organizationSetup: {
          publication_status: 'activated',
          working_status: In(['Working', 'JV'])
        }
      },
      {
        publication_status: 'activated',
        organizationSetup: {
          off_email: username,
          publication_status: 'activated',
          working_status: In(['Working', 'JV'])
        }
      }
    ],
    relations: { organizationSetup: true }
  });
  
  return employee;
}

export const employeeInformation = async (employeeId) => {
  const information = await hrEmployeeRepo.findOne({
    select: {
      employee_id: true, 
      employee_custom_id: true,
      first_name: true,
      last_name: true,
      full_name: true,
      avatar: true,
      organizationSetup: { 
        employee_id: true,
        off_email: true,
        employee_desig_id: true,
        id_department: true,
        designationMaster: {
          designation_title: true
        },
        departments: {
          department: true
        }
      }
    },
    where: {
      publication_status: 'activated',
      employee_id: employeeId,
      organizationSetup: {
        publication_status: 'activated',
        working_status: In(['Working', 'JV'])
      }
    },
    relations: { 
      organizationSetup: {
        designationMaster: true,
        departments: true
      }
    }
  });
  
  return information;
}