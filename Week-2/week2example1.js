//Function Declaration
function greeting1() {
    console.log("Hello");
}

greeting1();

function greeting2() {
    console.log("I Hope you are doing Well");
}

let str = greeting2();
console.log(str);
console.log(greeting2());
console.log(greeting1());

function greeting3(name) {
    //return "Hello " + name;
    //return 'Hello ' + name;
    //return `Hello ` + name;
    return `Hello ${name}`;
}

console.log(greeting3("Meet"));

function greeting4(name = "Meet") {
    return "Hello " + name;
}
console.log(greeting4())


function greeting5(num1, num2) {
    return num1 + num2;
}
console.log(greeting5(3, 5));
console.log(greeting5('3', '5'));
console.log('Hello ', 'MHS');
console.log(greeting5(3));
console.log(greeting5(3, 5, 4));

function sum1(num1, num2) {
    // if (!num1) {
    //     throw Error("You must pass first number");
    // }

    // if (!num2) {
    //     throw Error("You must pass second number");
    // }
    // return num1 + num2;
    // if (num1 || num2) {
    //     throw Error("You must pass error");
    // }
}

console.log(sum1(3, 5));
console.log(sum1('3', '5'));
console.log('Hi', 'MHS');
console.log(sum1(3));
console.log(sum1(3, 5, 4));

function sum2(num1, num2) {

    // return num1+num2; instead of this:

    return arguments[0] + arguments[1];

}
console.log(sum2(3, 5));
console.log(sum2(3, 5, 9));

function sum3() {
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
        s += arguments[i];

    }
    return s;
}
console.log(sum3(3, 5));
console.log(sum3(3, 5, 8));
console.log(sum3(3, 5, 8, 10, 9));


console.log("----function expression---");
let m = sum3();
console.log(m);
console.log(typeof(m));
console.log(typeof(sum3(6, 9, 10)));
console.log(typeof(sum3));
let f = sum3;

console.log(f(10, 15));
//f=22; ->here f has become dynamic variable so after calling function will give error
console.log(f(10, 15));

const f2 = function() {
    return 'Good afternoon';
}; //Function Expression
console.log(f2());

//f2=88;->Error cause f2 is a const

let f3 = f2;
console.log(f3());

function average(f, n) {
    return f(6, 4, 5) / n;
}
console.log(average(sum3, 3));

console.log("-----Arrow Function-----");
//Arrow expression
const sum4 = (num1, num2) => num1 + num2;

console.log(sum4(10, 11));

const f4 = () => 'Good afternoon';
console.log(f4());

const sum = (n1, n2) => n1 + n2;
let num3 = prompt("Enter First Number");
let num4 = prompt("Enter First Number");

let output = sum(num3, num4);
alert(output);