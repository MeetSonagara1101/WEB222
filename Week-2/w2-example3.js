function greeting4(name){
    function modifyName(name1){
        name1 = name1.toUpperCase();
        return name1;
    }
    return "Hi "+modifyName(name);
}

//console.log(modifyName('Sam'));
console.log(greeting4("Muath"));



function increment(){
    var count = 0;
    function inc(){
        count++;
        return count;
    }
    
    return inc;
}

var counter1=increment();
console.log(counter1());
console.log(counter1());
console.log(counter1());
// console.log(increment());
// console.log(increment());
// //count+=7;
// console.log(increment());