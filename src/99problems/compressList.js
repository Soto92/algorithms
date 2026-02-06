/**
P08 (**) Eliminate consecutive duplicates of list elements.
If a list contains repeated elements they should be replaced with a single copy of the element. The order of the elements should not be changed.

Example:
?- compress([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
X = [a,b,c,a,d,e]
 */

function compressV1(list) {
  return list.filter((item, index) => index === 0 || item !== list[index - 1]);
}

function compressV2(list) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (i === 0 || list[i] !== list[i - 1]) {
      result.push(list[i]);
    }
  }
  return result;
}
