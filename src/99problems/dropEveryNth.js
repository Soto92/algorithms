/**
P16 (**) Drop every N'th element from a list.
Example:
?- drop([a,b,c,d,e,f,g,h,i,k],3,X).
X = [a,b,d,e,g,h,k]
 */

function dropV1(list, n) {
  return list.filter((_, i) => (i + 1) % n !== 0);
}

function dropV2(list, n) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if ((i + 1) % n !== 0) {
      result.push(list[i]);
    }
  }
  return result;
}
