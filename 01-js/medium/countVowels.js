/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowelCount = 0;
    const vowelMap = new Map([['a', true], ['e', true], ['i', true], ['o', true], ['u', true]]);
    console.log(vowelMap);
    for(let i of str){
      if(vowelMap.has(i.toLowerCase())){
        vowelCount++;
      }
    }
    return vowelCount
}

countVowels('hello');
module.exports = countVowels;