function isPalindrome(word) {
  // return word === word.split("").reverse().join("");
  const toArray = word.split("");
  const array = [];
  toArray.forEach((char) => array.unshift(char));
  const newWord = array.join("");
  return word === newWord;
}

/* 
  + split input word into an array of characters
  + reverse the array so that the letters are now backwards
  + join the reversed array so that it is a string again
  + check if the original word is the same asthe reversed version
*/

/*
  checked if the passed-in word is the same as the reversed version of that word, and
  returned the result of the comparison
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
