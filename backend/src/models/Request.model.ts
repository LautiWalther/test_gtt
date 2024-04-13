import mongoose, { Document } from 'mongoose';

export interface IRequest extends Document {
    method: string;
    url: string;
    timestamp: Date;
}

const requestSchema = new mongoose.Schema({
    method: String,
    url: String,
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IRequest>('Request', requestSchema);