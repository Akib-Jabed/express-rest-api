// import { StatusCodes } from 'http-status-codes';

import AppDataSource from '../config/database.config.js';
import PorCertificateRequest from '../entities/por_certificate_request.entity.js';
// import ApiError from '../utils/ApiError.js';

const CERTIFICATE_TYPE = {
    'NOC Certificate': 1, 
    'Salary Certificate': 2, 
    'Experience Certificate': 3, 
    'Clearance Certificate': 4, 
    'Employement Certificate': 5, 
    'Release Order': 6, 
    'Tax Certificate': 10
}

export const createService = async (employeeId, data) => {
    const {certificateType, deliveryDate, dateFrom, dateTo, country, resignDate, reason} = data;
    const porCertificateRequestRepo = AppDataSource.getRepository(PorCertificateRequest);

    const certificate = {
        certificateType: certificateType,
        deliveryDate: deliveryDate,
        reason: reason,
        requestedBy: employeeId,
        dateFrom: dateFrom,
        dateTo: dateTo,
        nocCountry: country,
        idPorCertificateMaster: CERTIFICATE_TYPE[certificateType],
        resignationDate: resignDate,
        requestThrough: requestThrough ?? 'Web'
    }

    await porCertificateRequestRepo.save(certificate);
}

export const getService = async (employeeId) => {
    const porCertificateRequestRepo = AppDataSource.getRepository(PorCertificateRequest);

    const certificates = await porCertificateRequestRepo.find({
        select: {
            certificateType: true,
            deliveryDate: true,
            dateCreated: true,
            requestStatus: true,
            hrEmployee: {
                employeeId: true,
                fullName: true,
                employeeCustomId: true,
                avatar: true
            }
        },
        where: {
            publicationStatus: 'activated',
            requestedBy: employeeId,
            hrEmployee: {
                publicationStatus: 'activated'
            }
        },
        relations: {
            hrEmployee: true
        }
    });

    return certificates;
}