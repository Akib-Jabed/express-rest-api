import Joi from 'joi';

export const informationSchema = {
    query: Joi.object({
        type: Joi.string().optional().valid('personal', 'organization', 'payStructure', 'hrs'),
        fields: Joi.string().optional()
    })
}


