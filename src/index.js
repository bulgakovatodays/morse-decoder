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
  let c = String(expr);
  //console.log(c);
  //console.log(c.length);
  let decadeC = c.length / 10;
  console.log(decadeC);
  let massivExpr = [];
  massivExpr[0] = c.slice(0, 10);
  //console.log('First decade' + ' ' + massivExpr[0]);

  for (let i = 1; i < decadeC; i++){
    massivExpr[i] = c.slice(i*10, ((i+1)*10));
    //console.log('Next decade' + ' ' +  massivExpr[i]);
  }
  //console.log('All massiv' + ' ' +  massivExpr);
  let massiv = [];
  for (let i = 0; i < massivExpr.length; i++){
    //console.log('Blok #' + (i+1) + ' ' + massivExpr[i]);
    let firstStr = massivExpr[i].replace(/11/g, '-').replace(/10/g, '.');
    //console.log('Replace symbles: ' + ' ' +  firstStr);
    firstStr = firstStr.replace(/0/g, '');
    //.replace(/\*/g, '0')
    //console.log('Replace symbles without zerow: ' + ' ' +  firstStr);
    
    for (key in MORSE_TABLE){
      if (key === firstStr) {
          firstStr = MORSE_TABLE[key];
          //console.log('Symbol: ' + firstStr);
          massiv.push(firstStr);
      } else if (firstStr === '**********'){
          massiv.push(' ');
      }
    }
  }
  //console.log('Massiv is ' + massiv);

  let result = massiv.toString('').replace(/,/g, '');
  if (result.includes('  ')){
    result = result.replace(/     /g, ' ');
  }
  if (result.includes('  ')){
    result = result.replace(/    /g, ' ');
  }
  if (result.includes('  ')){
    result = result.replace(/   /g, ' ');
  }
  if (result.includes('  ')){
    result = result.replace(/  /g, ' ');
  }
  console.log('String is ' + result);
  //console.log('String.length is ' + result.length);
  return result;
}

module.exports = {
    decode
}