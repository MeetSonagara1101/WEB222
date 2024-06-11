var arr = [5,7,2,9];
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(`arr[${i}]=${arr[i]}`);
}
console.log("------------------------------------");
function print(e){
    console.log(e);
}
print("Hi");
print(5);
console.log("------------------------------------");
arr.forEach(print);
console.log("------------------------------------");
arr.forEach((e)=>console.log(e));
console.log("------------------------------------");
function multiply(e){
    return e*=5;
}

arr2 = arr.map(multiply);
console.log(arr2);

console.log(arr.map((e)=>e+"$"));
console.log("------------------------------------");
arr = [5,7,2,9,8];
function isEven(e){
    return e%2==0;
}
console.log(isEven(7));
console.log(arr.find(isEven));
console.log(arr.find(e=>e%2==0));
console.log(arr.filter(e=>e%2==0));


