import { EntitySchema } from 'typeorm';

const Companies = new EntitySchema({
  name: 'Companies',
  tableName: 'companies',
  columns: {
    idCompanies: {
      name: 'id_companies',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    companyName: {
      name: 'company_name',
      type: 'varchar',
      length: 45,
      nullable: false
    },
    shortName: {
      name: 'short_name',
      type: 'varchar',
      length: 45,
      nullable: true
    },
    companyId: {
      name: 'company_id',
      type: 'varchar',
      length: 45,
      nullable: false
    },
    remarks: {
      type: 'text',
      nullable: true
    },
    companyAddress: {
      name: 'company_address',
      type: 'text',
      nullable: true
    },
    idCity: {
      name: 'id_city',
      type: 'int',
      unsigned: true,
      nullable: true
    },
    establishDate: {
      name: 'establish_date',
      type: 'date',
      nullable: true
    },
    companyAcNumber: {
      name: 'company_ac_number',
      type: 'varchar',
      length: 45,
      nullable: true
    },
    tradeLicense: {
      name: 'trade_license',
      type: 'varchar',
      length: 45,
      nullable: true
    },
    taxDeductionAc: {
      name: 'tax_deduction_ac',
      type: 'varchar',
      length: 45,
      nullable: true
    },
    pfRegNumber: {
      name: 'pf_reg_number',
      type: 'int',
      unsigned: true,
      nullable: true
    },
    pfRegDate: {
      name: 'pf_reg_date',
      type: 'date',
      nullable: true
    },
    gratuityRegNum: {
      name: 'gratuity_reg_num',
      type: 'int',
      unsigned: true,
      nullable: true
    },
    retirementAge: {
      name: 'retirement_age',
      type: 'int',
      unsigned: true,
      nullable: true
    },
    contactPersonName: {
      name: 'contact_person_name',
      type: 'varchar',
      length: 100,
      nullable: true
    },
    contactPersonDesignation: {
      name: 'contact_person_designation',
      type: 'varchar',
      length: 100,
      nullable: true
    },
    website: {
      type: 'varchar',
      length: 80,
      nullable: true
    },
    companyEmail: {
      name: 'company_email',
      type: 'varchar',
      length: 80,
      nullable: true
    },
    telephoneNum: {
      name: 'telephone_num',
      type: 'varchar',
      length: 45,
      nullable: true
    },
    faxNumber: {
      name: 'fax_number',
      type: 'varchar',
      length: 45,
      nullable: true
    },
    businessType: {
      name: 'business_type',
      type: 'varchar',
      length: 45,
      nullable: true
    },
    businessGroup: {
      name: 'business_group',
      type: 'varchar',
      length: 45,
      nullable: true
    },
    companyCategory: {
      name: 'company_category',
      type: 'varchar',
      length: 45,
      nullable: true
    },
    createDate: {
      name: 'create_date',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP'
    },
    updateDate: {
      name: 'update_date',
      type: 'datetime',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP'
    }
  },
//   relations: {
//     city: {
//       target: 'City',
//       type: 'many-to-one',
//       joinColumn: {
//         name: 'id_city',
//         referencedColumnName: 'idCity'
//       }
//     },
//     projects: {
//       target: 'Projects',
//       type: 'one-to-many',
//       inverseSide: 'company'
//     }
//   }
});

export default Companies;