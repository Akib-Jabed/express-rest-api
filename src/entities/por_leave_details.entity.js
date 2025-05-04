import { EntitySchema } from 'typeorm';

const PorLeaveDetails = new EntitySchema({
  name: 'PorLeaveDetails',
  tableName: 'por_leave_details',
  columns: {
    idPorLeaveDetails: {
      name: 'id_por_leave_details',
      type: 'int',
      primary: true,
      generated: true,
      unsigned: true,
    },
    idPorLeave: {
      name: 'id_por_leave',
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
      type: 'int',
      nullable: true,
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
    leaveDate: {
      name: 'leave_date',
      type: 'date',
      nullable: false,
    },
  },
//   relations: {
//     porLeave: {
//       type: 'many-to-one',
//       target: 'PorLeave',
//       joinColumn: {
//         name: 'id_por_leave',
//         referencedColumnName: 'idPorLeave',
//       },
//       inverseSide: 'leaveDetails',
//     },
//   },
});

export default PorLeaveDetails;