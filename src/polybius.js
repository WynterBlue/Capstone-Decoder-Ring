// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusSquare = [ //polybiusSquare array with objects
    { letter: 'a', code: '11' },
  { letter: 'b', code: '21' },
  { letter: 'c', code: '31' },
  { letter: 'd', code: '41' },
  { letter: 'e', code: '51' },
  { letter: 'f', code: '12' },
  { letter: 'g', code: '22' },
  { letter: 'h', code: '32' },
  { letter: '(i/j)', code: '42' },
  { letter: 'k', code: '52' },
  { letter: 'l', code: '13' },
  { letter: 'm', code: '23' },
  { letter: 'n', code: '33' },
  { letter: 'o', code: '43' },
  { letter: 'p', code: '53' },
  { letter: 'q', code: '14' },
  { letter: 'r', code: '24' },
  { letter: 's', code: '34' },
  { letter: 't', code: '44' },
  { letter: 'u', code: '54' },
  { letter: 'v', code: '15' },
  { letter: 'w', code: '25' },
  { letter: 'x', code: '35' },
  { letter: 'y', code: '45' },
  { letter: 'z', code: '55' }
  ];
  function polybius(input, encode = true) {
    // your solution code here
    let finalResult = ""
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    if (encode === true) {// encoder
      for (let i = 0; i < input.length; i++){ //look at each character in the string
        const letter = input[i].toLowerCase()
        if (alphabet.includes(letter)) { //if it's a letter
          polybiusSquare.find((polyObj) => {//find the letter in the polybiusSquare
            if (polyObj.letter.includes(letter) || polyObj.letter === letter){//add coded letter to finalResult
              finalResult += polyObj.code
            }
          })
        }else{//if it's not a letter
          finalResult += input[i]
        }
      }
      return finalResult
    }
    if (encode === false) { //decoder (this one made me suffer)
      const noSpaceInput = input.split(' ').join('')
      let wordList = (input.split(' ')) //separates words by spaces
      let deciphered = []
      if(noSpaceInput.length % 2 === 0) { //make sure string is divisible by two
        wordList.forEach((word) => {//for each word in the wordList array
          let decipheredWord = ""
          let numberPairs = [] 
          for (let i = 0; i<word.length; i += 2){//separate numbers into pairs and add them to numberPairs array
            numberPairs.push(word.substring(i, i+2))
          }
          numberPairs.forEach((pair) => {//for each pair, find the match letter in polybiusSquare
            polybiusSquare.find((polyObj) => {
              if(polyObj.code === pair){
                decipheredWord += polyObj.letter //add the letter to the decipheredWord string

              }
            })
          })
          deciphered.push(decipheredWord)//push the word found to the deciphered array
        })
        
        return deciphered.join(' ')//join the individual words into a string by adding spaces between them
      }
      else { //return false if code is not divisible by two
        return false
      }
    } 
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
