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
      middleName: true,
      lastName: true,
      fullName: true,
      email: true,
      phoneNumber: true,
      emergencyContactName: true,
      emergencyPhoneNumber: true,
      emergencyContactRelation: true,
      telephoneNumber: true,
      gender: true,
      dob: true,
      maritalStatus: true,
      fatherName: true,
      motherName: true,
      homeDistrict: true,
      presentAddress: true,
      permanantAddress: true,
      drivingLiscence: true,
      religion: true,
      bloodGroup: true,
      nid: true,
      birthCertificateNumber: true,
      tinNumber: true,
      tinCertificate: true,
      taxCircle: true,
      taxZone: true,
      taxAreaType: {
        areaType: true
      },
      passport: true,
      avatar: true,
      organizationSetup: { 
        offEmail: true,
        offNumber: true,
        workingStatus: true,
        actualJoiningDate: true,
        effectiveDate: true,
        managementType: true,
        offAccNum: true,
        designationMaster: {
          designationTitle: true
        },
        departments: {
          department: true
        },
        projects: {
          projectName: true,
          company: {
            companyName: true,
          }
        },
        equivalentDesignations: {
          equivalentDesignationTitle: true
        },
        banks: {
          bankName: true
        },
        branches: {
          branchName: true
        },
        grades: {
          gradeName: true
        },
        shifts: {
          shiftName: true
        },
        natureTypes: {
          typeName: true
        },
        lineSupervisors: {
          fullName: true
        },
        reportSupervisors: {
          fullName: true
        },
        departmentHeads: {
          fullName: true
        },
        lineSupervisorDesignations: {
          designationTitle: true
        },
        reportSupervisorDesignations: {
          designationTitle: true
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
        departments: true,
        projects: {
          company: true
        },
        equivalentDesignations: true,
        banks: true,
        branches: true,
        grades: true,
        shifts: true,
        natureTypes: true,
        lineSupervisors: true,
        reportSupervisors: true,
        departmentHeads: true,
        lineSupervisorDesignations: true,
        reportSupervisorDesignations: true
      },
      taxAreaType: true
    }
  });

  const obj = {
    personal: {
      employeeId: information.employeeId,
      employeeCustomId: information.employeeCustomId,
      firstName: information.firstName,
      middleName: information.middleName,
      lastName: information.lastName,
      fullName: information.fullName,
      email: information.email,
      avatar: information.avatar,
      phoneNumber: information.phoneNumber,
      emergencyContactName: information.emergencyContactName,
      emergencyPhoneNumber: information.emergencyPhoneNumber,
      emergencyContactRelation: information.emergencyContactRelation,
      telephoneNumber: information.telephoneNumber,
      gender: information.gender,
      dob: information.dob,
      maritalStatus: information.maritalStatus,
      fatherName: information.fatherName,
      motherName: information.motherName,
      homeDistrict: information.homeDistrict,
      presentAddress: information.presentAddress,
      permanantAddress: information.permanantAddress,
      drivingLiscence: information.drivingLiscence,
      religion: information.religion,
      bloodGroup: information.bloodGroup,
      nid: information.nid,
      birthCertificateNumber: information.birthCertificateNumber,
      tinNumber: information.tinNumber,
      tinCertificate: information.tinCertificate,
      taxCircle: information.taxCircle,
      taxZone: information.taxZone,
      taxArea:  information.taxAreaType.areaType,
      passport: information.passport
    },
    organization: {
      company: information.organizationSetup.projects.company.companyName,
      businessUnit: information.organizationSetup.projects.projectName,
      department: information.organizationSetup.departments.department,
      designation: information.organizationSetup.designationMaster.designationTitle,
      equivalentDesignation: information.organizationSetup.equivalentDesignations.equivalentDesignationTitle,
      officialPhone: information.organizationSetup.offNumber,
      officialEmail: information.organizationSetup.offEmail,
      bank: information.organizationSetup.banks.bankName,
      branch: information.organizationSetup.branches.branchName,
      officialAccountNumber: information.organizationSetup.offAccNum,
      workingStatus: information.organizationSetup.workingStatus,
      grade: information.organizationSetup.grades?.gradeName || 'N/A',
      shift: information.organizationSetup.shifts.shiftName,
      joiningDate: information.organizationSetup.actualJoiningDate,
      effectiveDate: information.organizationSetup.effectiveDate,
      managementType: information.organizationSetup.managementType,
      natureType: information.organizationSetup.natureTypes.typeName,
      lineSupervisor: information.organizationSetup.lineSupervisors.fullName,
      lineSupervisorDesignation: information.organizationSetup.lineSupervisorDesignations.designationTitle,
      reportSupervisor: information.organizationSetup.reportSupervisors.fullName,
      reportSupervisorDesignation: information.organizationSetup.reportSupervisorDesignations.designationTitle,
      departmentHead: information.organizationSetup.departmentHeads.fullName
    }
  }
  
  const flattenObj = createFlattenOject(information);
  
  return { obj, flattenObj };
}