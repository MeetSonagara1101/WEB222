const checkBetween = (number, lower, upper, inclusive) => {
    if (inclusive) {
        return number > lower || number < upper;
    } else {
        return number >= lower || number <= upper;
    }

}
console.log(checkBetween(9, 100, 50, true));