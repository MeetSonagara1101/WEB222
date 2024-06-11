function log(stringsArray) {
    if (!Array.isArray(stringsArray)) {
        console.error("Input must be an array of strings.");
        return;
    }

    stringsArray.forEach(str => {
        if (typeof str !== "string") {
            console.error("Array must contain only strings.");
        } else {
            console.log(str);
        }
    });
}

// Example usage:
const messages = ["Hello, world!", "This is a log message.", 123456789];
log(messages);