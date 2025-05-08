import { EntitySchema } from 'typeorm';

const HrBankBranchMaster = new EntitySchema({
  name: 'HrBankBranchMaster',
  tableName: 'hr_bank_branch_master',
  columns: {
    branchId: {
      name: 'branch_id',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    branchName: {
      name: 'branch_name',
      type: 'varchar',
      length: 200,
      nullable: false
    },
    branchAddress: {
      name: 'branch_address',
      type: 'text',
      nullable: false
    },
    branchRoutingNumber: {
      name: 'branch_routing_number',
      type: 'int',
      unsigned: true,
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
    idHrTaxAreaType: {
      name: 'id_hr_tax_area_type',
      type: 'int',
      unsigned: true,
      nullable: true
    }
  },
  relations: {
    organizationSetup: {
      target: 'HrOrganizationSetup',
      type: 'one-to-many',
      inverseSide: 'equivalentDesignations'
    }
  }
});

export default HrBankBranchMaster;