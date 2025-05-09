import { EntitySchema } from 'typeorm';

const PorEmployeeHr = new EntitySchema({
  name: 'PorEmployeeHr',
  tableName: 'por_employee_hr',
  columns: {
    idEmployeeHr: {
      name: 'id_employee_hr',
      primary: true,
      type: 'int',
      generated: true
    },
    employeeId: {
      name: 'employee_id',
      type: 'int',
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
      onUpdate: 'CURRENT_TIMESTAMP',
    }
  },
  relations: {
    hrEmployee: {
      target: 'HrEmployee',
      type: 'one-to-one',
      joinColumn: {
        name: 'employee_id',
        referencedColumnName: 'employeeId'
      },
      inverseSide: 'employeeHrRecords'
    },
    employeeHrDetails: {
      target: 'PorEmployeeHrDetails',
      type: 'one-to-many',
      inverseSide: 'employeeHrRecords'
    }
  }
});

export default PorEmployeeHr;