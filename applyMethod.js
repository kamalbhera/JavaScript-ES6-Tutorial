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

//APPLY process

firstPerson.getSalary.apply(secondPerson,[4000,353,25]); //apply method er sob kichu call method er motoi but apply method e sob values array er moddhe dite hobe.
console.log(secondPerson.salary);

firstPerson.getSalary.apply(thirdPerson,[5004,64,468]);
console.log(thirdPerson); //.salary na deyay full class asbe .