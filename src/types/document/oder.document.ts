import { Document } from 'mongoose';
export interface oderdoc extends Document {
  Iteam_id:string;
  IteamName: string;
  Price: number;
  createdAt?: string;
  updatedAt?: string;
}