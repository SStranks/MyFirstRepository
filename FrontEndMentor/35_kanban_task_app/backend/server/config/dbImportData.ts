import connectDB from '#Config/db';
import { Board } from '#Models/boardModel';
import dotenv from 'dotenv';
import * as fs from 'fs';
import mongoose from 'mongoose';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: '../../.env.dev' });

// Connect to DB
connectDB();

// JSON Data
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let boards = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'dev-data', 'data.json'), 'utf-8')
);
// Format data; from object containing array 'boards' of board objects
boards = boards.boards;

// Import JSON Data
const importData = async () => {
  try {
    await Board.create(boards);
    console.log('SUCCESS: Data transferred to DB');
  } catch (err) {
    console.log('ERROR: Could not transfer data to DB');
    console.log(err);
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
