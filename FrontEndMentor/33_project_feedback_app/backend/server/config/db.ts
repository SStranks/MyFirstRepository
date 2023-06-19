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
      // Add dummy-data to DB if collection doesn't exist or collection has zero documents
      const documentCount = async () => {
        const collections = Object.keys(mongoose.connection.collections);
        const count = await mongoose.connection
          .collection('jobs')
          .countDocuments({});
        console.log(collections, count);
        if (!collections.includes('jobs') || count === 0) {
          await Job.create(jsonData);
        }
      };

      documentCount();
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
