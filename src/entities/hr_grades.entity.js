import { EntitySchema } from 'typeorm';

const HrGrades = new EntitySchema({
    name: 'HrGrades',
    tableName: 'hr_grades',
    columns: {
        idGrade: {
            primary: true,
            type: 'int',
            generated: true,
            name: 'id_grade'
        },
        gradeName: {
            type: 'varchar',
            length: 200,
            nullable: false,
            name: 'grade_name'
        },
        minRange: {
            type: 'double',
            nullable: false,
            name: 'min_range'
        },
        maxRange: {
            type: 'double',
            nullable: false,
            name: 'max_range'
        },
        remark: {
            type: 'varchar',
            length: 200,
            nullable: true,
            default: null,
            name: 'remark'
        },
        idUser: {
            type: 'int',
            nullable: true,
            default: null,
            name: 'id_user'
        },
        publicationStatus: {
            type: 'enum',
            enum: ['activated', 'deactivated'],
            default: 'activated',
            nullable: false,
            name: 'publication_status'
        },
        createDate: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP',
            nullable: false,
            name: 'create_date'
        },
        updateDate: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
            name: 'update_date'
        }
    },
    relations: {
        organizationSetup: {
            target: 'HrOrganizationSetup',
            type: 'one-to-many',
            inverseSide: 'grades'
        }
    },
});

export default HrGrades;