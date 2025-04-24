import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

const windowMs = 15 * 60 * 1000;    // 15 minutes

export const speedLimiter = (delayAfter=10, delayMs=500) => slowDown({
    windowMs: windowMs,
    delayAfter: delayAfter,
    delayMs: () => delayMs,
    maxDelayMs: 2000,
    skipSuccessfulRequests: true
})

export const rateLimiter = (max=20, message="Too many requests, Try again later.") => rateLimit({
    windowMs: windowMs,
    max: max,
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true,
    message: message
})