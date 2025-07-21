import { In, LessThanOrEqual } from 'typeorm';
import AppDataSource from '../config/database.config.js';
import HrEmployee from '../entities/hr_employee.entity.js';
import HrEmployeeSalaryInfo from '../entities/hr_employee_salary_info.entity.js';
import HrEarningHeads from '../entities/hr_earning_heads.entity.js';
import HrDeductionHeads from '../entities/hr_deduction_heads.entity.js';

const hrEmployeeRepo = AppDataSource.getRepository(HrEmployee);
const hrEmployeeSalaryInfoRepo = AppDataSource.getRepository(HrEmployeeSalaryInfo);
const hrEarningHeadsRepo = AppDataSource.getRepository(HrEarningHeads);
const hrDeductionHeadsRepo = AppDataSource.getRepository(HrDeductionHeads);

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

export const getLastSalaryRecordId = async (employeeId) => {
  const currentDate = new Date();
  const yearMonth = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
  
  const latestSalaryRecord = await hrEmployeeSalaryInfoRepo.findOne({
    select: {
      employeeSalaryInfoId: true
    },
    where: {
      employeeId: employeeId,
      publicationStatus: 'activated',
      yearMonth: LessThanOrEqual(yearMonth),
    },
    order: {
      yearMonth: 'DESC'
    }
  });

  return latestSalaryRecord;
}

export const getEmployeeCurrentSalary = async (employeeId) => {
  const latestSalaryRecord = await getLastSalaryRecordId(employeeId);

  if (latestSalaryRecord) {
    const salaryDetails = await hrEmployeeSalaryInfoRepo.findOne({
      select: {
        basicSalary: true,
        grossSalary: true,
        ctcSalary: true,
        employeeSalaryInfoId: true,
        payStructureSetupRecordsId: true
      },
      where: {
        employeeSalaryInfoId: latestSalaryRecord.employeeSalaryInfoId
      }
    });

    return salaryDetails;
  }

  return null;
}

export const getEarningHeads = async () => {
  const earningHeads = await hrEarningHeadsRepo.find({
    select: {
      earningHeadsId: true,
      earningHeadsName: true
    },
    where: {
      publicationStatus: 'activated',
    }
  });

  return earningHeads.reduce((acc, head) => {
    acc[head.earningHeadsId] = {
      headId: head.earningHeadsId,
      headName: head.earningHeadsName
    };
    return acc;
  }, {});
}

export const getDeductionHeads = async () => {
  const deductionHeads = await hrDeductionHeadsRepo.find({
    select: {
      deductionHeadsId: true,
      deductionHeadsName: true
    },
    where: {
      publicationStatus: 'activated',
    }
  });

  return deductionHeads.reduce((acc, head) => {
    acc[head.deductionHeadsId] = {
      headId: head.deductionHeadsId,
      headName: head.deductionHeadsName
    };
    return acc;
  }, {});
}

