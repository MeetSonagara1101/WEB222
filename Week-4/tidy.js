function tidy(arr) {
    return arr.map(str => str.trim());
}
let a = ['   meet    ', '    rsxfcgbhj       ']
console.log(tidy(a));