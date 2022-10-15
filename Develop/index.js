// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please input the title of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please enter the license your project uses.',
        choices: ['None', 'MIT', 'Apache License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter any istallation instructions for your project.'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please enter any helpful usage information that the user may need.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter any contribution guidelines here.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter any testing instructions needed.'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    }, 
])
.then((response) => {
    console.log(response);
    const fileContent = generate(response);

    // TODO: Create a function to write README file
    fs.writeFile('index.html', fileContent, (error) =>{
        error ? reject(error) : resolve('You did it!')
    })
});
}

// TODO: Create a function to initialize app
const init = () => {
    return generate()
}

// Function call to initialize app
init()