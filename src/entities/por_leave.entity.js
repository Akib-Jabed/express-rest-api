import { EntitySchema } from 'typeorm';

const PorLeave = new EntitySchema({
  name: 'PorLeave',
  tableName: 'por_leave',
  columns: {
    idPorLeave: {
      name: 'id_por_leave',
      type: 'int',
      primary: true,
      generated: true,
      unsigned: true,
    },
    idEmployee: {
      name: 'id_employee',
      type: 'int',
      nullable: false,
      unsigned: true,
    },
    idProject: {
      name: 'id_project',
      type: 'int',
      nullable: false,
      unsigned: true,
    },
    idDepartment: {
      name: 'id_department',
      type: 'int',
      unsigned: true,
      nullable: true,
    },
    idLeaveType: {
      name: 'id_leave_type',
      type: 'int',
      nullable: false,
      unsigned: true,
    },
    idLeavePolicy: {
      name: 'id_leave_policy',
      type: 'int',
      unsigned: true,
      nullable: true,
    },
    dateFrom: {
      name: 'date_from',
      type: 'date',
      nullable: false,
    },
    dateTo: {
      name: 'date_to',
      type: 'date',
      nullable: false,
    },
    noOfLeaveDay: {
      name: 'no_of_leave_day',
      type: 'int',
      nullable: true,
    },
    weekendHolidayInside: {
      name: 'weekend_holiday_inside',
      type: 'int',
      nullable: true,
    },
    addressDuringLeave: {
      name: 'address_during_leave',
      type: 'text',
      nullable: true,
    },
    phoneDuringLeave: {
      name: 'phone_during_leave',
      type: 'varchar',
      length: 20,
      nullable: true,
    },
    file: {
      type: 'varchar',
      length: 250,
      nullable: true,
    },
    originalFile: {
      name: 'original_file',
      type: 'varchar',
      length: 250,
      nullable: true,
    },
    reason: {
      type: 'text',
      nullable: true,
    },
    reasonDetails: {
      name: 'reason_details',
      type: 'varchar',
      length: 256,
      nullable: true,
    },
    createDate: {
      name: 'create_date',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      nullable: false,
    },
    updateDate: {
      name: 'update_date',
      type: 'timestamp',
      onUpdate: 'CURRENT_TIMESTAMP',
      nullable: true,
    },
    idUser: {
      name: 'id_user',
      type: 'int',
      unsigned: true,
      nullable: true,
    },
    remainingLeave: {
      name: 'remaining_leave',
      type: 'int',
      nullable: true,
    },
    reportingSupervisorId: {
      name: 'reporting_supervisor_id',
      type: 'int',
      unsigned: true,
      nullable: true,
    },
    lineSupervisorId: {
      name: 'line_supervisor_id',
      type: 'int',
      unsigned: true,
      nullable: true,
    },
    hrId: {
      name: 'hr_id',
      type: 'int',
      unsigned: true,
      nullable: true,
    },
    status: {
      type: 'enum',
      enum: [
        'pending',
        'approved',
        'done',
        'deleted',
        'recommended',
        'acknowledged',
        'denied',
        'pending for report supervisor'
      ],
      default: 'pending',
      nullable: false,
    },
    remarks: {
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    deniedBy: {
      name: 'denied_by',
      type: 'int',
      unsigned: true,
      nullable: true,
    },
    deniedReason: {
      name: 'denied_reason',
      type: 'text',
      nullable: true,
    },
    replacementPerson: {
      name: 'replacement_person',
      type: 'int',
      unsigned: true,
      nullable: true,
    },
    requestThrough: {
      name: 'request_through',
      type: 'enum',
      enum: ['Web', 'App'],
      default: 'Web',
      nullable: false,
    },
  },
//   relations: {
//     employee: {
//       type: 'many-to-one',
//       target: 'HrEmployee',
//       joinColumn: {
//         name: 'id_employee',
//         referencedColumnName: 'employeeId',
//       },
//     },
//     project: {
//       type: 'many-to-one',
//       target: 'Projects',
//       joinColumn: {
//         name: 'id_project',
//         referencedColumnName: 'idProjects',
//       },
//     },
//     leaveType: {
//       type: 'many-to-one',
//       target: 'HrLeaveType',
//       joinColumn: {
//         name: 'id_leave_type',
//         referencedColumnName: 'idLeaveType',
//       },
//     },
//     leavePolicy: {
//       type: 'many-to-one',
//       target: 'HrLeavePolicy',
//       joinColumn: {
//         name: 'id_leave_policy',
//         referencedColumnName: 'idLeavePolicy',
//       },
//     },
//     hr: {
//       type: 'many-to-one',
//       target: 'HrEmployee',
//       joinColumn: {
//         name: 'hr_id',
//         referencedColumnName: 'employeeId',
//       },
//     },
//     lineSupervisor: {
//       type: 'many-to-one',
//       target: 'HrEmployee',
//       joinColumn: {
//         name: 'line_supervisor_id',
//         referencedColumnName: 'employeeId',
//       },
//     },
//   },
});

export default PorLeave;