import { EntitySchema } from 'typeorm';

const HrPayHead = new EntitySchema({
  name: 'HrPayHead',
  tableName: 'hr_pay_heads',
  columns: {
    headId: {
      name: 'head_id',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    headName: {
      name: 'head_name',
      type: 'varchar',
      length: 150,
      nullable: false
    },
    headType: {
      name: 'head_type',
      type: 'varchar',
      length: 150,
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
    }
  },
  relations: {
    payStructureTemplateDetails: {
      target: 'HrPayStructureTemplateDetails',
      type: 'one-to-many',
      inverseSide: 'headDetails'
    }
  }
});

export default HrPayHead; 