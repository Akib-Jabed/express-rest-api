import { In } from 'typeorm';
import AppDataSource from '../config/database.config.js';
import HrEmployee from '../entities/hr_employee.entity.js';

const hrEmployeeRepo = AppDataSource.getRepository(HrEmployee);

export const isActiveEmployee = async (username) => {
  const employee = await hrEmployeeRepo.findOne({
    select: {
      employeeId: true, 
      password: true,
      organizationSetup: { 
        portalAccess: true
      }
    },
    where: [
      {
        publicationStatus: 'activated',
        employeeCustomId: username,
        organizationSetup: {
          publicationStatus: 'activated',
          workingStatus: In(['Working', 'JV'])
        }
      },
      {
        publicationStatus: 'activated',
        organizationSetup: {
          offEmail: username,
          publicationStatus: 'activated',
          workingStatus: In(['Working', 'JV'])
        }
      }
    ],
    relations: { organizationSetup: true }
  });
  
  return employee;
}