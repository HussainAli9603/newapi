import { Schema, model } from 'mongoose';
import { menuadmindoc } from '../types/document/menu';
const MenuSchemaSchema = new Schema(
  {
    Oder: [{
        IteamName: { type: String },
        Price: { number: String },
    }]

   
  },
  { timestamps: true }
);
export const MenuSchema = model<menuadmindoc>('MenuSchemaSchema', MenuSchemaSchema);

