const classes = require('../lib/classes');

describe('--Manager class Function--', () => {
  describe('Initialization', () => {
    it("should create an object with a 5 property of {name, id, email, officeNumber, role} argument provided when called with the 'new' keyword", () => {
      const result = { name: 'myName', id: 841, email: 'myEmailAddress', role: 'Manager', officeNumber: 999 };

      let newTeam = new classes.Manager("myName" , 841 , "myEmailAddress", 999);

      expect(newTeam).toEqual(result);
    });
  });
  describe('officeNumber property ', () => {
    it("should return the property {officeNumber} value of the object & argument provided when called with the 'new' keyword", () => {
      const result = 999;

      let newTeam = new classes.Manager("myName" , 841 , "myEmailAddress", 999);

      expect(newTeam.officeNumber).toEqual(result);
    });
  });
  describe('.getRole() function ', () => {
    it("should return the property {Role} value to be 'Manager' & argument provided when called with the 'new' keyword", () => {
      const result = 'Manager';

      let newTeam = new classes.Manager("myName" , 841 , "myEmailAddress", 999);

      expect(newTeam.getRole()).toEqual(result);
    });
  });
});