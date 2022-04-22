// TODO: Include packages needed for this application

// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const inquirer = require('inquirer');
const fs =require('fs');

const generateMarkdown = require("./generateMarkdown");
// TODO: Write code to get user input, generate markdown, and save it to a file.
const init = () => {
    inquirer
    .prompt([
       {
            type:"input",
            name: "title",
            message:"what is the title of your project?",

    },
    {
        type:"input",
        name:"description",
        message:"provide a short description eplaining the what, why and how",
    },
    {
        type:"input",
        name:"tableofcontents",
        message:"provide a table of contents",
    },
    {
        type:"input",
        name:"installation",
        message:"provide steps required to install your project",
    },
    {
        type:"input",
        name:"usage",
        message:"provide instructions and examples for use",
    },
    {
        type:"input",
        name:"credits",
        message: "list collaborators if any, list tutorials, videos followed or watched add links",
    },
    {
        type:"input",
        name:"license",
        message:"let collaborators know what they can or cannot do choose a license"
    }
])
}