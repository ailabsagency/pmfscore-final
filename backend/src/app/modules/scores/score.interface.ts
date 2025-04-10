import { Document } from 'mongoose';

export interface IScore extends Document {
  pmf_score: number;
  summary: string;
  block_scores: Record<string, number>;
}

