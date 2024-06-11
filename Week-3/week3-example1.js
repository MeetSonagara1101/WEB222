//String Object
////////////0123

var str1 = "Welcome to Toronto";
var str2 = 'Muath';
var str3 = `Hello ${str2}`;

var str4 = new String("See you");

console.log(str3);//Hello Muath
console.log(str3.length);//11
console.log(str2.charAt(2));//a
console.log(str2[2]);//a
console.log(str2.charCodeAt(2));//97

var str5 = "Hello "+"Sam";
console.log(str5);//Hello Sam
console.log("Hello ".concat("Tom"));//Hello Tom
var str6 = "Hello ".concat("Tom ").concat("Sam");
console.log(str6);//Hello Tom Sam

str7 = "Hello ".concat(str2, " Alzghool");
console.log(str7);//Hello Muath Alzghool

str1 = "Welcome to Toronto";
console.log(str1.indexOf('to'));//8
console.log(str1.lastIndexOf('to'));//16
console.log(str1.indexOf('Hello'));//-1

var words = str1.split(' ');
console.log(words);//[ 'Welcome', 'to', 'Toronto' ]

str1 = "Welcome to Toronto";
console.log(str1.substr(3,6));//come t

console.log(str1.substring(3,6));//com


console.log(str1.substring(3));//come to Toronto
console.log(str1.toUpperCase());//WELCOME TO TORONTO
console.log(str1.toLowerCase());//welcome to toronto

console.log("    Hello     ".trim());//Hello

console.log("    Hello     ".trim().toUpperCase().charAt(1));//E

String.prototype.greeting = function(){
    return "Hello "+this;
};
console.log("Muath".greeting());//Hello Muath
console.log("Sam".greeting());//Hello Sam


var str9 = "Muath";

String.prototype.reverse = function () {
    var rev = '';
    for (var i = this.length - 1; i >= 0; i--)
       rev += this[i]; // the string
    return rev;
 };
console.log(str9.reverse());//htauM



