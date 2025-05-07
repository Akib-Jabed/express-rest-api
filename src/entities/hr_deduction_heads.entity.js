import { EntitySchema } from 'typeorm';

const HrDeductionHeads = new EntitySchema({
  name: 'HrDeductionHeads',
  tableName: 'hr_deduction_heads',
  columns: {
    deductionHeadsId: {
      name: 'deduction_heads_id',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    deductionHeadsName: {
      name: 'deduction_heads_name',
      type: 'varchar',
      length: 200,
      nullable: false
    },
    deductionHeadsType: {
      name: 'deduction_heads_type',
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
      default: null,
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
      nullable: false
    },
    isTax: {
      name: 'is_tax',
      type: 'enum',
      enum: ['yes', 'no'],
      default: 'no',
      nullable: false
    },
    isTaxable: {
      name: 'is_taxable',
      type: 'enum',
      enum: ['yes', 'no'],
      default: 'yes',
      nullable: false
    }
  },
});

export default HrDeductionHeads;