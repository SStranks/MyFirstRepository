import mongoose, { ConnectOptions } from 'mongoose';
import jsonData from '../dev-data/data.json';
// import Job from '../models/jobModel';

const { DB_PROTOCOL, DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_ARGS } =
  process.env;

const MONGO_URI = `${DB_PROTOCOL}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}${DB_ARGS}`;
console.log(`*** ${MONGO_URI}`);
console.log(`*** ${DB_PROTOCOL} *** ${DB_HOST} *** ${DB_DATABASE}`);

const connectDB = async () => {
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      console.log(`*** Connected to database: ${DB_DATABASE} @ ${DB_HOST}`);
    })
    .catch((error: Error) => {
      console.log(
        `*** ERROR: Cannot connect to database: ${DB_DATABASE} @ ${DB_HOST}`,
        error
      );
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit();
    });
};

export default connectDB;
