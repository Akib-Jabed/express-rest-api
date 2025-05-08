import { EntitySchema } from 'typeorm';

const HrEmployeeNatureType = new EntitySchema({
  name: 'HrEmployeeNatureType',
  tableName: 'hr_employee_nature_type',
  columns: {
    idEmployeeNatureType: {
      name: 'id_employee_nature_type',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    typeName: {
      name: 'type_name',
      type: 'varchar',
      length: 50,
      nullable: false
    },
    remark: {
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
    createDate: {
      name: 'create_date',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP'
    },
    updateDate: {
      name: 'update_date',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP'
    },
    timePeriod: {
      name: 'time_period',
      type: 'enum',
      enum: ['YES', 'NO'],
      default: 'NO',
      nullable: false
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
      inverseSide: 'natureTypes'
    }
  },
});

export default HrEmployeeNatureType;