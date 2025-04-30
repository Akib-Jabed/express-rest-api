import { EntitySchema } from 'typeorm';

const HrDepartments = new EntitySchema({
    name: 'HrDepartments',
    tableName: 'hr_departments',
    columns: {
        id_department: {
            primary: true,
            type: 'int',
            generated: true,
        },
        department: {
            type: 'varchar',
            length: 200,
            nullable: false,
        },
        description: {
            type: 'text',
            nullable: true,
        },
        id_user: {
            type: 'int',
            nullable: true,
        },
        create_date: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP'
        },
        publication_status: {
            type: 'enum',
            enum: ['activated', 'deactivated'],
            default: 'activated'
        },
        update_date: {
            type: 'timestamp',
            onUpdate: 'CURRENT_TIMESTAMP',
            nullable: true
        }
    },
    relations: {
        organizationSetup: {
            type: 'one-to-one',
            target: 'HrOrganizationSetup',
            inverseSide: 'departments'
        }
    },
});


export default HrDepartments;