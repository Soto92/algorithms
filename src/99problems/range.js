/**
P22 (*) Create a list containing all integers within a given range.
Example:
?- range(4,9,L).
L = [4,5,6,7,8,9]
 */

function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
