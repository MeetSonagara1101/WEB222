function checkAges(Age, cutoff) {
    return Age.every(function(age) {
        return age >= cutoff;
    });
}
console.log(checkAges([16, 18, 22, 32, 56], 6));
console.log(checkAges([16, 18, 22, 32, 56], 19));