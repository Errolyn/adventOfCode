let string = "+1 +55 -32 +8"; // not real number set, example of number form

// this Solution was for both day one challenges. the first challenge was to get the total of the string number above, the second (also current form of code) is to find the first time the value is the same twice, assuming the numbers wrap.

let newValue = 0
let previousValues = new Set()
let keepItUp = false

const stringToArray = string.split(" ");

while (keepItUp === false) {
  for (i in stringToArray){
    var tmpWord = stringToArray[i]
    if (previousValues.has(newValue)){
      console.log(newValue)
      keepItUp = true
      return newValue
    } 

    if (tmpWord[0] === '+'){
      tmpWord = tmpWord.split('')
      tmpWord.splice(0,1) 
      tmpWord = tmpWord.join('')
      previousValues.add(newValue)
      newValue = newValue + Number(tmpWord)
    } else {
      tmpWord = tmpWord.split('')
      tmpWord.splice(0,1)
      tmpWord = tmpWord.join('')
      previousValues.add(newValue)
      newValue = newValue - Number(tmpWord)
    }
  }
}