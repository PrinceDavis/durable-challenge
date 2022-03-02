import { agent } from 'supertest';
import dotenv from 'dotenv'

dotenv.config()

export const Api = agent(process.env.DB_HOST);
