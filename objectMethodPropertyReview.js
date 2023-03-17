const Person = {
    firstName : "Dhrubo",
    lastName : "ish",
    getSalary: 15000,
    getFullName : function(){
        console.log(this.firstName,this.lastName);
    }, 
    chargeBill:function(amount){
        this.getSalary = this.getSalary - amount;
        // console.log(this.getSalary);
        return this.getSalary;
    } 
}

Person.chargeBill(1000);
console.log(Person);
Person.chargeBill(2000);
console.log(Person.getSalary);