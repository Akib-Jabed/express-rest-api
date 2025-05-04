import { EntitySchema } from 'typeorm';

const HrEmployee = new EntitySchema({
  name: 'HrEmployee',
  tableName: 'hr_employee',
  columns: {
    employeeId: {
      type: 'int',
      primary: true,
      generated: 'increment',
      unsigned: true,
      name: 'employee_id',
    },
    employeeCustomId: {
      type: 'varchar',
      length: 255,
      name: 'employee_custom_id',
    },
    employeeLegacyId: {
      type: 'varchar',
      length: 255,
      nullable: true,
      name: 'employee_legacy_id',
    },
    tempIdProjects: {
      type: 'int',
      nullable: true,
      name: 'temp_id_projects',
    },
    firstName: {
      type: 'varchar',
      length: 255,
      name: 'first_name',
    },
    middleName: {
      type: 'varchar',
      length: 255,
      name: 'middle_name',
    },
    lastName: {
      type: 'varchar',
      length: 255,
      nullable: true,
      name: 'last_name',
    },
    phoneNumber: {
      type: 'varchar',
      length: 255,
      name: 'phone_number',
    },
    gender: {
      type: 'varchar',
      length: 255,
      nullable: true,
      name: 'gender',
    },
    maritalStatus: {
      type: 'varchar',
      length: 255,
      nullable: true,
      name: 'marital_status',
    },
    fatherName: {
      type: 'varchar',
      length: 255,
      name: 'father_name',
    },
    motherName: {
      type: 'varchar',
      length: 255,
      name: 'mother_name',
    },
    presentAddress: {
      type: 'text',
      name: 'present_address',
    },
    permanantAddress: {
      type: 'text',
      name: 'permanant_address',
    },
    email: {
      type: 'varchar',
      length: 255,
      name: 'email',
    },
    nid: {
      type: 'varchar',
      length: 255,
      name: 'nid',
    },
    bloodGroup: {
      type: 'varchar',
      length: 10,
      nullable: true,
      name: 'blood_group',
    },
    religion: {
      type: 'varchar',
      length: 255,
      nullable: true,
      name: 'religion',
    },
    avatar: {
      type: 'varchar',
      length: 255,
      nullable: true,
      name: 'avatar',
    },
    dob: {
      type: 'date',
      nullable: true,
      name: 'dob',
    },
    publicationStatus: {
      type: 'enum',
      enum: ['activated', 'deactivated'],
      default: 'activated',
      nullable: true,
      name: 'publication_status',
    },
    dateCreated: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      name: 'date_created',
    },
    dateUpdated: {
      type: 'timestamp',
      onUpdate: 'CURRENT_TIMESTAMP',
      nullable: true,
      name: 'date_updated',
    },
    idUsers: {
      type: 'int',
      nullable: true,
      name: 'id_users',
    },
    telephoneNumber: {
      type: 'varchar',
      length: 255,
      name: 'telephone_number',
    },
    drivingLiscence: {
      type: 'varchar',
      length: 255,
      name: 'driving_liscence',
    },
    spouseName: {
      type: 'varchar',
      length: 255,
      name: 'spouse_name',
    },
    passport: {
      type: 'varchar',
      length: 255,
      name: 'passport',
    },
    startTitle: {
      type: 'varchar',
      length: 255,
      name: 'start_title',
    },
    endTitle: {
      type: 'varchar',
      length: 255,
      name: 'end_title',
    },
    birthCertificateNumber: {
      type: 'varchar',
      length: 255,
      name: 'birth_certificate_number',
    },
    emergencyPhoneNumber: {
      type: 'varchar',
      length: 255,
      name: 'emergency_phone_number',
    },
    homeDistrict: {
      type: 'varchar',
      length: 255,
      nullable: true,
      name: 'home_district',
    },
    fullName: {
      type: 'varchar',
      length: 255,
      name: 'full_name',
    },
    password: {
      type: 'varchar',
      length: 255,
      nullable: true,
      name: 'password',
    },
    passwordChanged: {
      type: 'enum',
      enum: ['yes', 'no'],
      default: 'no',
      nullable: true,
      name: 'password_changed',
    },
    tinNumber: {
      type: 'varchar',
      length: 255,
      name: 'tin_number',
    },
    emergencyContactName: {
      type: 'varchar',
      length: 255,
      name: 'emergency_contact_name',
    },
    emergencyContactRelation: {
      type: 'varchar',
      length: 255,
      name: 'emergency_contact_relation',
    },
    spouseProfession: {
      type: 'varchar',
      length: 255,
      name: 'spouse_profession',
    },
    spouseDob: {
      type: 'varchar',
      length: 255,
      name: 'spouse_dob',
    },
    marraigeDate: {
      type: 'varchar',
      length: 255,
      name: 'marraigeDate',
    },
    spouseBloodGroup: {
      type: 'varchar',
      length: 10,
      name: 'spouse_blood_group',
    },
    tinCertificate: {
      type: 'varchar',
      length: 255,
      name: 'tin_certificate',
    },
    taxCircle: {
      type: 'varchar',
      length: 255,
      nullable: true,
      name: 'tax_circle',
    },
    taxZone: {
      type: 'varchar',
      length: 255,
      nullable: true,
      name: 'tax_zone',
    },
    idHrTaxAreaType: {
      type: 'int',
      nullable: true,
      name: 'id_hr_tax_area_type',
    },
    idHrisTalentAcquisitionJoiningDetails: {
      type: 'int',
      nullable: true,
      name: 'id_hris_talent_acquisition_joining_details',
    },
    idInterviewAppraisedCandidate: {
      type: 'int',
      nullable: true,
      name: 'id_interview_appraised_candidate',
    },
    idHrEmployeeInsertFileImport: {
      type: 'int',
      nullable: true,
      name: 'id_hr_employee_insert_file_import',
    },
    idCountryDetails: {
      type: 'int',
      nullable: true,
      name: 'id_country_details',
    },
    avatarOriginalName: {
      type: 'text',
      nullable: true,
      name: 'avatar_original_name',
    },
    tinOriginalName: {
      type: 'text',
      nullable: true,
      name: 'tin_original_name',
    },
    remarks: {
      type: 'text',
      nullable: true,
      name: 'remarks',
    },
    idHrisJobRequisitionSummery: {
      type: 'int',
      nullable: true,
      name: 'id_hris_job_requisition_summery',
    },
    idHrisFileEntryDetails: {
      type: 'int',
      nullable: true,
      name: 'id_hris_file_entry_details',
    },
    idPorEmployeeCarAit: {
      type: 'int',
      nullable: true,
      name: 'id_por_employee_car_ait',
    },
    idPorEmployeeTinInfo: {
      type: 'int',
      nullable: true,
      name: 'id_por_employee_tin_info',
    },
  },
  relations: {
    organizationSetup: {
      type: "one-to-one",
      target: 'HrOrganizationSetup',
      joinColumn: {
        name: "employee_id",
        referencedColumnName: 'employee_id'
      },
      inverseSide: "hrEmployee"
    }
  }
});

export default HrEmployee;