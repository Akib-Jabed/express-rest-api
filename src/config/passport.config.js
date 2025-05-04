import passportJwt from 'passport-jwt';
import HrEmployee from '../entities/hr_employee.entity.js';
import AppDataSource from './database.config.js';
import environments from './environment.config.js';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const options = {
    secretOrKey: environments.jwt.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    passReqToCallback: true
} 

const verify = async (req, payload, done) => {
    try {
        const employeeRepo = AppDataSource.getRepository(HrEmployee);
        const employee = await employeeRepo.findOne({
            where: {
                employeeId: payload.employeeId,
                publicationStatus: 'activated'
            },
            select: ['employeeId']
        });

        if (employee) {
            req.employeeId = employee.employeeId;
            return done(null, employee);
        }
        
        done(null, false, {message: 'Invalid token'});
    } catch (err) {
        done(err, false)
    }
};

const jwtStrategy = new JwtStrategy(options, verify);

export default jwtStrategy;