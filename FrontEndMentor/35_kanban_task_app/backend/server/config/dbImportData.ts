import connectDB from '#Config/db';
import { Board } from '#Models/boardModel';
import dotenv from 'dotenv';
import * as fs from 'fs';
import mongoose from 'mongoose';

dotenv.config({ path: '../../.env.dev' });

// Connect to DB
connectDB();

// JSON Data
const boards = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

// Import JSON Data
const importData = async () => {
  try {
    await Board.create(boards);
    console.log('SUCCESS: Data transferred to DB');
  } catch (err) {
    console.log('ERROR: Could not transfer data to DB');
  }
  process.exit();
};

// Delete JSON Data
const deleteData = async () => {
  try {
    await Board.deleteMany();
    console.log('SUCCESS: Data deleted from DB');
  } catch (err) {
    console.log('ERROR: Could not delete data from DB');
  }
  process.exit();
};

// Command line operation: 'node dbImportData.ts --operation'
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
