function adddollars(number) {
    return number.map(e => '$+e');
}
console.log(adddollars([1, 2, 3, 4]));

/*
Same As Declaring Function
const adddollars = dollars => dollars.map(dollars => `$${dollars}`);
console.log(adddollars([1, 2, 3, 4]));
*/