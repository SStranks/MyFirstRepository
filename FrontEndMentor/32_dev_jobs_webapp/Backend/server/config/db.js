const mongoose = require('mongoose');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const MONGO_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
console.log(MONGO_URI);

const connectDB = async () => {
  const connect = await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then(() => console.log(`DB '${DB_NAME}' connection successful `))
    .catch((err) => {
      console.log(`ERROR: Cannot connect to database '${DB_NAME}!`, err);
      process.exit();
    });
  // const schema = new mongoose.Schema({ name: 'string', size: 'string' });
  // const Tank = mongoose.model('Tank', schema);
};

module.exports = connectDB;
