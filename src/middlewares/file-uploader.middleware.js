import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { StatusCodes } from 'http-status-codes';

import ApiError from "../utils/ApiError.js";


const UPLOAD_PATH = 'public/uploads';
const ALLOWED_MIME_TYPES = [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/bmp',
    'image/webp',
    'image/svg+xml',
    'image/svg',
    'image/tiff',
    'image/heif',
    'image/heic',
];  

const storage =  multer.diskStorage({
    destination(_, _, callback) {
        if (!fs.existsSync(UPLOAD_PATH)) {
            fs.mkdirSync(UPLOAD_PATH, { recursive: true });
        }
        callback(null, UPLOAD_PATH);
    },
    filename(_, file, callback) {
        const ext = path.extname(file.originalname);
        const fileName = `${Date.now()}${ext}`;
        callback(null, fileName);
    },
})

const fileFilter = (_, file, callback) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
        callback(null, true);
    } else {
        callback(new Error('Invalid file format'));
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
}).single('image');

export const fileUploader = (req, res, next) => {
    upload(req, res, async (err) => {
        if (err) {
            return next(new ApiError(StatusCodes.BAD_REQUEST, err.message));
        }
        if (!req.file) {
            return next(new ApiError(StatusCodes.BAD_REQUEST, 'No file to upload'));
        }

        try {
            const thumbDir = path.join(UPLOAD_PATH, 'thumbnails');
            if (!fs.existsSync(thumbDir)) {
                fs.mkdirSync(thumbDir, {recursive: true})
            }

            const thumbPath = path.join(thumbDir, req.file.fileName);
            await sharp(req.file.path)
                .resize(200, 200, { fit: 'cover' })
                .toFile(thumbPath);

            req.fileInfo = {
                mimetype: req.file.mimetype,
                originalName: req.file.originalName,
                fileName: req.file.fileName,
                fileSize: req.file.size,
                originalPath: req.file.path,
                thumbPath
            }

            next();
        } catch (error) {
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
        }
    })
};
