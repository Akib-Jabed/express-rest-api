import { EntitySchema } from 'typeorm';

const HrEarningHeads = new EntitySchema({
  name: 'HrEarningHeads',
  tableName: 'hr_earning_heads',
  columns: {
    earningHeadsId: {
      name: 'earning_heads_id',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    earningHeadsName: {
      name: 'earning_heads_name',
      type: 'varchar',
      length: 200,
      nullable: false
    },
    earningHeadsType: {
      name: 'earning_heads_type',
      type: 'enum',
      enum: ['Fixed', 'Variable'],
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
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP'
    },
    idUsers: {
      name: 'id_users',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    isSystem: {
      name: 'is_system',
      type: 'enum',
      enum: ['yes', 'no'],
      default: 'no',
      nullable: true
    },
    partOfGross: {
      name: 'part_of_gross',
      type: 'enum',
      enum: ['yes', 'no', 'bonus'],
      nullable: true
    }
  },
//   relations: {
//     user: {
//       target: 'User',
//       type: 'many-to-one',
//       joinColumn: {
//         name: 'id_users',
//         referencedColumnName: 'idUsers'
//       }
//     }
//   }
});

export default HrEarningHeads;