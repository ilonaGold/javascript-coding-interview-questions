// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed.

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false

// Solution 1 - with if...else statement

function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  } else {
    return false;
  }
}

// Solution 2 - with return statement

// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return reversed === str;

// Solution 3 - with ternary operator

// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return reversed === str ? true : false;
// }

console.log(palindrome("kayak"));
console.log(palindrome("madam"));
console.log(palindrome("codingmoney"));
