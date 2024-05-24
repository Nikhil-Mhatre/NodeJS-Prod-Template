import Logging from '@src/utils/logging';
import mongoose from 'mongoose';
import { MONGODB_DB_NAME } from '@src/constant';

/**
 * Connects the application to the MongoDB database.
 *
 * @async
 * @returns {Promise<void>} A promise that resolves upon successful connection,
 *                         or rejects with an error if the connection fails.
 *
 * @throws {Error} Throws an error if the connection to MongoDB fails.
 */
const connectDB = async function (): Promise<void> {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${MONGODB_DB_NAME}`,
    );
    Logging.info(
      `\n Mongodb connected !! DB Host: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    Logging.error('Mongodb connection error');
    process.exit(1);
  }
};

export default connectDB;
