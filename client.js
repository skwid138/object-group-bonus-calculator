var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

console.log('script.js sourced');

// var employeeList = []; // holds list of employees

// // builds initial employee object
// function Employee(name, employeeNumber, annualSalary, reviewRating) {
//     this.name = name;
//     this.employeeNumber = employeeNumber;
//     this.annualSalary = annualSalary;
//     this.reviewRating = reviewRating;
//     employeeList.push(this); // something to add it to the array
// }

// var hunter = new Employee('hunter', '1234', '10000', 3);
// console.log('Employee  test ->', hunter)
// console.log('employeeList array ->', employeeList);




function bonusCalc(rating, salary, employeeNumber) {
    var percentage = 0;
    // Beginning of rating check
    if (rating === 5) {
        percentage += 0.10;
    } else if (rating === 4) {
        percentage += 0.06;
    } else if (rating === 3) {
        percentage += 0.04;
    };
    // Beginning of salary check
    if (salary > 65000) {
        percentage -= 0.01;
    };
    // Beginning of employee number check
    if (employeeNumber.length === 4) {
        percentage += 0.05;
    };
    // Beginning of bonus range check
    if (percentage > 0.13) {
        percentage = 0.13;
    } else if (percentage < 0) {
        percentage = 0;
    };
    return percentage;
};

// console.log(bonusCalc(5, '64000', '1234'));

// takes an employee object and makes a new object with bonus amounts
function Bonus(employee) {
    this.name = employee.name;
    this.bonusPercentage = bonusCalc(employee.reviewRating, employee.annualSalary, employee.employeeNumber);
    this.totalBonus = Math.round(parseInt(employee.annualSalary) * this.bonusPercentage);
    this.totalCompensation = this.totalBonus + parseInt(employee.annualSalary);
    this.totalBonus = this.totalBonus.toString();
    this.totalCompensation = this.totalCompensation.toString();
    // console.log('Employee Payout -> ', this.totalCompensation);
}

//console.log('bonus test -> ', new Bonus(hunter));
var bonusList = [];

function checkEmployees( listOfEmployees ) {
    for (var i = 0; i < listOfEmployees.length; i++) {
        bonusList.push(new Bonus(listOfEmployees[i]));
        console.log('Employee Payout -> ', bonusList[i]); 
    };
}

checkEmployees(employees);
// move onto Hard Mode

document.getElementById("name").innerHTML = bonusList[0].name;






