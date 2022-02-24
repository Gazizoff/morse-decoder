const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr = [];
    let result = '';
    let i = 0;
    let j = 10;
    for (i = 0; i < expr.length;) {
        arr.push(expr.slice(i, j));
        i = j;
        j = j + 10;
    }
    console.log("array",arr);
    function decodeElemArr(elem) {
        if (elem == '**********'){
            return elem = ' ';
        }
        let i = 0;
        let j = 2;
        let newElemArr = '';
        for (i = 0; j <= 10;) {
            let elemStr = elem.slice(i, j);
            if (elemStr == '10') {
                newElemArr = newElemArr + '.';  
                i = j;
                j = j + 2;              
            }
            else if (elemStr == '11') {
                newElemArr = newElemArr + '-';
                i = j;
                j = j + 2;
            }
            else {
                i = j;
                j = j + 2;
            }
        }
        return newElemArr;
    }
    function decoderElemArrToString (elem) {
        if (MORSE_TABLE[elem] !== undefined) {
            result += MORSE_TABLE[elem];
        }
        else {
            result += ' ';
        }
        return elem;
    }
    let newArr = arr.map(elem => decodeElemArr(elem));
    console.log("newArr",newArr);
    newArr.map(elem => decoderElemArrToString(elem));
    console.log("result",result);
    return result;
}
module.exports = {
    decode
}