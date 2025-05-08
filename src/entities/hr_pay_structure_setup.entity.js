import { EntitySchema } from 'typeorm';

const HrPayStructureSetup = new EntitySchema({
  name: 'HrPayStructureSetup',
  tableName: 'hr_pay_structure_setup',
  columns: {
    payStructureSetupId: {
      name: 'pay_structure_setup_id',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    employeeId: {
      name: 'employee_id',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    idFiscalYear: {
      name: 'id_fiscal_year',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    payStructureTemplateDetailsId: {
      name: 'pay_structure_template_details_id',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    headsAmount: {
      name: 'heads_amount',
      type: 'decimal',
      precision: 12,
      scale: 2,
      nullable: false
    },
    publicationStatus: {
      name: 'publication_status',
      type: 'enum',
      enum: ['activated', 'deactivated'],
      default: 'activated',
      nullable: false
    },
    dateCreated: {
      name: 'date_created',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP'
    },
    dateUpdated: {
      name: 'date_updated',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP'
    },
    idUsers: {
      name: 'id_users',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    month: {
      type: 'int',
      unsigned: true,
      nullable: false
    },
    year: {
      type: 'int',
      unsigned: true,
      nullable: false
    },
    payStructureSetupRecordsId: {
      name: 'pay_structure_setup_records_id',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    yearMonth: {
      name: 'year_month',
      type: 'date',
      nullable: false
    },
    idHrPayStructureSetupFileImport: {
      name: 'id_hr_pay_structure_setup_file_import',
      type: 'int',
      unsigned: true,
      nullable: true
    }
  },
  relations: {
    hrEmployee: {
      target: 'HrEmployee',
      type: 'many-to-one',
      joinColumn: {
        name: 'employee_id',
        referencedColumnName: 'employeeId'
      },
      inverseSide: 'payStructureSetup'
    },
    payStructureTemplateDetails: {
      target: 'HrPayStructureTemplateDetails',
      type: 'many-to-one',
      joinColumn: {
        name: 'pay_structure_template_details_id',
        referencedColumnName: 'payStructureTemplateDetailsId'
      },
      inverseSide: 'payStructureSetup'
    }
  }
});

export default HrPayStructureSetup;