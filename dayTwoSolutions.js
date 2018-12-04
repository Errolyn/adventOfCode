
// this is a small subset of the original set of strings. 
var string = "uosnxmfkezbojfdgwvrtaqhluy iosnxmfkazbcopdgnvrtaqhluy ioanxmfkezbcjpdgwvrjaohluy uosnxmfkezbcjpjgwvrtaqhlut imsnxmfkezbcjpugwvataqhluy ioenxmfkezbcjpdgwvrraqhluz";

var idsTwoLetterDup = 0
var idsThreeLetterDup = 0

string = string.split(' ')

for (i in  string) {
  var sortLetters = function(text) {
      return text.split('').sort().join('');
  };

  var letterValues = sortLetters(string[i]).replace(/(.)\1*/g, function(m, $1) {
          return $1 + m.length;
      })


  if (letterValues.includes('2')) {
    idsTwoLetterDup++	
  } 
  if (letterValues.includes('3')) {
    idsThreeLetterDup++
  }
}

var checkSum = idsTwoLetterDup * idsThreeLetterDup

console.log(checkSum)



