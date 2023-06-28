// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const lookup = "abcdefghijklmnopqrstuvwxyz"
    //alphabet   =  zyxwvutsrqpomnlkjihgfedcba
    
    if(typeof alphabet !== 'string' || alphabet.length < 26){//returns false if alphabet isn't valid
      return false
    }
    
    const letterArray = alphabet.split("")
    letterArray.sort()
    for(let i = 0; i < letterArray.length - 1; i++) {//returns false if characters aren't unique
      if (letterArray[i] === letterArray[i+1]) {
        return false
      }
    }

    if (encode === true){//encoder
      let encodedResult = ""
      for (let i = 0; i < input.length; i++){//look at each character in the string
        const letter = input[i].toLowerCase()
        if (input[i] === " "){//if it's a space
          encodedResult += input[i]
        }else {// if it's a character
          const index = lookup.indexOf(letter)
          const newLetter = alphabet[index]
          encodedResult += newLetter
        }
      }
      return encodedResult
  }
    if (encode === false){//decoder
      let decodedResult = ""
      for (let i = 0; i < input.length; i++){//look at each character in the string
        const letter = input[i].toLowerCase()
        if (input[i] === " ") {//if it's a space
          decodedResult += input[i]
        }else {// if it's a character
          const index = alphabet.indexOf(letter)
          const newLetter = lookup[index]
          decodedResult += newLetter
        }
      }
      return decodedResult
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
