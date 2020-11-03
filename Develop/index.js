
//packages
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require ('util');

//modules
const generateMarkdown = require ('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is the title of your application?",
        name: 'title',
        default: 'Application Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the objective of your application? Please describe",
        name: 'description',
        default: 'Application Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Application description is required.");
            }
            return true;
        }
    },
    // {
    //     type: 'input',
    //     message: "Describe the steps required to install your application.",
    //     name: 'installation'
    // },
    // {
    //     type: 'input',
    //     message: "Describe how a user would use your application and provide examples.",
    //     name: 'usage'
    // },
    // {
    //     type: 'input',
    //     message: "If applicable, describe what third party assets were used, and give credit to any contributors.",
    //     name: 'credits'
    // },
    // {
    //     type: 'input',
    //     message: "If applicable, describe how other programmers can contribute to your application.",
    //     name: 'contributing'
    // },
    // {
    //     type: 'input',
    //     message: "If applicable, describe how other programmers can contribute to your application.",
    //     name: 'contributing'
    // },
    // {
    //     type: 'input',
    //     message: "final message for the user to enjoy the app",
    //     name: 'Enjoy'
    // },
];

// function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your README.md file has been created")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// function init

async function init(){
    try{

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Your README is cooking");
    
        // Write markdown to file
        await writeFileAsync('./sample/ExampleREADME.md', generateMarkdown);

    } catch (error) {
        console.log(error);
    }

    };

// // function call to initialize program
    init();
