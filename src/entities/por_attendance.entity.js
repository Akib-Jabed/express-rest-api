import { EntitySchema } from 'typeorm';

const PorAttendance = new EntitySchema({
  name: 'PorAttendance',
  tableName: 'por_attendance',
  columns: {
    idPorAttendance: {
      name: 'id_por_attendance',
      type: 'int',
      primary: true,
      generated: true
    },
    employeeId: {
      name: 'employee_id',
      type: 'int',
      nullable: false
    },
    date: {
      type: 'date',
      nullable: false
    },
    inTime: {
      name: 'in_time',
      type: 'time',
      nullable: false
    },
    outTime: {
      name: 'out_time',
      type: 'time',
      nullable: false
    },
    type: {
      type: 'enum',
      enum: ['Partial Info', 'Early Out', 'Late Present - Early Out', 'Late Present', 'Present'],
      default: 'Partial Info'
    },
    status: {
      type: 'enum',
      enum: ['pending', 'deleted', 'acknowledged', 'approved', 'denied'],
      default: 'pending'
    },
    reason: {
      type: 'text',
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
      onUpdate: 'CURRENT_TIMESTAMP',
      nullable: true,
    },
    expendedTime: {
      name: 'expended_time',
      type: 'bigint'
    },
    idAttendance: {
      name: 'id_attendance',
      type: 'int'
    },
    requestThrough: {
      name: 'request_through',
      type: 'enum',
      enum: ['Web', 'App'],
      default: 'Web'
    }
  },
  relations: {
    hr_employee: {
      type: 'one-to-one',
      target: 'HrEmployee',
      joinColumn: {
        name: 'employee_id',
        referencedColumnName: 'employee_id'
      }
    }
  }
});

export default PorAttendance;