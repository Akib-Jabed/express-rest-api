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
      offEmail: information.organizationSetup.offEmail,
      designationTitle: information.organizationSetup.designationMaster.designationTitle,
      department: information.organizationSetup.departments.department
    }
  }
  
  const flattenObj = createFlattenOject(information);
  
  return { obj, flattenObj };
}