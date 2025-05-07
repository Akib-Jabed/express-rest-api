import { EntitySchema } from 'typeorm';

const HrShiftMaster = new EntitySchema({
  name: 'HrShiftMaster',
  tableName: 'hr_shift_master',
  columns: {
    shiftId: {
      name: 'shift_id',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    shiftName: {
      name: 'shift_name',
      type: 'varchar',
      length: 100,
      nullable: false
    },
    startTime: {
      name: 'start_time',
      type: 'time',
      nullable: false
    },
    endTime: {
      name: 'end_time',
      type: 'time',
      nullable: false
    },
    allowTime: {
      name: 'allow_time',
      type: 'time',
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
      nullable: true,
      onUpdate: 'CURRENT_TIMESTAMP'
    },
    idUsers: {
      name: 'id_users',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    isSpecial: {
      name: 'is_special',
      type: 'enum',
      enum: ['y', 'n'],
      default: 'n',
      nullable: false
    }
  },
//   relations: {
//     user: {
//       target: 'User',
//       type: 'many-to-one',
//       joinColumn: {
//         name: 'id_users',
//         referencedColumnName: 'idUsers'
//       },
//       inverseSide: 'shifts'
//     }
//   }
});

export default HrShiftMaster;