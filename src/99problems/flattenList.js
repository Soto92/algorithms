/**
P07 (**) Flatten a nested list structure.
Transform a list, possibly holding lists as elements into a `flat' list by replacing each list with its elements (recursively).

Example:
?- my_flatten([a, [b, [c, d], e]], X).
X = [a, b, c, d, e]
 */

function myFlattenV1(list) {
  return list.flat(Infinity);
}

function myFlattenV2(list) {
  let flattened = [];
  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      flattened = flattened.concat(myFlattenV2(list[i]));
    } else {
      flattened.push(list[i]);
    }
  }
  return flattened;
}
