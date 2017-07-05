let chai = require('chai').expect,
  path = require('../src/CompanyStaff.js');

describe('fulltimeStaff', () => {
     
    let newfullstaff = new path.fulltimeStaff('001', "Helen J", "Manager", "04/07/2017");
      describe("staffSalary", () =>{
      	 it('returns 250000', () => {
      	 	chai(newfullstaff.staffSalary()).to.equal(250000);
      })
    });
      describe("thirteenthMonth", () =>{
      	 it('returns 25000', () => {
      	 	chai(newfullstaff.thirteenthMonth()).to.equal(25000);
      })
    });

      describe("annualSalary", () =>{
      	 it('returns 3025000', () => {
      	 	chai(newfullstaff.annualSalary()).to.equal(3025000);
      })
    });
      
      let newpartstaff = new path.parttimeStaff('002', "Rere J", "Manager", "04/06/2017");
      describe("staffSalary", () =>{
      	 it('returns 120000', () => {
      	 	chai(newpartstaff.staffSalary()).to.equal(120000);
      })
      })
      describe("thirteenthMonth", () =>{
      	 it('returns 12000', () => {
      	 	chai(newpartstaff.thirteenthMonth()).to.equal(12000);

      })
    });
      describe("annualSalary", () =>{
      	 it('returns 1452000', () => {
      	 	chai(newpartstaff.annualSalary()).to.equal(1452000);
      })
    });
   })
