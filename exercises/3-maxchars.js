// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  // for (let char of str) {
  //   if (charMap[char]) {
  //     charMap[char]++;
  //   } else {
  //     charMap[char] = 1;
  //   }
  // }

  for (let char of str) {
    // charMap[char] = charMap[char] + 1 || 1;
    charMap[char] = ++charMap[char] || 1;
  }

  // for (const [key, value] of Object.entries(charMap)) {
  //   // converts an object to an array
  //   // console.log(key, value);
  //   if (value > max) {
  //     max = value;
  //     maxChar = key;
  //   }
  // }

  // newer way of looping through an object:
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }

  // return charMap; // { a: 1, b: 1, c: 7, d: 1 }
  return maxChar;

  // OR
  // for (let char of str) {
  //   charMap[char] = charMap[char] + 1 || 1;
  // }

  // for (let char in charMap) {
  //   if (charMap[char] > max) {
  //     max = charMap[char];
  //     maxChar = char;
  //   }
  // }

  // return maxChar;
}

console.log(maxChar("abcccccccd"));

// The technique is also useful to solve anagrams (does sting A has the same character as string B) or detect ifthe given string has any repeated characters.
