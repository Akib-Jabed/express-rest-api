import { EntitySchema } from 'typeorm';

const HrDepartments = new EntitySchema({
    name: 'HrDepartments',
    tableName: 'hr_departments',
    columns: {
        idDepartment: {
            primary: true,
            type: 'int',
            generated: true,
            name: 'id_department'
        },
        department: {
            type: 'varchar',
            length: 200,
            nullable: false,
            name: 'department'
        },
        description: {
            type: 'text',
            nullable: true,
            name: 'description'
        },
        idUser: {
            type: 'int',
            nullable: true,
            name: 'id_user'
        },
        createDate: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP',
            name: 'create_date'
        },
        publicationStatus: {
            type: 'enum',
            enum: ['activated', 'deactivated'],
            default: 'activated',
            name: 'publication_status'
        },
        updateDate: {
            type: 'timestamp',
            onUpdate: 'CURRENT_TIMESTAMP',
            nullable: true,
            name: 'update_date'
        }
    },
    relations: {
        organizationSetup: {
            type: 'one-to-many',
            target: 'HrOrganizationSetup',
            inverseSide: 'departments'
        }
    },
});

export default HrDepartments;