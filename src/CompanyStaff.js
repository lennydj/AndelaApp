function CompanyStaff(staffID, staffName, staffLevel, dateJoined) {
	this.staffID = staffID;
	this.staffName = staffName;
	this.staffLevel = staffLevel;
	this.dateJoined = dateJoined;
}
	CompanyStaff.prototype = {
    constructor: CompanyStaff,
	levelSalary : function (level) {
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
	},
	
	staffSalary : function(){
	  base = this.baseSalary + this.levelSalary(this.staffLevel);
	return base;
	},
	
	thirteenthMonth : function(){
	  //return this.staffSalary() * 0.1;
	  thirteenth = this.baseSalary + this.levelSalary(this.staffLevel);
	  return thirteenth * 0.1;
	},
	
	annualSalary : function(){
    totalAnnual = this.thirteenthMonth() + this.staffSalary();
    return totalAnnual;
  }
};

//Create FulltimeStaff and ParttimeStaff classes inheriting from CompanyStaff
function FulltimeStaff(){
	CompanyStaff.apply(this, arguments);
	this.baseSalary = 150000;
}

  FulltimeStaff.prototype = Object.create(CompanyStaff.prototype);

function ParttimeStaff(){
	CompanyStaff.apply(this, arguments);
	this.baseSalary = 20000;
}

  ParttimeStaff.prototype = Object.create(CompanyStaff.prototype);

//Create instances of the classes FulltimeStaff and ParttimeStaff
var Helen = new FulltimeStaff('001', "Helen J", "Manager", "04/07/2017");
var Rere = new ParttimeStaff('001', "Rejoice J", "Manager", "01/06/2017");
var Tim = new FulltimeStaff('001', "Tim C", "Cleaner", "05/06/2017");

