import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  NODE_ENV: process.env.NODE_ENV!,
  database_url: process.env.DATABASE_URL!,
  port: process.env.PORT!,
  open_api_key: process.env.OPEN_API_KEY!,
  groq_api_key: process.env.GROQ_API_KEY!,
};
