import { EntitySchema } from 'typeorm';

const HrDesignationMaster = new EntitySchema({
    name: 'HrDesignationMaster',
    tableName: 'hr_designation_master',
    columns: {
        designationId: {
            primary: true,
            type: 'int',
            generated: true,
            name: 'designation_id'
        },
        designationTitle: {
            type: 'varchar',
            length: 100,
            nullable: false,
            name: 'designation_title'
        },
        shortForm: {
            type: 'varchar',
            length: 100,
            nullable: false,
            name: 'short_form'
        },
        description: {
            type: 'text',
            nullable: false,
            name: 'description'
        },
        publicationStatus: {
            type: 'enum',
            enum: ['activated', 'deactivated'],
            default: 'activated',
            name: 'publication_status'
        },
        dateCreated: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP',
            name: 'date_created'
        },
        dateUpdated: {
            type: 'timestamp',
            onUpdate: 'CURRENT_TIMESTAMP',
            nullable: true,
            name: 'date_updated'
        },
        idUsers: {
            type: 'int',
            nullable: false,
            name: 'id_users'
        }
    },
    relations: {
        organizationSetup: {
            type: "one-to-one",
            target: "HrOrganizationSetup",
            inverseSide: 'designationMaster'
        },
    },
});

export default HrDesignationMaster;