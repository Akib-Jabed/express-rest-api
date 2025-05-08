import { EntitySchema } from 'typeorm';

const HrPayStructureTemplateDetails = new EntitySchema({
  name: 'HrPayStructureTemplateDetails',
  tableName: 'hr_pay_structure_template_details',
  columns: {
    payStructureTemplateDetailsId: {
      name: 'pay_structure_template_details_id',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    payStructureTemplateId: {
      name: 'pay_structure_template_id',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    headType: {
      name: 'head_type',
      type: 'varchar',
      length: 150,
      nullable: false
    },
    earningDeductionHeadsId: {
      name: 'earning_deduction_heads_id',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    headsRatioType: {
      name: 'heads_ratio_type',
      type: 'varchar',
      length: 150,
      nullable: false
    },
    headsAmount: {
      name: 'heads_amount',
      type: 'decimal',
      precision: 12,
      scale: 2,
      nullable: true
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
    payStructureSetup: {
      target: 'HrPayStructureSetup',
      type: 'one-to-many',
      inverseSide: 'payStructureTemplateDetails'
    }
  }
});

export default HrPayStructureTemplateDetails; 