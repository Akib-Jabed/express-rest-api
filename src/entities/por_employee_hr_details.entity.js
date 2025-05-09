import { EntitySchema } from 'typeorm';

const PorEmployeeHrDetails = new EntitySchema({
  name: 'PorEmployeeHrDetails',
  tableName: 'por_employee_hr_details',
  columns: {
    idEmployeeHrDetails: {
      name: 'id_employee_hr_details',
      primary: true,
      type: 'int',
      generated: true,
    },
    hrId: {
      name: 'hr_id',
      type: 'int',
      nullable: false
    },
    type: {
      type: 'varchar',
      length: 50,
      nullable: false
    },
    idEmployeeHr: {
      name: 'id_employee_hr',
      type: 'int',
      nullable: false
    },
    status: {
      type: 'enum',
      enum: ['Pending', 'Deleted', 'Denied', 'Approved', 'Removed'],
      default: 'Pending',
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
      default: () => 'CURRENT_TIMESTAMP',
    },
    dateUpdated: {
      name: 'date_updated',
      type: 'timestamp',
      nullable: true,
      onUpdate: 'CURRENT_TIMESTAMP'
    },
    deletedBy: {
      name: 'deleted_by',
      type: 'int',
      nullable: true
    },
    idUsers: {
      name: 'id_users',
      type: 'int',
      nullable: true
    }
  },
  relations: {
    hrEmployee: {
      target: 'HrEmployee',
      type: 'many-to-one',
      joinColumn: {
        name: 'hr_id',
        referencedColumnName: 'employeeId'
      }
    },
    employeeHrRecords: {
      target: 'PorEmployeeHr',
      type: 'many-to-one',
      joinColumn: {
        name: 'id_employee_hr',
        referencedColumnName: 'idEmployeeHr'
      },
      inverseSide: 'employeeHrDetails'
    },
    hrEmployee: {
      target: 'HrEmployee',
      type: 'many-to-one',
      joinColumn: {
        name: 'hr_id',
        referencedColumnName: 'employeeId'
      },
      inverseSide: 'employeeHrDetails'
    }
  }
});

export default PorEmployeeHrDetails;