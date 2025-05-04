import { EntitySchema } from 'typeorm';

const HrOrganizationSetup = new EntitySchema({
  name: 'HrOrganizationSetup',
  tableName: 'hr_organization_setup',
  columns: {
    organizationSetupId: {
      type: Number,
      primary: true,
      generated: true,
      name: 'organization_setup_id'
    },
    employeeId: {
      type: Number,
      name: 'employee_id'
    },
    reportingSupervisorId: {
      type: Number,
      nullable: true,
      name: 'reporting_supervisor_id'
    },
    deptHeadId: {
      type: Number,
      nullable: true,
      name: 'dept_head_id'
    },
    companySetupId: {
      type: Number,
      name: 'company_setup_id'
    },
    idBusinessUnit: {
      type: Number,
      name: 'id_business_unit'
    },
    employeeDesigId: {
      type: Number,
      name: 'employee_desig_id'
    },
    idDepartment: {
      type: Number,
      name: 'id_department'
    },
    idGrade: {
      type: Number,
      nullable: true,
      name: 'id_grade'
    },
    joiningDate: {
      type: 'date',
      name: 'joining_date'
    },
    effectiveDate: {
      type: 'date',
      name: 'effective_date'
    },
    actualJoiningDate: {
      type: 'date',
      nullable: true,
      name: 'actual_joining_date'
    },
    workStationId: {
      type: Number,
      name: 'work_station_id'
    },
    idEmployeeNatureType: {
      type: Number,
      name: 'id_employee_nature_type'
    },
    shiftId: {
      type: Number,
      nullable: true,
      name: 'shift_id'
    },
    lineSupervisorId: {
      type: Number,
      nullable: true,
      name: 'line_supervisor_id'
    },
    lineSupervisorDesigId: {
      type: Number,
      nullable: true,
      name: 'line_supervisor_desig_id'
    },
    reportingSupervisorDesigId: {
      type: Number,
      nullable: true,
      name: 'reporting_supervisor_desig_id'
    },
    offNumber: {
      type: String,
      length: 50,
      nullable: true,
      name: 'off_number'
    },
    offEmail: {
      type: String,
      length: 80,
      nullable: true,
      name: 'off_email'
    },
    bankId: {
      type: Number,
      nullable: true,
      name: 'bank_id'
    },
    branchId: {
      type: Number,
      nullable: true,
      name: 'branch_id'
    },
    bankRoutingNumber: {
      type: String,
      length: 30,
      nullable: true,
      name: 'bank_routing_number'
    },
    equivalentDesignationId: {
      type: Number,
      nullable: true,
      name: 'equivalent_designation_id'
    },
    offAccNum: {
      type: String,
      length: 80,
      nullable: true,
      default: () => "'NULL'",
      name: 'off_acc_num'
    },
    workingStatus: {
      type: 'enum',
      enum: ['Working', 'Resigned', 'Retired', 'Terminated', 'Dismissal', 'JV', 'LWI', 'Discharged', 'Salary Hold', 'Long Leave'],
      name: 'working_status'
    },
    managementType: {
      type: 'enum',
      enum: ['Non Management', 'Management', 'MAX Worker'],
      name: 'management_type'
    },
    skillStatus: {
      type: String,
      length: 100,
      nullable: true,
      name: 'skill_status'
    },
    skillConfirmedBy: {
      type: Number,
      nullable: true,
      name: 'skill_confirmed_by'
    },
    publicationStatus: {
      type: 'enum',
      enum: ['activated', 'deactivated'],
      default: 'activated',
      name: 'publication_status'
    },
    dateCreated: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      name: 'date_created'
    },
    dateUpdated: {
      type: 'timestamp',
      nullable: true,
      onUpdate: 'CURRENT_TIMESTAMP',
      name: 'date_updated'
    },
    idUsers: {
      type: Number,
      name: 'id_users'
    },
    idHrEmployeeCostCenterSetup: {
      type: Number,
      nullable: true,
      name: 'id_hr_employee_cost_center_setup'
    },
    portalAccess: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
      name: 'portal_access'
    },
    resignDate: {
      type: 'date',
      nullable: true,
      name: 'resign_date'
    },
    resignSubmissionDate: {
      type: 'date',
      nullable: true,
      name: 'resign_submission_date'
    },
    mobileBankingNumber: {
      type: String,
      length: 45,
      nullable: true,
      name: 'mobile_banking_number'
    },
    timePeriod: {
      type: Number,
      nullable: true,
      name: 'time_period'
    },
    mobileBankingTypeId: {
      type: Number,
      nullable: true,
      name: 'mobile_banking_type_id'
    },
    idHrOrganizationSetupFileImport: {
      type: Number,
      nullable: true,
      name: 'id_hr_organization_setup_file_import'
    },
    idHrOrganizationSetupFileImportUpdate: {
      type: Number,
      nullable: true,
      name: 'id_hr_organization_setup_file_import_update'
    },
    salaryHoldReason: {
      type: 'text',
      nullable: true,
      name: 'salary_hold_reason'
    },
    overheadStatus: {
      type: 'enum',
      enum: ['Yes', 'No'],
      nullable: true,
      name: 'overhead_status'
    },
    separationPayableDays: {
      type: 'double',
      precision: 12,
      scale: 2,
      nullable: true,
      name: 'separation_payable_days'
    },
    remark: {
      type: 'text',
      nullable: true,
      name: 'remark'
    },
    manualAttendance: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
      name: 'manual_attendance'
    },
    idHrLeavePolicyTemplate: {
      type: Number,
      name: 'id_hr_leave_policy_template'
    },
    idSubFunction: {
      type: Number,
      nullable: true,
      name: 'id_sub_function'
    },
    idHrProfessionType: {
      type: Number,
      name: 'id_hr_profession_type'
    },
    workScope: {
      type: 'text',
      nullable: true,
      name: 'work_scope'
    },
    mobileBalanceLimit: {
      type: 'double',
      precision: 12,
      scale: 2,
      name: 'mobile_balance_limit'
    },
    isRoasterShifting: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
      name: 'is_roaster_shifting'
    },
    lateDeductionType: {
      type: 'enum',
      enum: ['General', 'Special', 'Eight Hours'],
      default: 'General',
      name: 'late_deduction_type'
    },
    idBonusCostCenterSetup: {
      type: Number,
      nullable: true,
      name: 'id_bonus_cost_center_setup'
    },
    isContinueService: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
      name: 'is_continue_service'
    },
    worksForBuId: {
      type: Number,
      nullable: true,
      name: 'works_for_bu_id'
    },
    porPayStrcShow: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
      name: 'por_pay_strc_show'
    },
    manualTaxCalculation: {
      type: 'enum',
      enum: ['Yes', 'No'],
      default: 'No',
      name: 'manual_tax_calculation'
    },
    hrAbsentTemplateId: {
      type: Number,
      name: 'hr_absent_template_id'
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