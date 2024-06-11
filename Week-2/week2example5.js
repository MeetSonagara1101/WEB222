//var count = 0;

function counter() {
    let count = 0;

    function increment() {
        count++;
        return count;
    }
    return increment;
}

var counter1 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

var counter2 = counter();
console.log(counter2());
console.log(counter2());
console.log(counter2());