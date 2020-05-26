function firstNonRepeatingLetter(text) {
    const frequency = text
    .toLowerCase()
    .split("")
    .reduce((accum, currentValue) => {
      accum[currentValue] = (accum[currentValue] || 0) + 1;
      return accum;
    }, {});
  for (let letter in frequency) {
    if (frequency[letter] === 1)
      return text.split("").filter(value => value.toLowerCase() == letter)[0];
  }
  return "";
}