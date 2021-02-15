const classes = require('../lib/classes');

describe('--Employee class Function--', () => {
  describe('Initialization', () => {
    it("should create an object with a 4 property of {name, id, email, role} argument provided when called with the 'new' keyword", () => {
      const result = {
          name: 'myName',
          id: 841,
          email: 'myEmailAddress',
          role: 'Employee',
        };

      let newTeam = new classes.Employee("myName" , 841 , "myEmailAddress");

      expect(newTeam).toEqual(result);
    });
  });
  describe('.getName() function ', () => {
    it("should return the property {name} value of the object & argument provided when called with the 'new' keyword", () => {
      const result = 'myName';

      let newTeam = new classes.Employee("myName" , 841 , "myEmailAddress");

      expect(newTeam.getName()).toEqual(result);
    });
  });
  describe('.getId() function ', () => {
    it("should return the property {ID} value of the object & argument provided when called with the 'new' keyword", () => {
      const result = 841;

      let newTeam = new classes.Employee("myName" , 841 , "myEmailAddress");

      expect(newTeam.getId()).toEqual(result);
    });
  });
  describe('.getEmail() function ', () => {
    it("should return the property {email} value of the object & argument provided when called with the 'new' keyword", () => {
      const result = 'myEmailAddress';

      let newTeam = new classes.Employee("myName" , 841 , "myEmailAddress");

      expect(newTeam.getEmail()).toEqual(result);
    });
  });
  describe('.getRole() function ', () => {
    it("should return the property {Role} value to be 'Employee' & argument provided when called with the 'new' keyword", () => {
      const result = 'Employee';

      let newTeam = new classes.Employee("myName" , 841 , "myEmailAddress");

      expect(newTeam.getRole()).toEqual(result);
    });
  });
});