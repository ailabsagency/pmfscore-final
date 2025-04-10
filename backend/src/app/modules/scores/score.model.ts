import mongoose, { Schema } from 'mongoose';
import { IScore } from './score.interface';

const scoreSchema = new Schema<IScore>(
  {
    pmf_score: {
      type: Number,
    },
    summary: {
      type: String,
    },
    block_scores: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true },
);

export const Score = mongoose.model<IScore>('Score', scoreSchema);
