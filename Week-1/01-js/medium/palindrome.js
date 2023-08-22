/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    while (i < j && str[i].toLowerCase() === str[i].toUpperCase()) i++;
    while (i < j && str[j].toLowerCase() === str[j].toUpperCase()) j--;
    if (i < j && str[i++].toLowerCase() != str[j--].toLowerCase()) return false;
  }
  return true;
}

module.exports = isPalindrome;
