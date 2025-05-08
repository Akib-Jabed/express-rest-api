import { EntitySchema } from 'typeorm';

const HrEquivalentDesignation = new EntitySchema({
  name: 'HrEquivalentDesignation',
  tableName: 'hr_equivalent_designation',
  columns: {
    equivalentDesignationId: {
      name: 'equivalent_designation_id',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    equivalentDesignationTitle: {
      name: 'equivalent_designation_title',
      type: 'varchar',
      length: 100,
      nullable: false
    },
    equivalentShortForm: {
      name: 'equivalent_short_form',
      type: 'varchar',
      length: 25,
      nullable: false
    },
    description: {
      type: 'text',
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
    organizationSetup: {
      target: 'HrOrganizationSetup',
      type: 'one-to-many',
      inverseSide: 'equivalentDesignations'
    }
  }
});

export default HrEquivalentDesignation;