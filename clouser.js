const a = 2;
function b() {
    const b = 5;
    function c() {
        console.log(b);
    }
    c();
}
b();