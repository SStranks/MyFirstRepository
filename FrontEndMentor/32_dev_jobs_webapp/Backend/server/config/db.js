const mongoose = require('mongoose');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const MONGO_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
console.log(MONGO_URI);

const connectDB = async () => {
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then(() => {
      console.log(`DB '${DB_NAME}' connection successful! `);
      // Add dummy-data to DB if collection doesn't exist or collection has zero documents
      const docCount = async () => {
        const collections = Object.keys(mongoose.connection.collections);
        const count = await mongoose.connection
          .collection('jobs')
          .countDocuments({});
        if (!collections.includes('jobs') || count === 0) {
          // console.log(
          //   `DB contains 'jobs': ${collections.includes(
          //     'jobs'
          //   )} DocCount: ${count}`
          // );
        }
      };

      docCount();
    })
    .catch((err) => {
      console.log(`ERROR: Cannot connect to database '${DB_NAME}!`, err);
      process.exit();
    });
  // const schema = new mongoose.Schema({ name: 'string', size: 'string' });
  // const Tank = mongoose.model('Tank', schema);
};

module.exports = connectDB;
