import { Document } from 'mongoose';

export interface Dog extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}