//Vars
const licenseList = [
    {name: "MIT",
    badge:"https://shields.io/badge/license-MIT-green",
    link:"https://opensource.org/licenses/MIT",
},

    {name: "Apache",
    badge:"https://img.shields.io/badge/license-Apache-blue",
    link:"https://www.apache.org/licenses/LICENSE-2.0",
},
    {name: "GPL",
    badge:"https://shields.io/badge/license-GPL-blue",
    link:"https://www.gnu.org/licenses/gpl-3.0.en.html",
    },
];
//Functions for returning license info
function renderLicenseBadge(license) {
    return licenseList.find((key) => key.name === license).badge;
};


function renderLicenseLink(license) {
    return licenseList.find((key) => key.name === license).link;
};
    

function renderLicenseSection(license) {
    return `License used [${license}](${renderLicenseLink(license)})`;
};

//Markdown function, table of contents, questions
function generateMarkdown(data) {
  return `# ${data.title}  

  <a href="${renderLicenseLink(data.license)}"><img src="
    ${renderLicenseBadge(data.license)}" alt="badge image"></a>


  ## Description 
  ${data.description}

  ## TableOfContents  
  [Description](#Description)
  [Installation](#Installation) 
  [Usage](#Usage)  
  [Contributing](#Contributing)  
  [Tests](#Tests)  

  ## License  
  ${renderLicenseSection(data.license)}

  ## Installation 
  ${data.installation}

  ## Usage  
  ${data.usage}

  ## Contributing  
  ${data.contributing}

  ## Tests  
  ${data.tests}

  ## Questions
  My Github profile: <a href="https://github.com/
  ${data.username}">here</a>  

  Email me with questions: ${data.email}  
`;
}

module.exports = generateMarkdown;
