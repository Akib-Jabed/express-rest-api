import { EntitySchema } from 'typeorm';

const HrLeaveDetails = new EntitySchema({
  name: 'HrLeaveDetails',
  tableName: 'hr_leave_details',
  columns: {
    idHrLeaveDetails: {
      name: 'id_hr_leave_details',
      type: 'int',
      primary: true,
      generated: true,
      unsigned: true,
    },
    idLeaveApplication: {
      name: 'id_leave_application',
      type: 'int',
      nullable: false,
      unsigned: true,
    },
    leaveCategory: {
      name: 'leave_category',
      type: 'enum',
      enum: ['with_pay', 'without_pay'],
      nullable: false,
    },
    approvedDays: {
      name: 'approved_days',
      type: 'float',
      nullable: false,
    },
    leaveDate: {
      name: 'leave_date',
      type: 'date',
      nullable: false,
    },
    deductionAmount: {
      name: 'deduction_amount',
      type: 'double',
      precision: 12,
      scale: 2,
      default: 0.00,
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
    idPorLeaveDetails: {
      name: 'id_por_leave_details',
      type: 'int',
      unsigned: true,
      nullable: true,
    },
  },
//   relations: {
//     leaveApplication: {
//       type: 'many-to-one',
//       target: 'HrLeaveApplication',
//       joinColumn: {
//         name: 'id_leave_application',
//         referencedColumnName: 'idLeaveApplication',
//       },
//     },
//     porLeaveDetails: {
//       type: 'many-to-one',
//       target: 'PorLeaveDetails',
//       joinColumn: {
//         name: 'id_por_leave_details',
//         referencedColumnName: 'idPorLeaveDetails',
//       },
//     },
//   }
});

export default HrLeaveDetails;