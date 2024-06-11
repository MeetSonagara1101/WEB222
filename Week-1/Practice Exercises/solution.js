/* 
Q1).
Create a variable label and assign it the value "senecacollege". Create another variable tld and assign it "ca". Create a third variable domainName that combines label and tld to produce the value "senecacollege.ca".
*/

//Declaration Of Variable
let label = "senececollege";
let tld = "ca";
// concatenation of 2 strings together and assigning value to the variable named "domainName"
let domainName = `${label}.${tld}`;
console.log(domainName);

/*
Q2).
Create a variable label and assign it the value "senecacollege". Create another variable tld and assign it "ca". Create a third variable domainName that combines label and tld to produce the value "senecacollege.ca".
*/
let isSeneca = (domainName === "senecacollege.ca");

/*
Q3).
Create a variable isNotSeneca and assign it the inverse boolean value of isSeneca. HINT: if isSeneca is true, isNotSeneca should be false.
*/
let isNotSeneca = !isSeneca;
/*
Q4).
Create four variables byte1, byte2, byte3, byte4, and assign each of these a value in the range 0-255.
*/

//Declaring Variable and assigning values
let byte1 = 200;
let byte2 = 11;
let byte3 = 111;
let byte4 = 0;

/*
Q5).
Convert byte1 to a String using .toString(), and console.log() the result. What happens if you use toString(2) or toString(16) instead?
*/

console.log(byte1.toString());
console.log(byte1.toString(2)); // Binary representation
console.log(byte1.toString(16)); // Hexadecimal representation

/*
Q6).
Create a variable ipAddress and assign it the value of combining your four byteN variables together, separated by ".". For example: "192.168.2.1"
*/
let ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;


/*
Q7).
Create a variable ipInt and assign it the integer value of bit-shifting (<<) and adding your byteN variables. HINT: your ipInt will contain 32 bits, the first byte needs to be shifted 24 bit positions (<< 24) so it occupies 32-25, the second shifted 16, the third 8.
*/
let ipInt = (byte1 << 24) | (byte2 << 16) | (byte3 << 8) | byte4;

/*
Q8).
Create a variable ipBinary that contains the binary representation of the ipInt value. HINT: use .toString(2) to display the number with 1 and 0 only.
*/
let ipBinary = ipInt.toString(2);

/*
Q9).
Create a variable statusCode, and assign it the value for the “I’m a teapot” HTTP status code. HINT: see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/
let statusCode = 418;

/*
Q10).
Write an If statement that checks to see if your statusCode is a 4xx client error. HINT: use the <, >, >=, and/or <= operators to test the value
*/
if (statusCode >= 400 && statusCode < 500) {
    console.log("Client error");
}