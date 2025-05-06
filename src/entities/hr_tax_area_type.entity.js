import { EntitySchema } from 'typeorm';

const HrTaxAreaType = new EntitySchema({
  name: 'HrTaxAreaType',
  tableName: 'hr_tax_area_type',
  columns: {
    idHrTaxAreaType: {
      name: 'id_hr_tax_area_type',
      primary: true,
      type: 'int',
      generated: true
    },
    areaType: {
      name: 'area_type',
      type: 'enum',
      enum: [
        'Dhaka & Chittagong City Corporation',
        'Other City Corporations',
        'Other Areas'
      ],
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
      type: 'datetime',
      default: () => 'CURRENT_TIMESTAMP'
    },
    dateUpdated: {
      name: 'date_updated',
      type: 'datetime',
      nullable: true
    }
  },
  relations: {
    hrEmployee: {
        type: 'one-to-many',
        target: 'HrEmployee',
        inverseSide: 'taxAreaType'
    }
  }
});

export default HrTaxAreaType;