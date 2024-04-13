import { Request, Response, NextFunction } from 'express';
import RequestModel from '../models/Request.model';

async function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    // Generamos un registro nuevo de RequestModel, para asi almacenar cada request que se hace
    const newRequest = new RequestModel({
        method: req.method,
        url: req.url
    });
    try {
        await newRequest.save();
    } catch (error) {
        console.log(error);
    }

    next();
}

export default loggerMiddleware;