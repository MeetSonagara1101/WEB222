// Object to provide lookup of morse code (value) for a given letter (key).
let alpha = {
    A : '.-',
    B : '-...',
    C : '-.-.',
    D : '-..',
    E : '.',
    F: '..-.',
    G: '--.',
    H : '....',
    I : '..',
    J : '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R:'.-.',
    S:'...',
    T:'-',
    U:'..-',
    V: '...-',
    W:'.--',
    X:'-..-',
    Y: '-.--',
    Z: '--..',
    ' ': '/'

    // define the mapping here as a literal
};

let morse = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '/': ' '

};

console.log(alpha['Z']);

// Return `true` if all characters are morse code.  Use a RegExp. 
function isMorse(characters) {
    // for(let i=0; i<characters.length;i++){
    //     if(!(characters[i]=='-'||characters[i]=='.'||characters[i]==' '||characters[i]=='/'))
    //         return false;
        
    // }
    // return true

    return /^[.\- /]*$/.test(characters);
}

console.log(isMorse('-- --- .-. ... ./-.-. --- -.. .'));
console.log(isMorse('-- --a .-. ... ./-.-. --- -.. .'));

function isAlpha(characters) {
    return /^[A-Z ]*$/.test(characters);
}

console.log(isAlpha('MORSE CODE'));

function textToMorse(text) {
    if (!isAlpha(text))
        throw Error("Text Must be alphabet!!!")

    text = text.toUpperCase();

    let morse ="";
    for(let i = 0; i<text.length;i++){
         morse+= alpha[text[i]]+' '
    }

    return morse;
}

console.log(textToMorse('%MORSE CODE'))
