// function to generate markdown for README
function generateMarkdown(userResponses) {

 return `# ${userResponses.title}
 
 ## Objective

The objective of this project is to ${userResponses.description}

## How to Install the Application

The steps to install this application are ${userResponses.installation}

## How to Use this App

To use this app follow these steps: ${userResponses.usage}

## Credits

Credit should be given to ${userResponses.credits}

## How to contribute

To contribute please follow these instructions: ${userResponses.contributing}

## Test Cases

The following have been defined for you: ${userResponses.testing}

## Note for the user

${userResponses.enjoy}

---

© Confidential and Proprietary. All Rights Reserved.

`

  

}

module.exports = generateMarkdown;
