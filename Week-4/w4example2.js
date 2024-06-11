////Create Objects - using literal notation
var person1 = {
    firstName: "Muath",
    "last name": "Alzghool",
    age: 48,
    lastAccess: new Date(),
    address: { streetNumber: 18, street: "altavista Dr.", city: "Ottawa" },
    print: function() {
        console.log(`The name is ${this.firstName} ${this["last name"]} and the age is ${this.age}`);
    }
};

console.log(person1.firstName);
console.log(person1["firstName"]);
//console.log(person1.last Name);
console.log(person1["last name"]);
console.log(person1.age);
console.log(person1.lastAccess);
console.log(person1.lastAccess.getFullYear());
console.log(person1.address.city);
person1.print();

person1.height = "175cm";

console.log(person1.height);

person1.age = 24;
console.log(person1)

//Create Objects - using function constructor

function PersonV2(f = "xxxx", l = 'yyyyy', a = 18) {
    this.firstName = f;
    this.last = l;
    this.age = a;
    this.lastAccess = new Date();
    this.print = function() {
        console.log(`The name is ${this.firstName} ${this['last']} and his age is ${this.age}`);
    };
}

var p1 = new PersonV2('Sam', 'Tom', 23);
console.log(p1.firstName);
p1.print();

var p2 = new PersonV2();
console.log(p2.firstName);

PersonV2.prototype.height = "150cm";
console.log(p1.height);
console.log(p2.height);

var p = { x: 5, y: 6 };

//var p2 = p;
var p2 = Object.create(p);

console.log(p2.x);
p2.x = 3;
console.log(p.x);