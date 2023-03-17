
const firstPerson = {
    firstName: "Rohim",
    lastName: "Uddin",
    salary: 15000,
    location: "Boston",
    totalSalary:function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
};
const secondPerson = {
    firstName: "Kohim",
    lastName: "Uddin",
    salary: 30000,
    location: "Boston"
};
const thirdPerson = {
    firstName: "Nohim",
    lastName: "Uddin",
    salary: 25000,
    location: "Boston"
};
const forthPerson = {
    firstName: "Mohim",
    lastName: "Uddin",
    salary: 50000,
    location: "Boston"
};

const MohinSalary = firstPerson.totalSalary.bind(forthPerson);
console.log(MohinSalary(6000));

const NohimSalary = firstPerson.totalSalary.bind(thirdPerson);
console.log(NohimSalary(26000));