import { EntitySchema } from 'typeorm';

const Projects = new EntitySchema({
  name: 'Projects',
  tableName: 'projects',
  columns: {
    idProjects: {
      name: 'id_projects',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    projectId: {
      name: 'project_id',
      type: 'varchar',
      length: 30,
      nullable: true
    },
    payrollCompaniesId: {
      name: 'payroll_companies_id',
      type: 'int',
      unsigned: true,
      nullable: true
    },
    taxCompaniesId: {
      name: 'tax_companies_id',
      type: 'int',
      unsigned: true,
      nullable: true
    },
    projectType: {
      name: 'project_type',
      type: 'varchar',
      length: 45,
      nullable: true
    },
    projectName: {
      name: 'project_name',
      type: 'varchar',
      length: 100,
      nullable: false
    },
    abbreviationName: {
      name: 'abbreviation_name',
      type: 'varchar',
      length: 100,
      nullable: true
    },
    projectLocation: {
      name: 'project_location',
      type: 'varchar',
      length: 200,
      nullable: true
    },
    createDate: {
      name: 'create_date',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP'
    },
    updateDate: {
      name: 'update_date',
      type: 'datetime',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP'
    },
    remarks: {
      type: 'text',
      nullable: true
    },
    details: {
      type: 'text',
      nullable: true
    },
    status: {
      type: 'enum',
      enum: [
        'tender_submitted',
        'tender_approved',
        'running',
        'completed',
        'closed',
        'hidden'
      ],
      nullable: true
    },
    idCompanies: {
      name: 'id_companies',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    contactPersonName: {
      name: 'contact_person_name',
      type: 'varchar',
      length: 100,
      nullable: true
    },
    contactPersonNo: {
      name: 'contact_person_no',
      type: 'varchar',
      length: 45,
      nullable: true
    },
    budgetType: {
      name: 'budget_type',
      type: 'enum',
      enum: ['recurring', 'fixed'],
      default: 'fixed',
      nullable: true
    },
    isProject: {
      name: 'is_project',
      type: 'enum',
      enum: ['yes', 'no'],
      nullable: true
    },
    isOfflineProject: {
      name: 'is_offline_project',
      type: 'enum',
      enum: ['yes', 'no'],
      default: 'no',
      nullable: true
    },
    leaveCalculationCalendarType: {
      name: 'leave_calculation_calendar_type',
      type: 'enum',
      enum: ['fiscal-year', 'calendar-year'],
      default: 'fiscal-year',
      nullable: false
    },
    blockAccess: {
      name: 'block_access',
      type: 'boolean',
      default: false,
      nullable: false
    },
    parentId: {
      name: 'parent_id',
      type: 'int',
      unsigned: true,
      nullable: true
    }
  },
  relations: {
    company: {
      type: 'many-to-one',
      target: 'Companies',
      joinColumn: {
        name: 'id_companies',
        referencedColumnName: 'idCompanies'
      }
    },
    organizationSetup: {
      type: "one-to-many",
      target: "HrOrganizationSetup",
      inverseSide: "projects"
    }
  }
});

export default Projects;