/**
P19 (**) Rotate a list N places to the left.
Examples:
?- rotate([a,b,c,d,e,f,g,h],3,X).
X = [d,e,f,g,h,a,b,c]

?- rotate([a,b,c,d,e,f,g,h],-2,X).
X = [g,h,a,b,c,d,e,f]
 */

function rotateV1(list, n) {
  const len = list.length;
  if (len === 0) return [];
  const shift = ((n % len) + len) % len;
  return list.slice(shift).concat(list.slice(0, shift));
}
