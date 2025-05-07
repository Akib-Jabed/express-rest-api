import { EntitySchema } from 'typeorm';

const Banks = new EntitySchema({
  name: 'Banks',
  tableName: 'banks',
  columns: {
    idBanks: {
      name: 'id_banks',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    deliveryMethod: {
      name: 'delivery_method',
      type: 'enum',
      enum: ['Manual', 'SFTP', 'Portal'],
      default: 'Manual',
      nullable: false
    },
    bankName: {
      name: 'bank_name',
      type: 'varchar',
      length: 45,
      nullable: false
    },
    bankNameShort: {
      name: 'bank_name_short',
      type: 'varchar',
      length: 15,
      nullable: true
    },
    createDate: {
      name: 'create_date',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP'
    },
    bankNameFull: {
      name: 'bank_name_full',
      type: 'varchar',
      length: 125,
      nullable: true
    },
    updateDate: {
      name: 'update_date',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    }
  }
});

export default Banks;