// TODO: Include packages needed for this application
const inquirer = require("inquirer");
console.log("readme running");

// TODO: Create an array of questions for user input
const questions = [
   {
      type: "input",
      name: "Title",
      message: "What is the title of the project?",
   },
   {
      type: "input",
      name: "Description",
      message: "Project discription?",
   },
   {
      type: "input",
      name: "Table of Contents",
      message: "Table of Contents.",
   },
   {
      type: "input",
      name: "Installation",
      message: "Intallations required for run this app?",
   },
   {
      type: "input",
      name: "Usage",
      message: "What is the usage of the app?",
   },
   {
      type: "list",
      name: "License",
      message: "license?",
      choices: ["MIT", "ISC", "GNUPLv3"],
      filter(val) {
         return val.toLowerCase();
      },
   },
   {
      type: "input",
      name: "Contributions",
      message: "Contributions?",
   },
   {
      type: "input",
      name: "Tests",
      message: "Commands to test the app?",
   },

   {
      type: "input",
      name: "Username",
      message: "Github username?",
   },
   {
      type: "input",
      name: "Email",
      message: "What is your email address?",
   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
