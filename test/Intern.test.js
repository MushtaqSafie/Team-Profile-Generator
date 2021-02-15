const classes = require('../lib/classes');

describe('--Intern class Function--', () => {
  describe('Initialization', () => {
    it("should create an object with a 5 property of {name, id, email, school, role} argument provided when called with the 'new' keyword", () => {
      const result = { name: 'myName', id: 841, email: 'myEmailAddress', role: 'Intern', school: 'schoolName' };

      let newTeam = new classes.Intern("myName" , 841 , "myEmailAddress", 'schoolName');

      expect(newTeam).toEqual(result);
    });
  });
  describe('school property ', () => {
    it("should return the property {school} value of the object & argument provided when called with the 'new' keyword", () => {
      const result = 'schoolName';

      let newTeam = new classes.Intern("myName" , 841 , "myEmailAddress", 'schoolName');

      expect(newTeam.school).toEqual(result);
    });
  });
  describe('.getSchool() function ', () => {
    it("should return the property {school} value of the object & argument provided when called with the 'new' keyword", () => {
      const result = 'schoolName';

      let newTeam = new classes.Intern("myName" , 841 , "myEmailAddress", 'schoolName');

      expect(newTeam.getSchool()).toEqual(result);
    });
  });
  describe('.getRole() function ', () => {
    it("should return the property {Role} value to be 'Intern' & argument provided when called with the 'new' keyword", () => {
      const result = 'Intern';

      let newTeam = new classes.Intern("myName" , 841 , "myEmailAddress", 'schoolName');

      expect(newTeam.getRole()).toEqual(result);
    });
  });
});