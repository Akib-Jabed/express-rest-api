import { EntitySchema } from 'typeorm';

const HrLeaveApplication = new EntitySchema({
    name: 'HrLeaveApplication',
    tableName: 'hr_leave_application',
    columns: {
        idLeaveApplication: {
            primary: true,
            type: 'int',
            generated: true,
            name: 'id_leave_application'
        },
        idEmployee: {
            type: 'int',
            nullable: false,
            name: 'id_employee'
        },
        idProject: {
            type: 'int',
            nullable: false,
            name: 'id_project'
        },
        idDepartment: {
            type: 'int',
            nullable: true,
            name: 'id_department'
        },
        idLeavePolicy: {
            type: 'int',
            nullable: true,
            name: 'id_leave_policy'
        },
        idLeaveType: {
            type: 'int',
            nullable: false,
            name: 'id_leave_type'
        },
        dateFrom: {
            type: 'date',
            nullable: false,
            name: 'date_from'
        },
        dateTo: {
            type: 'date',
            nullable: false,
            name: 'date_to'
        },
        noOfLeaveDay: {
            type: 'float',
            nullable: false,
            name: 'no_of_leave_day'
        },
        weekendHolidayInside: {
            type: 'int',
            nullable: true,
            name: 'weekend_holiday_inside'
        },
        addressDuringLeave: {
            type: 'text',
            nullable: true,
            name: 'address_during_leave'
        },
        phoneDuringLeave: {
            type: 'varchar',
            length: 20,
            nullable: true,
            name: 'phone_during_leave'
        },
        reason: {
            type: 'varchar',
            length: 25,
            nullable: true,
            name: 'reason'
        },
        reasonDetails: {
            type: 'text',
            nullable: true,
            name: 'reason_details'
        },
        file: {
            type: 'varchar',
            length: 250,
            nullable: true,
            name: 'file'
        },
        createDate: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP',
            name: 'create_date'
        },
        updateDate: {
            type: 'timestamp',
            nullable: true,
            onUpdate: 'CURRENT_TIMESTAMP',
            name: 'update_date'
        },
        idUser: {
            type: 'int',
            nullable: true,
            name: 'id_user'
        },
        idPorLeave: {
            type: 'int',
            nullable: true,
            name: 'id_por_leave'
        },
        publicationStatus: {
            type: 'enum',
            enum: ['activated', 'deactivated', 'denied'],
            default: 'activated',
            name: 'publication_status'
        },
        deleteReason: {
            type: 'varchar',
            length: 256,
            nullable: true,
            name: 'delete_reason'
        },
        originalName: {
            type: 'varchar',
            length: 100,
            nullable: true,
            name: 'original_name'
        },
        idFiscalYear: {
            type: 'int',
            nullable: true,
            name: 'id_fiscal_year'
        },
        replacementPerson: {
            type: 'int',
            nullable: true,
            name: 'replacement_person'
        }
    },
    // relations: {
    //     employee: {
    //         type: 'many-to-one',
    //         target: 'HrEmployee',
    //         joinColumn: {
    //             name: 'id_employee',
    //             referencedColumnName: 'employeeId'
    //         }
    //     },
    //     project: {
    //         type: 'many-to-one',
    //         target: 'Projects',
    //         joinColumn: {
    //             name: 'id_project',
    //             referencedColumnName: 'idProjects'
    //         }
    //     },
    //     leavePolicy: {
    //         type: 'many-to-one',
    //         target: 'HrLeavePolicy',
    //         joinColumn: {
    //             name: 'id_leave_policy',
    //             referencedColumnName: 'idLeavePolicy'
    //         }
    //     },
    //     leaveType: {
    //         type: 'many-to-one',
    //         target: 'HrLeaveType',
    //         joinColumn: {
    //             name: 'id_leave_type',
    //             referencedColumnName: 'idLeaveType'
    //         }
    //     },
    //     porLeave: {
    //         type: 'many-to-one',
    //         target: 'PorLeave',
    //         joinColumn: {
    //             name: 'id_por_leave',
    //             referencedColumnName: 'idPorLeave'
    //         }
    //     }
    // }
});

export default HrLeaveApplication;