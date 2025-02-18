// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Solution 1 - Using for loop

function reverse(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    // reversed = str[i] + reversed;
    reversed += str[i]; // add the character to the beginning of the reversed string
  }
  return reversed;
}

// Solution 2 - Using for...of loop

// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed += char;
//   }
//   return reversed;
// }

// Solution 3 - Using split, reverse and join methods

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

console.log(reverse("hi"));
console.log(reverse("hello"));
console.log(reverse("CodingMoney"));
