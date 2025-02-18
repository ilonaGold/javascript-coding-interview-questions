// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(51));
console.log(reverseInt(189));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-9));

// Math.sign() returns 1 if the number is positive, -1 if the number is negative, and 0 if the number is 0.
