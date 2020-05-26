//https://www.hackerrank.com/challenges/sherlock-and-valid-string
const isValidString = (s) => {
  let isValid = true,
    counter = 0,
    temp = "";
  const frequency = {};
  if (s.length == 0) {
    return "YES";
  }
  for (let i = 0; i < s.length; i++) {
    frequency[s[i]] = (frequency[s[i]] || 0) + 1;
  }
  for (let key in frequency) {
    if (temp === "") {
      temp = frequency[key];
      continue;
    }
    if (temp === frequency[key]) {
      temp = frequency[key];
    } else {
      counter++;
    }
  }
  isValid = counter > 1 ? false : true;
  return isValid ? "YES" : "NO";
};

console.log(isValidString("abcdefghhgfedecba"));