/**
(*) Find out whether a list is a palindrome.
A palindrome can be read forward or backward; e.g. [x,a,m,a,x].
Example:
?- is_palindrome([x,a,m,a,x]).
true
 */

function isPalindromeV1(list) {
  const reversed = list.slice().reverse();
  return list.every((val, index) => val === reversed[index]);
}

function isPalindromeV2(list) {
  for (let i = 0; i < Math.floor(list.length / 2); i++) {
    if (list[i] !== list[list.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
