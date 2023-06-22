/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */
/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable security/detect-object-injection */
/* eslint-disable unicorn/text-encoding-identifier-case */
/* eslint-disable unicorn/no-process-exit */

import connectDB from '#Config/db';
import inquirer from 'inquirer';
import mongoose, { Model } from 'mongoose';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import _ from './dbImporterConfig';

type TAnswer = {
  [index: string]: string;
};

type TJson = {
  [key: string]: any;
};

// ----------------------------- //
// ------- DBIMPORTER v1 ------- //
// ----------------------------- //

// Set the directory for the JSON data; jsonDirectoryPath
// Set the directory for the Models data; modelsDirectoryPath
// Run on Node server: npx ts-node path/dbImporter.ts

// Set directory for the JSON data files
const filenamePath = fileURLToPath(import.meta.url);
const dirnamePath = dirname(filenamePath);
const jsonDirectoryPath = path.join(dirnamePath, '..', 'dev-data');
const modelsDirectoryPath = path.join(dirnamePath, '..', 'models');

// Connect to DB
connectDB();

// Once DB established successfully run Inquirer
mongoose.connection.on('connected', () => {
  inquirerProcess();
});

// Inquirer CLI Entry Point
const inquirerProcess = async () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'operation',
        message: 'Do you wish to import or delete data?',
        choices: ['Import', 'Delete'],
      },
    ])
    .then((answer) => {
      if (answer.operation === 'Import') importProcess();
      if (answer.operation === 'Delete') deleteProcess();
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log(error);
      }
    });

  // Get JSON and Model file names - users selects one of each (linked).
  async function importProcess() {
    const jsonFileNames = fs.readdirSync(jsonDirectoryPath);
    const modelFileNames = fs.readdirSync(modelsDirectoryPath);

    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'json',
          message: 'Please select the JSON data file',
          choices: jsonFileNames,
        },
        {
          type: 'list',
          name: 'model',
          message: 'Please select the associated Model file',
          choices: modelFileNames,
        },
      ])
      .then(async (answer: TAnswer) => {
        // Parse JSON. Import Model File. Import data.
        const jsonData = JSON.parse(
          fs.readFileSync(path.join(jsonDirectoryPath, answer.json), 'utf-8')
        );
        const { default: model } = await import(
          path.join(modelsDirectoryPath, answer.model)
        );
        importData(model, jsonData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

// Get Model filenames - user selects one. Import that Model and delete data based on that Model.
async function deleteProcess() {
  const modelFileNames = fs.readdirSync(modelsDirectoryPath);

  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'model',
        message: 'Please select the model file',
        choices: modelFileNames,
      },
    ])
    .then(async (answer) => {
      const { default: model } = await import(
        path.join(modelsDirectoryPath, answer.model)
      );
      deleteData(model);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Import data to MongoDB: Accepts Mongoose Model and JSON (expects array of obj)
const importData = async (model: Model<any>, data: TJson) => {
  try {
    await model.create(data);
    console.log('SUCCESS: Data transferred to DB');
  } catch (error) {
    console.log('ERROR: Could not transfer data to DB');
    console.log(error);
  }
  process.exit();
};

// Delete data from MongoDB: Accepts Mongoose Model
const deleteData = async (model: Model<any>) => {
  try {
    await model.deleteMany();
    console.log('SUCCESS: Data deleted from DB');
  } catch {
    console.log('ERROR: Could not delete data from DB');
  }
  process.exit();
};
