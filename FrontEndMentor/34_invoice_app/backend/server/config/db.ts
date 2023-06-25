import mongoose from 'mongoose';

const { DB_PROTOCOL, DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_ARGS } =
  process.env;

const MONGO_URI = `${DB_PROTOCOL}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}${DB_ARGS}`;
console.log(`*** ${MONGO_URI}`);
console.log(`*** ${DB_PROTOCOL} *** ${DB_HOST} *** ${DB_DATABASE}`);

mongoose.connection.on('connecting', () => {
  console.log(
    `*** Connecting to MongoDB database: ${DB_DATABASE} @ ${DB_HOST}`
  );
});

mongoose.connection.on('connected', () => {
  console.log(`*** Connected to MongoDB database: ${DB_DATABASE} @ ${DB_HOST}`);
});

mongoose.connection.on('reconnected', () => {
  console.log(
    `*** Reconnected to MongoDB database: ${DB_DATABASE} @ ${DB_HOST}`
  );
});

mongoose.connection.on('disconnected', () => {
  console.log(
    `*** Disconnected from MongoDB database: ${DB_DATABASE} @ ${DB_HOST}`
  );
});

mongoose.connection.on('error', (error) => {
  console.log(
    `*** MongoDB database error for: ${DB_DATABASE} @ ${DB_HOST}`,
    `*** Error: ${error}`
  );
});

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.log(
      `*** ERROR: Cannot connect to database: ${DB_DATABASE} @ ${DB_HOST}`,
      error
    );
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit();
  }
};

export default connectDB;
