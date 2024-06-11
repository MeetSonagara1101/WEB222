let d1 = new Date();

console.log(d1)
console.log(d1.getMonth())
console.log(d1.getHours())
console.log(Math.round(-2.4))
console.log(Math.ceil(-2.6))
console.log(Math.floor(-2.6))

console.log('-----------------------');

for(let i=0;i<10;i++){
    var min = 1;
    var max = 6;
    var r = Math.floor(Math.random()*(max-min+1))+min;
    console.log(r)
}
