function firstNonRepeatedChar(str) {
  // Step 1: Count character occurrences
  const charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Step 2: Find the first character with count === 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character found
  return null;
}