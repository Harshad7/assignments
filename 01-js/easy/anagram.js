/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length != str2.length) return false;

  let str1Map = new Map();
  let str2Map = new Map();

  str1Map = getMapfromString(str1.toLowerCase());
  str2Map = getMapfromString(str2.toLowerCase());
  
  console.log(str1Map.keys());

  for(let s of str1Map.keys()){
    if(!(str1Map.get(s) == str2Map.get(s))){
      return false;
    }
  }
  return true;

}

function getMapfromString(str){
  const strMap = new Map();
  for(let s of str){
    if(strMap.has(s)){
      strMap.set(s, strMap.get(s) + 1 ); 
    }else{
      strMap.set(s, 1);
    }
  }
  return strMap;
}

//isAnagram('hello', 'world');

module.exports = isAnagram;
