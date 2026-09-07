import mongoose from 'mongoose';
import { env, isProduction } from './env';
import { logger } from '../utils/logger';

mongoose.set('strictQuery', true);

if (!isProduction) {
  mongoose.set('debug', false); // flip to true when you need query tracing locally
}

export async function connectMongo(): Promise<typeof mongoose> {
  mongoose.connection.on('connected', () => logger.info('Mongo connected'));
  mongoose.connection.on('disconnected', () => logger.warn('Mongo disconnected'));
  mongoose.connection.on('error', (err: Error) => logger.error('Mongo error', err));

  await mongoose.connect(env.MONGO_URI, {
    serverSelectionTimeoutMS: 10_000,
  });

  return mongoose;
}

export async function disconnectMongo(): Promise<void> {
  await mongoose.connection.close();
}

export { mongoose };
