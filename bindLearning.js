const c1 = {
    x : 23,
    y : 32
};

const c2 = {
    x : 45,
    y : 75
};

function printCoordinates(){
    console.log(this.x +',' + this.y);
}

const c1_fun = printCoordinates.bind(c1);
c1_fun();