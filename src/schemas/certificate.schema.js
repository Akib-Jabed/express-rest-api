import Joi from 'joi';

// export const certificateGetSchema = {
//     query: Joi.object({
//         type: Joi.string().optional().valid('personal', 'organization', 'payStructure', 'hrs'),
//     })
// }

export const certificateCreateSchema = {
    body: Joi.object({
        certificateType: Joi.string().trim().required().valid('NOC Certificate', 'Salary Certificate', 'Experience Certificate', 'Clearance Certificate', 'Employement Certificate', 'Release Order', 'Tax Certificate'),
        deliveryDate: Joi.date().min('now').required(),
        dateFrom: Joi.date().min('now').when('certificateType', {
            is: 'NOC Certificate',
            then: Joi.required(),
            otherwise: Joi.optional()
        }),
        dateTo: Joi.date().min('now').when('certificateType', {
            is: 'NOC Certificate',
            then: Joi.required(),
            otherwise: Joi.optional()
        }),
        country: Joi.string().trim().when('certificateType', {
            is: 'NOC Certificate',
            then: Joi.required().label('Country'),
            otherwise: Joi.optional(),
        }),
        resignDate: Joi.date().less('now').when('certificateType', {
            is: 'Release Order',
            then: Joi.required(),
            otherwise: Joi.optional()
        }),
        reason: Joi.string().required(),
        requestThrough: Joi.string().trim().optional().valid('Web', 'App')
    })
}