var a = 15; //global Variable

console.log("a=" + a);

function doit() {
    console.log("(inside doit)a=" + a);

    b = 19; //global Variable
    //but we this is not a good practice as a programmer

    var c = 12; // Local or Function Scope
    console.log("(inside doit) c=" + c);

    {
        var d = 56; //Function Scope
        let e = 9; // Block Scope
        console.log("(inside block) e=" + e);
    }
    console.log("(inside doit) d=" + d);
    console.log("(Outside the block doit) e=" + e); //SYNTAX ERROR

}

doit();
console.log("(inside doit) b=" + b);
console.log("(inside doit) c=" + c); //SYNTAX ERROR