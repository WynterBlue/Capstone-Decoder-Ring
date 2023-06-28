// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    try{
      let result = ""
      let shifter = shift
      const lookup = "abcdefghijklmnopqrstuvwxyz"
      //              01234567890123456789012345
      //                        1         2
      if(!shift || shift === 0 || shift < -25 || shift > 25) { //if shift isn't valid
        throw new Error("Shift isn't valid.")
      }
      //if encode is false shift * -1
      if (encode === false) {
        shifter = shift * -1
      }
      for (let i = 0; i < input.length; i++){//look at each character in the string
        const letter = input[i].toLowerCase()
        if (lookup.includes(letter)) {//if it's a letter
          //what index is it in lookup?
          const lookupIndex = lookup.indexOf(letter)
          // add shift
          const encoder = lookupIndex + shifter
          if(encoder < 0){//if shift goes past a
            const newEnc = 26 + encoder
            const newLetter = lookup[newEnc]
            result += newLetter
          }
          if (encoder > 25) {//if shift goes past z
            const newEnc = encoder -26
            const newLetter = lookup[newEnc]
            result += newLetter
          }
          if (25 >= encoder && encoder >= 0){//if shift stays in range
          // find letter that matches shifted index
          const newLetter = lookup[encoder]
          //add to new result
          result += newLetter
            }
          }
          else{//if it's not a letter
            result += input[i]
            }
        }
        return result.toLowerCase()
      }catch(error) {
        return false
      }
  }

  // caesar("thinkful", 3); //> 'wklqnixo'
  // caesar("thinkful", -3); //> 'qefkhcri'
  // caesar("wklqnixo", 3, false); //> 'thinkful'

  // caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
  // caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

  // caesar("thinkful"); //> false
  // caesar("thinkful", 99); //> false
  // caesar("thinkful", -26); //> false

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
