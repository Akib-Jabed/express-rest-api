import { createFlattenOject } from '../helpers/formatter.js';
import { employeeInformation } from '../helpers/query.js';

export const informationService = async employeeId => {
    const information = await employeeInformation(employeeId);

    const obj = {
        personal: {
            employee_id: information.employee_id,
            employee_custom_id: information.employee_custom_id,
            full_name: information.full_name,
            avatar: information.avatar
        },
        organization: {
            off_email: information.organizationSetup.off_email,
            designation_title: information.organizationSetup.designationMaster.designation_title,
            department: information.organizationSetup.departments.department
        }
    }

    const flattenObj = createFlattenOject(information);
    
    return { obj, flattenObj };
}