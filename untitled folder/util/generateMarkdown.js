// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function generateMarkdown(data) {
  return `
  #Title ${data.projecttitle} 

  # Descritpion
  ${data.description}

  #Table of Contents
  *[installation](#installation)
  *[usage](#usage)
  *[License](#license)
  *[contributors](#contributors)
  *[Tests](#tests)
  *[Questions](#questions)
  #Installation
  The following necessary dependencies must be installed to run the application
  #Usage
  In order to use this app, ${data.usage}
  #License
  This project is licensed under the ${data.license}license.
  ![GitHub license](https://img.shields.io/badge/license-mit-blue.svg)
  #Contributing
  Contributors:${data.howtocontribute}
  #Tests
  The following is needed to run the test:${data.tests}
  

`;

}
module.exports = generateMarkdown;
