const firstPerson ={
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 15000,
    location: "Boston",
    getSalary: function(amount, tax, tips){
              this.salary = this.salary - amount - tax - tips;
    }
};

const secondPerson ={
    firstName: "Kolim",
    lastName: "Ullah",
    salary: 20000,
    location: "Los Angelos",
};
const thirdPerson ={
    firstName: "Monir",
    lastName: "Bapery",
    salary: 25000,
    location: "Ireland",
};

//CALL process

firstPerson.getSalary.call(thirdPerson,3000,300,30); //Jake chai take, values...;
console.log(thirdPerson.salary);

firstPerson.getSalary.call(secondPerson,7000,539,356);
console.log(secondPerson.salary);