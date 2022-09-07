const mongoose = require('mongoose');
const Job = require('../models/jobModel');
const jsonData = require('../dev-data/data.json');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const MONGO_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
console.log(MONGO_URI);

const connectDB = async () => {
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
          await Job.create(jsonData);
        }
      };

      docCount();
    })
    .catch((err) => {
      console.log(`ERROR: Cannot connect to database '${DB_NAME}!`, err);
      process.exit();
    });
};

module.exports = connectDB;
