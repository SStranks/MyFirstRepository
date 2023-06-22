/* eslint-disable import/first */
/* eslint-disable security/detect-object-injection */
/* eslint-disable no-use-before-define */
/* eslint-disable unicorn/filename-case */
/* eslint-disable unicorn/no-process-exit */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable unicorn/prefer-top-level-await */

import inquirer from 'inquirer';
import _ from './dbImporterConfig.js';

// Import all relevant Mongoose Models
// NOTE:  Need to compile TS files first and reference from dist.
import connectDB from '../../dist/config/db.js';
import Comment from '../../dist/models/CommentModel.js';
import Request from '../../dist/models/RequestModel.js';
import User from '../../dist/models/UserModel.js';

// Import all relevant JSON data sets
import CommentJSON from '../dev-data/comments.json' assert { type: 'json' };
import RequestJSON from '../dev-data/requests.json' assert { type: 'json' };
import UserJSON from '../dev-data/users.json' assert { type: 'json' };

const modelsChoices = ['Comment', 'Request', 'User'];
const models = {
  Comment,
  Request,
  User,
};
const json = {
  Comment: CommentJSON,
  Request: RequestJSON,
  User: UserJSON,
};

// Connect to DB
connectDB();

// Inquirer CLI Entry Point
inquirer
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

async function importProcess() {
  return inquirer
    .prompt(questionModel)
    .then((answer) => {
      console.log('ANSWER', answer);
      importData(models[answer.model], json[answer.model]);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function deleteProcess() {
  return inquirer
    .prompt(questionModel)
    .then((answer) => {
      deleteData(models[answer.model]);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Inquirer Question; Which model
const questionModel = [
  {
    type: 'list',
    name: 'model',
    message: 'Please select the model file',
    choices: modelsChoices,
  },
];

// Import data to MongoDB: Accepts Mongoose Model and JSON (expects array of obj)
const importData = async (model, data) => {
  console.log('IMPORTDATA', model, data);
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
const deleteData = async (model) => {
  try {
    await model.deleteMany();
    console.log('SUCCESS: Data deleted from DB');
  } catch {
    console.log('ERROR: Could not delete data from DB');
  }
  process.exit();
};
