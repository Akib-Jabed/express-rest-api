import AppDataSource from '@/config/config.database';
import { apiResponse } from '@/helpers/apiResponse.helper';
import { hrEmployeeModel } from '@/models/hrEmployee.model';
import { StatusCodes as status } from 'http-status-codes';

export class ServiceAuth {
    private hrEmployee = AppDataSource.getRepository(hrEmployeeModel);

  async employeeLoginService(req) {
    try {

        const employeeInfo: hrEmployeeModel? = await this.hrEmployee.findOne({where: [{email: req.body.username}, {employee_custom_id: req.body.username}]})
        
        if (!employeeInfo) throw apiResponse(status.BAD_REQUEST, `Employee ${req.body.username} not found.`)
    }
  }
}
