/**
P24 (*) Lotto: Draw N different random numbers from the set 1..M.
The selected numbers shall be put into a result list.
Example:
?- rnd_select(6,49,L).
L = [23,1,17,33,21,37]
 */

function lotto(n, m) {
  const range = [];
  for (let i = 1; i <= m; i++) range.push(i);
  const result = [];
  for (let i = 0; i < n; i++) {
    if (range.length === 0) break;
    const idx = Math.floor(Math.random() * range.length);
    result.push(range[idx]);
    range.splice(idx, 1);
  }
  return result;
}
