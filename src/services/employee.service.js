import { In } from 'typeorm';

import AppDataSource from '../config/database.config.js';
import HrEmployee from '../entities/hr_employee.entity.js';
import { createFlattenOject } from '../helpers/formatter.js';

const hrEmployeeRepo = AppDataSource.getRepository(HrEmployee);

export const informationService = async employeeId => {
    const information = await hrEmployeeRepo.findOne({
        select: {
          employeeId: true, 
          employeeCustomId: true,
          firstName: true,
          lastName: true,
          fullName: true,
          avatar: true,
          organizationSetup: { 
            employeeId: true,
            offEmail: true,
            employeeDesigId: true,
            idDepartment: true,
            designationMaster: {
              designationTitle: true
            },
            departments: {
              department: true
            }
          }
        },
        where: {
          publicationStatus: 'activated',
          employeeId: employeeId,
          organizationSetup: {
            publicationStatus: 'activated',
            workingStatus: In(['Working', 'JV'])
          }
        },
        relations: { 
          organizationSetup: {
            designationMaster: true,
            departments: true
          }
        }
      });

    const obj = {
        personal: {
            employee_id: information.employee_id,
            employee_custom_id: information.employee_custom_id,
            full_name: information.full_name,
            avatar: information.avatar
        },
        organization: {
            off_email: information.organizationSetup.off_email,
            designation_title: information.organizationSetup.designationMaster.designation_title,
            department: information.organizationSetup.departments.department
        }
    }

    const flattenObj = createFlattenOject(information);
    
    return { obj, flattenObj };
}