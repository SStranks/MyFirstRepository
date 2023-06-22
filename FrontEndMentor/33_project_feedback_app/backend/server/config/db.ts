import mongoose from 'mongoose';

const { DB_PROTOCOL, DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_ARGS } =
  process.env;

const MONGO_URI = `${DB_PROTOCOL}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}${DB_ARGS}`;
console.log(`*** ${MONGO_URI}`);
console.log(`*** ${DB_PROTOCOL} *** ${DB_HOST} *** ${DB_DATABASE}`);

mongoose.connection.on('connected', () => {
  console.log(`*** Connected to database: ${DB_DATABASE} @ ${DB_HOST}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`*** Disconnected from database: ${DB_DATABASE} @ ${DB_HOST}`);
});

mongoose.connection.on('reconnected', () => {
  console.log(`*** Reconnected to database: ${DB_DATABASE} @ ${DB_HOST}`);
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
