import mongoose, { Document, Schema } from 'mongoose';

export interface SchemaObjeto {
    nombre: string;
    descripcion?: string;
    precio: number;
}

const objetoSchema = new Schema<SchemaObjeto>({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: false },
    precio: { type: Number, required: true }
});

export default mongoose.model<SchemaObjeto>('Objeto', objetoSchema);