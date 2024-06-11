function tidy(arr){
    return arr.map(e=>e.trim());
}
console.log(tidy([' hello', ' world ']));