import { OpenAI } from 'openai';
import config from '../config';

export const openai = new OpenAI({
  apiKey: config.open_api_key,
});
