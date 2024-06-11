function program(prog) {
    var school = "ICT";

    function student(name) {
        return "Student name: " + name + ", Program: " + prog + ", School of " + school;
    }
    return student;
}

var bsd_student = program("BSD"); // returns the inner function with an initial value
var cpa_student = program("CPA");

var john = bsd_student("John Smith");
var dave = cpa_student("Dave Lee");
var dave2 = program("CPD")("Jr. Dave Lee");

console.log(john);
console.log(dave);
console.log(dave2);

console.log()