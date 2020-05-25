//https://www.hackerrank.com/challenges/sherlock-and-anagrams
const sherlockAndAnagrams = (str) => {
  let counter = 0,
    anagramSorted = "",
    potencialAnagram = "",
    j = 0,
    arrAnagram = [],
    objAnagram = {};
  const anagrams = [],
    result = [];
  for (let i = 0; i < str.length; i++) {
    while (j < str.length) {
      potencialAnagram = str.substring(j - i, j + 1);
      arrAnagram.push(potencialAnagram);
      anagramSorted = potencialAnagram.split("").sort().join("");
      objAnagram[anagramSorted] = (objAnagram[anagramSorted] || 0) + 1;
      if (objAnagram[anagramSorted] > 1) {
        counter += parseInt(objAnagram[anagramSorted]) - 1;
      }
      if (j === str.length - 1 && potencialAnagram.length < str.length) {
        anagrams.push(arrAnagram);
        result.push(objAnagram);
        objAnagram = {};
        arrAnagram = [];
        j = potencialAnagram.length;
        break;
      }
      j++;
    }
  }
  //console.log(anagrams);
  //console.log(result);
  //console.log(counter);
  return counter;
};
console.log(
  sherlockAndAnagrams(
    "mqmtjwxaaaxklheghvqcyhaaegtlyntxmoluqlzvuzgkwhkkfpwarkckansgabfclzgnumdrojexnrdunivxqjzfbzsodycnsnmw"
  )
);