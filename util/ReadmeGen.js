class MarkDown {
   static renderLicenseBadge(license) {
      const badges = {
         mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
         isc: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
         GNUPLv3:
            "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      };
      return badges[license];
   }

   static renderLicenseLink(license) {
      const licenseLinks = {
         mit: "[MIT](https://opensource.org/licenses/MIT)",
         isc: "[ISC](https://opensource.org/licenses/ISC)",
         GNUPLv3: "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)",
      };
      return licenseLinks[license];
   }

   static renderLicenseSection(license) {
      if (license) {
         return $[this.renderLicenseLink(license)];
      } else {
         return "";
      }
   }

   static generateReadme(answers) {
      return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

# Table of Content
- [Project Description](#description)
- [Usage](#usage)
- [Contributing](#contributing)
- [Installation](#installation)
- [Questions](#questions)
- [License] (#license)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributing
${answers.contributing}

## Questions
${answers.email}
${answers.github}

## License
${answers.license}
      
`;
   }
}

module.exports = MarkDown;
