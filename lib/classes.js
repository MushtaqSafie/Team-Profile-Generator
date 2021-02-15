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
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.role = 'Manager';
    this.officeNumber = officeNumber;
  }
  getRole() {
    return this.role
  }; // RETURNS 'Manager'
};

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.role = 'Engineer';
    this.github = github;
  }
  getGithub() {
    return this.github
  };
  getRole() {
    return this.role
  }; // RETURNS 'Engineer'
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.role = 'Intern';
    this.school = school;
  }
  getSchool() {
    return this.school
  };
  getRole() {
    return this.role
  }; // RETURNS 'Intern'
}

module.exports.Manager = Manager;
module.exports.Engineer = Engineer;
module.exports.Intern = Intern;
