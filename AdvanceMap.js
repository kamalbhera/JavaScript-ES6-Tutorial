//How a particular elements of a multidimensional array can make single elements.
const students = [
    {id:21,name:"Omor Sunny"},
    {id:31,name:"Mannaaaaaaaa"},
    {id:41,name:"Dhruboish"},
    {id:71,name:"Rabbani"}
];

const names = students.map(s =>s.name);
console.log(names);