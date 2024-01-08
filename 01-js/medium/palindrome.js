/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let inputStr = str.toLowerCase()
  let l = 0;
  
  inputStr = inputStr.replace(/[^A-Za-z0-9]/g, '');
  let r = inputStr.length -1;
  console.log(inputStr);

  while(l < r){
    if(inputStr[l] != inputStr[r] ){
      return false;
    }
    l++;
    r--;
  }
  return true;
}

isPalindrome('Eva, can I see bees in a cave?')

/* function applyRegex(str){
  const newStr = str.replace(/[^A-Za-z0-9]/g, '');
  console.log(newStr);
}

applyRegex('tty!!! r3r&&');
 */


module.exports = isPalindrome;
