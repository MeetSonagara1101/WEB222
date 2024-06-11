//function declaration

function greeting1(){
    console.log("Hello");
}
greeting1();

function greeting2(){
    return "Hello ";
}

var str = greeting2();
console.log(str);
console.log(greeting2());

function greeting3(name){
    return "Hello "+name;
}

console.log(greeting3("Muath"));

function sum (n1=0,n2=0){
    return n1+n2;
}

console.log(sum(3,5));
console.log(sum('3','5'));
console.log(sum('Hi','Muath'));
console.log(sum(3));
console.log(sum(3,5,9));
console.log(sum())

function sum2(){
    var s = 0;
    for(var i=0;i<arguments.length;i++){
        s+=arguments[i];
    }
    return s;
}

console.log(sum2(3,5,9));

//function expression

console.log(typeof(sum2))

var m = sum2();
console.log(m)
console.log(typeof(m))

var f = sum2;

console.log(f(2,3));

f = 22;
//console.log(f(2,3));

var f2 = function(){
    return "Good afternoon";
};

console.log(f2());


const fun3 = function(n1,n2){
    return n1+n2;
};

console.log(fun3(3,5));

var fun4 = function(n1,n2){
    return n1+n2;
}(6,9);
console.log(fun4);