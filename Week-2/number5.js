function isUnder50(numbers) {
    return numbers.every(num => num < 50);
}

// Test the function
console.log(isUnder50([1, 2, 3, 5, 4, 65])); // Should return false