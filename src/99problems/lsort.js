/**
P28 (**) Sorting a list of lists according to length of sublists
a) lsort: sort by length
b) lfsort: sort by length frequency

Example:
?- lsort([[a,b,c],[d,e],[f,g,h],[d,e],[i,j,k,l],[m,n],[o]],L).
L = [[o], [d, e], [d, e], [m, n], [a, b, c], [f, g, h], [i, j, k, l]]
 */

function lsort(list) {
  return [...list].sort((a, b) => a.length - b.length);
}

function lfsort(list) {
  const freqs = {};
  for (const item of list) {
    freqs[item.length] = (freqs[item.length] || 0) + 1;
  }

  return [...list].sort((a, b) => freqs[a.length] - freqs[b.length]);
}
