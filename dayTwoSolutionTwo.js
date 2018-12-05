// sample segment of input.

var string = "uosnxmfkezbojfdgwvrtaqhluy iosnxmfkazbcopdgnvrtaqhluy ioanxmfkezbcjpdgwvrjaohluy uosnxmfkezbcjpjgwvrtaqhlut imsnxmfkezbcjpugwvataqhluy ioenxmfkezbcjpdgwvrraqhluz iosnxmfkezbcjpdgevitnqhluy iosnxmfkezcccpdgcvrtaqhluy loinxmfkezbcjpdgwvrtaqhluu";

let idArray = string.split(" ").sort()

for (i in idArray) {
  var tmp = Number(i) + 1
  var firstWord = idArray[i].split('')
  var secondWord = idArray[tmp].split('')
  var countDiff = 0
 
 for (var letterPosition in firstWord) {
 	 if (firstWord[letterPosition] === secondWord[letterPosition]){
    letterPosition++
   } else if (countDiff <= 1) {
   	  firstWord.splice(letterPosition, 1)
      secondWord.splice(letterPosition, 1)
      countDiff++
      letterPosition++
   } else {
      countDiff++
      break
   }
  }
  
  if (countDiff < 2) {
    console.log(firstWord.join(''))
    console.log(secondWord.join(''))
    break
  } 
}














