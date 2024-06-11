var a = 15;
function doit(){
    b = 19;
    console.log("(inside doit)a="+a);
    var c = 12;
    {
        var d =20;
        let e =7;
    }
    console.log("d="+d);
    console.log("e="+e);
}
console.log("a="+a)

doit();
console.log("b="+b);
//console.log("c="+c);
