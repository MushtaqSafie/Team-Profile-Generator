const fs = require('fs');
const inquirer = require('inquirer');

let data = [];
let managerInfo = [];
let engineerInfo = [];
let internInfo = [];

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
]).then(res => {
  res.role = 'manager';
  data.push(res)
  addMore();
}).catch(err => {
  console.log(err);
});

promptManager();

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
      console.log(data);
      managerInfo = data.filter(e => e.role == 'manager');
      engineerInfo = data.filter(e => e.role == 'engineer');
      internInfo = data.filter(e => e.role == 'intern');
      break;

    default:
      addMore();
      break;
  }
}).catch(err => {
  console.log(err);
});

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
]).then(res => {
  res.role = 'engineer'
  data.push(res)
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
]).then(res => {
  res.role = 'intern';
  data.push(res)
  addMore();
}).catch(err => {
  console.log(err);
});

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

  getName() {
    return this.name
  };
  getId() {
    return this.id
  };
  getEmail() {
    return this.email
  };
  getRole() {
    return this.role
  };
};


class Manager extends Employee {
  constructor(officeNumber) {
    

    super(name, id, email)
    this.officeNumber = officeNumber;
  }
  getRole() {}; // RETURNS 'Manager'
};

class Engineer extends Employee {
  constructor(github) {

    super(name, id, email)
    this.github = github;
  }
  getGithub() {};
  getRole() {}; // RETURNS 'Engineer'
}

class Intern extends Employee {
  constructor(school) {
    

    super(name, id, email)
    this.school = school;
  }
  getSchool() {};
  getRole() {}; // RETURNS 'Intern'
}


// console.log(data);

// let dataa = news.getName();
// console.log(dataa);
// console.log(news.getName());
