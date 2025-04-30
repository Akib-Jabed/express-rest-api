import { EntitySchema } from 'typeorm';

const HrDesignationMaster = new EntitySchema({
    name: 'HrDesignationMaster',
    tableName: 'hr_designation_master',
    columns: {
        designation_id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        designation_title: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        short_form: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        description: {
            type: 'text',
            nullable: false,
        },
        publication_status: {
            type: 'enum',
            enum: ['activated', 'deactivated'],
            default: 'activated'
        },
        date_created: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP'
        },
        date_updated: {
            type: 'timestamp',
            onUpdate: 'CURRENT_TIMESTAMP',
            nullable: true
        },
        id_users: {
            type: 'int',
            nullable: false
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