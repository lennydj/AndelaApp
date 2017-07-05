class CompanyStaff {
  constructor(staffID, staffName, staffLevel, dateJoined){
	this.staffID = staffID;
	this.staffName = staffName;
	this.staffLevel = staffLevel;
	this.dateJoined = dateJoined;
  }


	levelSalary (level) {
	switch (level) {
		case "entry":
			return 25000;
		case "Assistant Manager":
			return 50000;
		case "Manager":
			return 100000;
		case "Senior Manager":
			return 200000;
		case "Managing Director":
			return 300000;
		default:
      console.log('There is no Salary set for this level, please review');
      break;
		}
	}
	
	staffSalary (){
	  let base = this.baseSalary + this.levelSalary(this.staffLevel);
	return base;
	}
	
	thirteenthMonth (){
	  let thirteenth = this.baseSalary + this.levelSalary(this.staffLevel);
	  return thirteenth * 0.1;
	}
	
	annualSalary() {
    let totalAnnual = this.thirteenthMonth() + (this.staffSalary()*12);
    return totalAnnual;
  }
}

//Create FulltimeStaff and ParttimeStaff classes inheriting from CompanyStaff
class FulltimeStaff extends CompanyStaff{
	constructor(staffID, staffName, staffLevel, dateJoined){
       super(staffID, staffName, staffLevel, dateJoined);
	this.baseSalary = 150000;
  }
	

}

class ParttimeStaff extends CompanyStaff{
	constructor(staffID, staffName, staffLevel, dateJoined){
       super(staffID, staffName, staffLevel, dateJoined);
	this.baseSalary = 20000;
}
}

  
  module.exports.companyStaff = CompanyStaff;
  module.exports.fulltimeStaff = FulltimeStaff;
  module.exports.parttimeStaff = ParttimeStaff;