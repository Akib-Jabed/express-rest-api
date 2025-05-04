import { EntitySchema } from 'typeorm';

const HrLeaveBalance = new EntitySchema({
  name: 'HrLeaveBalance',
  tableName: 'hr_leave_balance',
  columns: {
    idHrLeaveBalance: {
      name: 'id_hr_leave_balance',
      type: 'int',
      primary: true,
      generated: true,
      unsigned: true,
    },
    employeeId: {
      name: 'employee_id',
      type: 'int',
      nullable: false,
      unsigned: true,
    },
    idBusinessUnit: {
      name: 'id_business_unit',
      type: 'int',
      nullable: false,
      unsigned: true,
    },
    idFiscalYear: {
      name: 'id_fiscal_year',
      type: 'int',
      unsigned: true,
      nullable: true,
    },
    idLeavePolicy: {
      name: 'id_leave_policy',
      type: 'int',
      nullable: false,
      unsigned: true,
    },
    initialBalance: {
      name: 'initial_balance',
      type: 'int',
      nullable: false,
    },
    currentLeaveBalance: {
      name: 'current_leave_balance',
      type: 'decimal',
      precision: 5,
      scale: 2,
      nullable: false,
    },
    leavePerMonth: {
      name: 'leave_per_month',
      type: 'decimal',
      precision: 5,
      scale: 2,
      nullable: true,
    },
    year: {
      type: 'int',
      nullable: false,
    },
    month: {
      type: 'int',
      nullable: false,
    },
    leaveEnjoyed: {
      name: 'leave_enjoyed',
      type: 'int',
      default: 0,
      nullable: true,
    },
    balanceAdded: {
      name: 'balance_added',
      type: 'decimal',
      precision: 5,
      scale: 2,
      default: 0.00,
      nullable: true,
    },
    remark: {
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
    publicationStatus: {
      name: 'publication_status',
      type: 'enum',
      enum: ['activated', 'deactivated'],
      default: 'activated',
      nullable: false,
    },
    pointsPerLeave: {
      name: 'points_per_leave',
      type: 'decimal',
      precision: 5,
      scale: 2,
      nullable: true,
    },
    calculatedLeaveBalance: {
      name: 'calculated_leave_balance',
      type: 'decimal',
      precision: 5,
      scale: 2,
      nullable: true,
    },
  },
//   relations: {
//     employee: {
//       type: 'many-to-one',
//       target: 'HrEmployee',
//       joinColumn: {
//         name: 'employee_id',
//         referencedColumnName: 'employeeId',
//       },
//     },
//     businessUnit: {
//       type: 'many-to-one',
//       target: 'Projects',
//       joinColumn: {
//         name: 'id_business_unit',
//         referencedColumnName: 'idProjects',
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
//     fiscalYear: {
//       type: 'many-to-one',
//       target: 'HrFiscalYear', // Ensure this entity exists
//       joinColumn: {
//         name: 'id_fiscal_year',
//         referencedColumnName: 'idFiscalYear',
//       },
//     },
//   },
});

export default HrLeaveBalance;