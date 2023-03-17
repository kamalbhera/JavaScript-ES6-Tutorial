const a = 3;
function beautiful() {
    const b = 6;
    console.log(b);
    console.log(a);
}

beautiful();
console.log(b); //b is local variable so it cannot be accessed.