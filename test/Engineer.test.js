const classes = require('../lib/classes');

describe('--Engineer class Function--', () => {
  describe('Initialization', () => {
    it("should create an object with a 5 property of {name, id, email, github, role} argument provided when called with the 'new' keyword", () => {
      const result = { name: 'myName', id: 841, email: 'myEmailAddress', role: 'Engineer', github: 'UserName' };

      let newTeam = new classes.Engineer("myName" , 841 , "myEmailAddress", 'UserName');

      expect(newTeam).toEqual(result);
    });
  });
  describe('Github property ', () => {
    it("should return the property {github} value of the object & argument provided when called with the 'new' keyword", () => {
      const result = 'UserName';

      let newTeam = new classes.Engineer("myName" , 841 , "myEmailAddress", 'UserName');

      expect(newTeam.github).toEqual(result);
    });
  });
  describe('.getGithub() function ', () => {
    it("should return the property {github} value of the object & argument provided when called with the 'new' keyword", () => {
      const result = 'UserName';

      let newTeam = new classes.Engineer("myName" , 841 , "myEmailAddress", 'UserName');

      expect(newTeam.getGithub()).toEqual(result);
    });
  });
  describe('.getRole() function ', () => {
    it("should return the property {Role} value to be 'Engineer' & argument provided when called with the 'new' keyword", () => {
      const result = 'Engineer';

      let newTeam = new classes.Engineer("myName" , 841 , "myEmailAddress", 'UserName');

      expect(newTeam.getRole()).toEqual(result);
    });
  });
});