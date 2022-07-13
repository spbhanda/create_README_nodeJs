const inquirer = require("inquirer");
const fs = require("fs");
const MarkDown = require("./util/ReadmeGen");

// App Questions:
const questions = [
   {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
   },
   {
      type: "input",
      name: "description",
      message: "Project discription?",
   },
  
   {
      type: "input",
      name: "installation",
      message: "Intallations required for run this app?",
   },
   {
      type: "input",
      name: "usage",
      message: "What is the usage of the app?",
   },
   {
      type: "list",
      name: "license",
      message: "license?",
      choices: ["MIT", "ISC", "GNUPLv3"],
      // filter(val) {
      //    return val.toLowerCase();
      // },
   },
   {
      type: "input",
      name: "contributing",
      message: "Contributing guidlines?",
   },
   {
      type: "input",
      name: "tests",
      message: "Commands to test the app?",
   },

   {
      type: "input",
      name: "github",
      message: "What is your Github username?",
   },
   {
      type: "input",
      name: "email",
      message: "What is your email address?",
   },
];

// Query function

function startQuestions() {
   return inquirer
      .prompt(questions)
      .then((answers) => {
         const mark = MarkDown.generateReadme(answers);
         fs.writeFile("README.md", mark, function (err) {
            if (err) {
               console.log("Could not save file", err);
            } else {
               console.log("Success: a new README.MD file is created");
            }
         });
      })
      .catch((err) => {
         console.log(err);
      });
}

// funtion call to initialize
startQuestions();
