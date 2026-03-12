/**
P23 (**) Extract a given number of randomly selected elements from a list.
The selected items shall be put into a result list.
Example:
?- rnd_select([a,b,c,d,e,f,g,h],3,L).
L = [e,d,a]
 */

function rndSelect(list, n) {
  const result = [];
  const copy = [...list];
  for (let i = 0; i < n; i++) {
    if (copy.length === 0) break;
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy[idx]);
    copy.splice(idx, 1);
  }
  return result;
}
