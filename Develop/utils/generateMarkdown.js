const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '![License(https://img.shields.io/badge/license-MIT-blue)'
  } else if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
} else if (license === 'GPL v3.0') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
} else {
  badge = "![No badge](https://img.shields.io/badge/license-None-red)"
}
return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://img.shields.io/badge/license-MIT-blue'
    } else if (license === 'Apache 2.0') {
      licenseLink = 'https://img.shields.io/badge/license-Apache2.0-blue'
    } else if (license === 'GPL v3.0') {
      licenseLink = 'https://img.shields.io/badge/license-GPLv3.0-blue'
    } else {
      licenseLink = ""
    }
    return licenseLink;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generate(response) {
  return`
  # ${response.title}
  ## ${renderLicenseSection(response.license)} ${renderLicenseBadge(response.license)}
  ### ${renderLicenseLink(response.license)}
  ## Table of Contents:
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [License](#license)
  ###  * [Contributors](#contribution)
  ###  * [Tests](#test)
  ###  * [Questions](#questions)
  ## Installation:
  ### You must install the following for this app to function:
  ### ${response.installation}
  ## Usage:
  ### ${response.usage}
  ## Contributors:
  ### ${response.contribution}
  ## Tests:
  ### Run the following commands in your terminal to test this app:
  ### ${response.test}
  ## Questions:
  ### If you have any questions, you may contact me at either
  ### Github: https://github.com/${response.username}
  ### or
  ### Email: ${response.email}
`;
}

// exports
module.exports = generate;