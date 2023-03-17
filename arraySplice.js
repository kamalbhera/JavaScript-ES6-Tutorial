const arr = [3,4,7,3,78,9,3,0,5,3]
const newArr = arr.splice(4,5); //mane index 4 theke poroborti 5 ta remove korte chai
console.log(newArr);
console.log(arr);//ete arr change hoye jabe. ja ber korchi newArr diya ta arr er moddhe thakbe na.




//Splice er maddhome amra some element remove kore kichu element add o korte pari. jemon--
const newArr1 = arr.splice(2,3, 777,888,999);
console.log(newArr1);