const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./untitled folder/util/generateMarkdown");

const init = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectitle',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explain the what, why and how of your app',
      },
      {
        type: 'input',
        name: 'tableofcontents',
        message: 'tableofcontents(optional)',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What steps are required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples for use',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'list collaborators if any, if you followed tutorials or any third party asssets list',
      },
      {
          type:"input",
          name:"License",
          message:"let other developers know what they can and cannot do",
      },
      {
          type:'input',
          name:'badges',
      },
      {
          type:'input',
          name:'features',
          message:'if your project has a lot of features list here'
      },
      {
          type:'input',
          name:'howtocontribute',
          message:'if you would like other devs to contribute include guidelines',
      },
      {
          types:'input',
          name:'tests',
          message:'if you ran test provide examples here'
      }
    ])
    .then((answers) => {
      const readme = generateMarkdown(answers);
  
      fs.writeFile('readme.md', readme, (err) =>
        err ? console.log(err) : console.log('Successfully created readme!')
      );
    });
}

init();


  

