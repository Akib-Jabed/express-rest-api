import { EntitySchema } from 'typeorm';


const HrOrganizationSetup = new EntitySchema({
  name: 'HrOrganizationSetup',
  tableName: 'hr_organization_setup',
  columns: {
    organization_setup_id: {
      type: Number,
      primary: true,
      generated: true,
    },
    employee_id: {
      type: Number,
    },
    reporting_supervisor_id: {
      type: Number,
      nullable: true,
    },
    dept_head_id: {
      type: Number,
      nullable: true,
    },
    company_setup_id: {
      type: Number,
    },
    id_business_unit: {
      type: Number,
    },
    employee_desig_id: {
      type: Number,
    },
    id_department: {
      type: Number,
    },
    id_grade: {
      type: Number,
      nullable: true,
    },
    joining_date: {
      type: 'date',
    },
    effective_date: {
      type: 'date',
    },
    actual_joining_date: {
      type: 'date',
      nullable: true,
    },
    work_station_id: {
      type: Number,
    },
    id_employee_nature_type: {
      type: Number,
    },
    shift_id: {
      type: Number,
      nullable: true,
    },
    line_supervisor_id: {
      type: Number,
      nullable: true,
    },
    line_supervisor_desig_id: {
      type: Number,
      nullable: true,
    },
    reporting_supervisor_desig_id: {
      type: Number,
      nullable: true,
    },
    off_number: {
      type: String,
      length: 50,
      nullable: true,
    },
    off_email: {
      type: String,
      length: 80,
      nullable: true,
    },
    bank_id: {
      type: Number,
      nullable: true,
    },
    branch_id: {
      type: Number,
      nullable: true,
    },
    bank_routing_number: {
      type: String,
      length: 30,
      nullable: true,
    },
    equivalent_designation_id: {
      type: Number,
      nullable: true,
    },
    off_acc_num: {
      type: String,
      length: 80,
      nullable: true,
      default: () => "'NULL'",
    },
    working_status: {
      type: 'enum',
      enum: ['Working', 'Resigned', 'Retired', 'Terminated', 'Dismissal', 'JV', 'LWI', 'Discharged', 'Salary Hold', 'Long Leave'],
    },
    management_type: {
      type: 'enum',
      enum: ['Non Management', 'Management', 'MAX Worker'],
    },
    skill_status: {
      type: String,
      length: 100,
      nullable: true,
    },
    skill_confirmed_by: {
      type: Number,
      nullable: true,
    },
    publication_status: {
      type: 'enum',
      enum: ['activated', 'deactivated'],
      default: 'activated',
    },
    date_created: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
    date_updated: {
      type: 'timestamp',
      nullable: true,
      onUpdate: 'CURRENT_TIMESTAMP',
    },
    id_users: {
      type: Number,
    },
    id_hr_employee_cost_center_setup: {
      type: Number,
      nullable: true,
    },
    portal_access: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
    },
    resign_date: {
      type: 'date',
      nullable: true,
    },
    resign_submission_date: {
      type: 'date',
      nullable: true,
    },
    mobile_banking_number: {
      type: String,
      length: 45,
      nullable: true,
    },
    time_period: {
      type: Number,
      nullable: true,
    },
    mobile_banking_type_id: {
      type: Number,
      nullable: true,
    },
    id_hr_organization_setup_file_import: {
      type: Number,
      nullable: true,
    },
    id_hr_organization_setup_file_import_update: {
      type: Number,
      nullable: true,
    },
    salary_hold_reason: {
      type: 'text',
      nullable: true,
    },
    overhead_status: {
      type: 'enum',
      enum: ['Yes', 'No'],
      nullable: true,
    },
    separation_payable_days: {
      type: 'double',
      precision: 12,
      scale: 2,
      nullable: true,
    },
    remark: {
      type: 'text',
      nullable: true,
    },
    manual_attendance: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
    },
    id_hr_leave_policy_template: {
      type: Number,
    },
    id_sub_function: {
      type: Number,
      nullable: true,
    },
    id_hr_profession_type: {
      type: Number,
    },
    work_scope: {
      type: 'text',
      nullable: true,
    },
    mobile_balance_limit: {
      type: 'double',
      precision: 12,
      scale: 2,
    },
    is_roaster_shifting: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
    },
    late_deduction_type: {
      type: 'enum',
      enum: ['General', 'Special', 'Eight Hours'],
      default: 'General',
    },
    id_bonus_cost_center_setup: {
      type: Number,
      nullable: true,
    },
    is_continue_service: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
    },
    works_for_bu_id: {
      type: Number,
      nullable: true,
    },
    por_pay_strc_show: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
    },
    manual_tax_calculation: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
    },
    hr_absent_template_id: {
      type: Number,
    },
  },
  relations: {
    hrEmployee: {
      type: "one-to-one",
      target: "HrEmployee",
      inverseSide: 'organizationSetup'
    },
    designationMaster: {
      type: "one-to-one",
      target: 'HrDesignationMaster',
      joinColumn: {
        name: "employee_desig_id",
        referencedColumnName: 'designation_id'
      },
      inverseSide: "organizationSetup"
    },
    departments: {
      type: "one-to-one",
      target: 'HrDepartments',
      joinColumn: {
        name: "id_department",
        referencedColumnName: 'id_department'
      },
      inverseSide: "organizationSetup"
    }
  }
});

export default HrOrganizationSetup;