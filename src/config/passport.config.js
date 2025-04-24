import passportJwt from 'passport-jwt';
import HrEmployee from '../entities/hr_employee.entity.js';
import AppDataSource from './database.config.js';
import environments from './environment.config.js';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const options = {
    secretOrKey: environments.secret.jwt,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    passReqToCallback: true
} 

const verify = async (payload, done) => {
    try {
        const employeeRepo = AppDataSource.getRepository(HrEmployee)
        const employee = await employeeRepo.findOneBy({employee_id: payload.employeeId})

        if (employee) {
            req.employee = employee;
            return done(null, employee);
        }
        done(null, false);
    } catch (err) {
        done(err, false)
    }
};

const jwtStrategy = new JwtStrategy(options, verify);

export default jwtStrategy;