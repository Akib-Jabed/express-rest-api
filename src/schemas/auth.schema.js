import Joi from 'joi';

export const registerSchema = {
    body: Joi.object({
        username: Joi.alternatives().try(
            Joi.string().email(),
            Joi.string().pattern(/^\d{9}$/)
        ).required(),
        password: Joi.string().min(6).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({ 'any.only': 'Confirm password must match password' })
    })
}

export const loginSchema = {
    body: Joi.object({
        username: Joi.alternatives().try(
            Joi.string().email(),
            Joi.string().pattern(/^\d{9}$/)
        ).required(),
        password: Joi.string().required()
    })
}

export const passwordUpdateSchema = {
    body: Joi.object({
        currentPassword: Joi.string().required(),
        newPassword: Joi.string().min(6).required().disallow(Joi.ref('currentPassword')).messages({ 'any.invalid': 'New password cannot be the same as the current password' }),
        confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required().messages({ 'any.only': 'Confirm password must match new password' })
    })
}