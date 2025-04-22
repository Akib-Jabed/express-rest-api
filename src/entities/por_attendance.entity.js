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
      type: 'int'
    },
    date: {
      type: 'date'
    },
    inTime: {
      name: 'in_time',
      type: 'time'
    },
    outTime: {
      name: 'out_time',
      type: 'time'
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
      type: 'text'
    },
    dateCreated: {
      name: 'date_created',
      type: 'timestamp',
      createDate: true,
    },
    dateUpdated: {
      name: 'date_updated',
      type: 'timestamp',
      updateDate: true,
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