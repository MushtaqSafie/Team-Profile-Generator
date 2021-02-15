const fs = require('fs');
const inquirer = require('inquirer');
const classes = require('./lib/classes');


const managerList = [];
const engineerList = [];
const internList = [];


const promptManager = () => inquirer.prompt([
  {
    type: "input",
    name: "managerName",
    message: "Enter the team manager's name",
  },
  {
    type: "input",
    name: "managerID",
    message: "Enter the team manager's employee ID",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter the team manager's email address",
  },
  {
    type: "input",
    name: "managerNumber",
    message: "Enter the team manager's office number",
  },
]).then(e => {
  let newTeam = new classes.Manager(e.managerName , e.managerID , e.managerEmail , e.managerNumber);
  managerList.push(newTeam);
  addMore();
}).catch(err => {
  console.log(err);
});

promptManager();

const promptEngineer = () => inquirer.prompt([
  {
    type: "input",
    name: "engineerName",
    message: "Enter the engineer's name",
  },
  {
    type: "input",
    name: "engineerID",
    message: "Enter the engineer's employer ID",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter the engineer's email address",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "Enter the engineer's GitHub username",
  },
]).then(e => {
  let newTeam = new classes.Engineer(e.engineerName , e.engineerID , e.engineerEmail , e.engineerGithub);
  engineerList.push(newTeam);
  addMore();
}).catch(err => {
  console.log(err);
});

const promptIntern = () => inquirer.prompt([
  {
    type: "input",
    name: "internName",
    message: "Enter the intern's name",
  },
  {
    type: "input",
    name: "internID",
    message: "Enter the intern's school ID",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter the intern's email address",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter the intern's school",
  },
]).then(e => {
  let newTeam = new classes.Intern(e.internName , e.internID , e.internEmail , e.internSchool);
  internList.push(newTeam);
  addMore();
}).catch(err => {
  console.log(err);
});


const addMore = () => inquirer.prompt([
  {
    type: 'list',
    name: 'newTeam',
    message: 'Add new team members OR Finish',
    choices: [
      'Add an engineer',
      'Add an intern',
      'Finish building my team',
    ],
  },
]).then(res => {
  console.log(res);
  switch (res.newTeam) {
    case 'Add an engineer':
      promptEngineer();
      break;
    case 'Add an intern':
      promptIntern();
      break;
    case 'Finish building my team':
      console.log(managerList);
      console.log(engineerList);
      console.log(internList);

      break;

    default:
      addMore();
      break;
  }
}).catch(err => {
  console.log(err);
});
