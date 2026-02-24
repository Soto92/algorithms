/**
P26 (**) Generate the combinations of K distinct objects chosen from the N elements of a list
Example:
?- combination(3,[a,b,c,d,e,f],L).
L = [a,b,c] ;
L = [a,b,d] ;
...
 */

function combinations(k, list) {
  if (k === 0) return [[]];
  if (list.length === 0) return [];
  const [head, ...tail] = list;

  const withHead = combinations(k - 1, tail).map((c) => [head, ...c]);
  const withoutHead = combinations(k, tail);

  return [...withHead, ...withoutHead];
}
