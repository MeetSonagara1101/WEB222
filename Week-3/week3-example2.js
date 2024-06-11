var str1 = "Welcome to Toronto";
var reg1 = /to/;
console.log(reg1.test(str1));//true

var reg2 = /TO/;
console.log(reg2.test(str1));//false

var reg3 = /TO/i;
console.log(reg3.test(str1));//true

var reg4 = /Toronto/;
console.log(reg4.test(str1));//true

var reg5 = /^Toronto/;
console.log(reg5.test(str1));//false

var reg6 = /Toronto$/;
console.log(reg6.test(str1));//true

str1 = "Welcome to Toronto";
console.log(/^W.*e/.test(str1));//true

console.log(/^W.+e/.test(str1));//true

console.log(/c.+ome/.test(str1));//false

console.log(/W.{3,}e/.test(str1));//true

console.log(/[Ww]elcome/.test(str1));//true

var str = "Welcome to Toronto";
var patt1 = /to/ig; 

var result = str.match(patt1);
console.log(result); //[ 'to', 'To', 'to' ]
console.log(result[0]);//to


str = "Welcome to Toronto";
var patt = /to/ig;                       // i: ignore case-sensitivity
var result = str.replace(patt, "<TO>");  
console.log(result); 

var pat1 = /^[a-zA-Z]{4,}$/
console.log(pat1.test("aB"));//false
console.log(pat1.test("aBmusth"));//true

var pat2 = /^((0|1|2|3|4|5|6|7|8|9){3}[-]){2}[\d]{4}$/
console.log(pat2.test("126-13-123"));//false
console.log(pat2.test("126-813-1239"))//true