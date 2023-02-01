// packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const template = require("./utils/template");

// questions for prompt
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project',
        name: 'title',
      },
    {
        type: 'input',
        message: 'What is the description of this project',
        name: 'description',
      },
    {
        type: 'list',
        message: 'What is the project license under',
        name: 'license',
        choices: ["MIT","Apache","GPL","NONE"],
      },
    {
        type: 'input',
        message: 'How do I install this application',
        name: 'installation',
      },
    {
        type: 'input',
        message: 'What is the use for this application',
        name: 'usage',
      },
    {
        type: 'input',
        message: 'List contributions here',
        name: 'contributing',
      },
    {
        type: 'input',
        message: 'Tests',
        name: 'tests',
      },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'username',
      },
    {
        type: 'input',
        message: 'What is your Email?',
        name: 'email',
      },
];

//Function that writes the file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

//Function that initializes the app
function init() {
    inquirer.prompt(questions)
    .then(function(answers){
        writeToFile("README.md", template({ ...answers }))
    })
}

// Function call to initialize app
init();
