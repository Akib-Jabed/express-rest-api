import { EntitySchema } from 'typeorm';

const PorCertificateRequest = new EntitySchema({
  name: 'PorCertificateRequest',
  tableName: 'por_certificate_request',
  columns: {
    idCertificateRequest: {
      name: 'id_certificate_request',
      primary: true,
      type: 'int',
      generated: true,
      unsigned: true
    },
    certificateType: {
      name: 'certificate_type',
      type: 'varchar',
      length: 100,
      nullable: false
    },
    deliveryDate: {
      name: 'delivery_date',
      type: 'date',
      nullable: false
    },
    reason: {
      type: 'text',
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
      nullable: true,
      onUpdate: 'CURRENT_TIMESTAMP'
    },
    publicationStatus: {
      name: 'publication_status',
      type: 'enum',
      enum: ['activated', 'deactivated'],
      default: 'activated',
      nullable: false
    },
    requestedBy: {
      name: 'requested_by',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    requestStatus: {
      name: 'request_status',
      type: 'enum',
      enum: [
        'Pending',
        'Approved',
        'Deleted',
        'Denied',
        'Done',
        'Acknowledged',
        'Pending For Report Supervisor'
      ],
      default: 'Pending',
      nullable: false
    },
    dateFrom: {
      name: 'date_from',
      type: 'date',
      nullable: true
    },
    dateTo: {
      name: 'date_to',
      type: 'date',
      nullable: true
    },
    nocCountry: {
      name: 'noc_country',
      type: 'varchar',
      length: 100,
      nullable: true
    },
    actionTakenBy: {
      name: 'action_taken_by',
      type: 'int',
      unsigned: true,
      nullable: true
    },
    idPorCertificateMaster: {
      name: 'id_por_certificate_master',
      type: 'int',
      unsigned: true,
      nullable: false
    },
    resignationDate: {
      name: 'resignation_date',
      type: 'date',
      nullable: true
    },
    originalFile: {
      name: 'original_file',
      type: 'varchar',
      length: 250,
      nullable: true
    },
    file: {
      type: 'varchar',
      length: 250,
      nullable: true
    },
    isAttached: {
      name: 'is_attached',
      type: 'enum',
      enum: ['yes', 'no'],
      default: 'no',
      nullable: false
    },
    deniedBy: {
      name: 'denied_by',
      type: 'int',
      unsigned: true,
      nullable: true
    },
    deniedReason: {
      name: 'denied_reason',
      type: 'text',
      nullable: true
    },
    requestThrough: {
      name: 'request_through',
      type: 'enum',
      enum: ['Web', 'App'],
      default: 'Web',
      nullable: false
    }
  },
  relations: {
    hrEmployee: {
      target: 'HrEmployee',
      type: 'many-to-one',
      joinColumn: {
        name: 'requested_by',
        referencedColumnName: 'employeeId'
      },
      inverseSde: 'certificateRequest'
    },
//     actionTakenByEmployee: {
//       target: 'HrEmployee',
//       type: 'many-to-one',
//       joinColumn: {
//         name: 'action_taken_by',
//         referencedColumnName: 'employeeId'
//       }
//     },
//     deniedByEmployee: {
//       target: 'HrEmployee',
//       type: 'many-to-one',
//       joinColumn: {
//         name: 'denied_by',
//         referencedColumnName: 'employeeId'
//       }
//     }
  }
});

export default PorCertificateRequest;