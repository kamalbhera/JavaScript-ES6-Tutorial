const numbers = [3,4,6,2,7,6,8,5,4];
const square = [];

// for(let i = 0;i<arr.length;i++){
//     const num = arr[i];
//     const result = num*num;
//     arr1.push(result);

// }
// console.log(arr1);

numbers.map(function(element,index,array){
    console.log(element,index,array);
})


//Using arrow function in map
const result1 = numbers.map(x => x*x);
console.log(result1);