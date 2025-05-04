import { EntitySchema } from 'typeorm';

const HrLeaveBalanceDetails = new EntitySchema({
  name: 'HrLeaveBalanceDetails',
  tableName: 'hr_leave_balance_details',
  columns: {
    idHrLeaveBalanceDetails: {
      name: 'id_hr_leave_balance_details',
      type: 'int',
      primary: true,
      generated: true,
      unsigned: true,
    },
    idHrLeaveBalance: {
      name: 'id_hr_leave_balance',
      type: 'int',
      nullable: false,
      unsigned: true,
    },
    idLeaveAppOrPayslipOrFileImport: {
      name: 'id_leave_app_or_payslip_or_file_import',
      type: 'int',
      nullable: false,
      unsigned: true,
    },
    status: {
      type: 'enum',
      enum: ['leave_enjoyed', 'payslip_approved', 'file_imported', 'leave_calculated'],
      nullable: false,
    },
    balance: {
      type: 'decimal',
      precision: 5,
      scale: 2,
      nullable: false,
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
    idUsers: {
      name: 'id_users',
      type: 'int',
      unsigned: true,
      nullable: true,
    },
  },
//   relations: {
//     leaveBalance: {
//       type: 'many-to-one',
//       target: 'HrLeaveBalance',
//       joinColumn: {
//         name: 'id_hr_leave_balance',
//         referencedColumnName: 'idHrLeaveBalance',
//       },
//       inverseSide: 'balanceDetails',
//     },
//     user: {
//       type: 'many-to-one',
//       target: 'User', // Make sure this entity exists
//       joinColumn: {
//         name: 'id_users',
//         referencedColumnName: 'idUsers',
//       },
//     },
//   },
});

export default HrLeaveBalanceDetails;