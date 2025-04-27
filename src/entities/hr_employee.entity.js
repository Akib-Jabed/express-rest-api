import { EntitySchema } from 'typeorm';

const HrEmployee = new EntitySchema({
  name: 'HrEmployee',
  tableName: 'hr_employee',
  columns: {
    employee_id: {
      type: 'int',
      primary: true,
      generated: 'increment',
      unsigned: true,
      name: 'employee_id',
    },
    employee_custom_id: {
      type: 'varchar',
      length: 255,
    },
    employee_legacy_id: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    temp_id_projects: {
      type: 'int',
      nullable: true,
    },
    first_name: {
      type: 'varchar',
      length: 255,
    },
    middle_name: {
      type: 'varchar',
      length: 255,
    },
    last_name: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    phone_number: {
      type: 'varchar',
      length: 255,
    },
    gender: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    marital_status: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    father_name: {
      type: 'varchar',
      length: 255,
    },
    mother_name: {
      type: 'varchar',
      length: 255,
    },
    present_address: {
      type: 'text',
    },
    permanant_address: {
      type: 'text',
    },
    email: {
      type: 'varchar',
      length: 255,
    },
    nid: {
      type: 'varchar',
      length: 255,
    },
    blood_group: {
      type: 'varchar',
      length: 10,
      nullable: true,
    },
    religion: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    avatar: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    dob: {
      type: 'date',
      nullable: true,
    },
    publication_status: {
      type: 'enum',
      enum: ['activated', 'deactivated'],
      default: 'activated',
      nullable: true,
    },
    date_created: {
      type: 'timestamp',
      createDate: true,
      nullable: true,
    },
    date_updated: {
      type: 'timestamp',
      updateDate: true,
      nullable: true,
    },
    id_users: {
      type: 'int',
      nullable: true,
    },
    telephone_number: {
      type: 'varchar',
      length: 255,
    },
    driving_liscence: {
      type: 'varchar',
      length: 255,
    },
    spouse_name: {
      type: 'varchar',
      length: 255,
    },
    passport: {
      type: 'varchar',
      length: 255,
    },
    start_title: {
      type: 'varchar',
      length: 255,
    },
    end_title: {
      type: 'varchar',
      length: 255,
    },
    birth_certificate_number: {
      type: 'varchar',
      length: 255,
    },
    emergency_phone_number: {
      type: 'varchar',
      length: 255,
    },
    home_district: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    full_name: {
      type: 'varchar',
      length: 255,
    },
    password: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    password_changed: {
      type: 'enum',
      enum: ['yes', 'no'],
      default: 'no',
      nullable: true,
    },
    tin_number: {
      type: 'varchar',
      length: 255,
    },
    emergency_contact_name: {
      type: 'varchar',
      length: 255,
    },
    emergency_contact_relation: {
      type: 'varchar',
      length: 255,
    },
    spouse_profession: {
      type: 'varchar',
      length: 255,
    },
    spouse_dob: {
      type: 'varchar',
      length: 255,
    },
    marraigeDate: {
      type: 'varchar',
      length: 255,
    },
    spouse_blood_group: {
      type: 'varchar',
      length: 10,
    },
    tin_certificate: {
      type: 'varchar',
      length: 255,
    },
    tax_circle: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    tax_zone: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    id_hr_tax_area_type: {
      type: 'int',
      nullable: true,
    },
    id_hris_talent_acquisition_joining_details: {
      type: 'int',
      nullable: true,
    },
    id_interview_appraised_candidate: {
      type: 'int',
      nullable: true,
    },
    id_hr_employee_insert_file_import: {
      type: 'int',
      nullable: true,
    },
    id_country_details: {
      type: 'int',
      nullable: true,
    },
    avatar_original_name: {
      type: 'text',
      nullable: true,
    },
    tin_original_name: {
      type: 'text',
      nullable: true,
    },
    remarks: {
      type: 'text',
      nullable: true,
    },
    id_hris_job_requisition_summery: {
      type: 'int',
      nullable: true,
    },
    id_hris_file_entry_details: {
      type: 'int',
      nullable: true,
    },
    id_por_employee_car_ait: {
      type: 'int',
      nullable: true,
    },
    id_por_employee_tin_info: {
      type: 'int',
      nullable: true,
    },
  },
  relations: {
    hrOrganizationSetup: {
      type: "one-to-one",
      target: 'HrOrganizationSetup',
      inverseSide: "hrEmployee"
    }
  }
});

export default HrEmployee;