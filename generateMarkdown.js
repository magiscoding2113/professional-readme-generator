// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
//function 
const generateMarkdown = ({data, title, description, tableofcontents}) => {
  return `# ${data.title},
  # ${data.description},
  # ${data.tableofcontents},
  # ${data.installation},
  # ${data.usage},
  # ${data.credits}, 
  # ${data.license},
  # ${data.badges},
  # ${data.features},
  # ${data.howtocontribute},
  # ${data.tests}

`;

}
module.exports = generateMarkdown;
