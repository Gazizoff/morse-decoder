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
    let arr =[]
    for(let i = 10; i<=expr.length; i+=10){
        let miniStr = expr.slice(i-10,i)
        console.log(miniStr)
        arr.push(miniStr)
        console.log(arr)
    }
    return arr.map(decodeStr)
    .map(item => MORSE_TABLE[item] ? MORSE_TABLE[item] : ' ')
    .join('')
    function decodeStr(str){
        let newStr = ''
        do {
            if(str[0]+str[1] == '00'){
                str = str.slice(2,str.length)
            }
            if(str[0]+str[1] == '10'){
                newStr +='.'
                str = str.slice(2,str.length)
            }
            if(str[0]+str[1] == '11'){
                newStr +='-'
                str = str.slice(2,str.length)
            }
            if(str[0]+str[1] == '**'){
                newStr +='**'
                str = str.slice(2,str.length)
            }
        }while (str.length>=2)
        return newStr
    }
    }
module.exports = {
    decode
}