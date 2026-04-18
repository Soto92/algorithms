/**
 * P85 (**) Graph isomorphism
 * Two graphs G1(N1,E1) and G2(N2,E2) are isomorphic if there is a bijection f: N1 -> N2
 * such that for any nodes X,Y of N1, X and Y are adjacent iff f(X) and f(Y) are adjacent.
 */

function getPermutations(arr) {
  if (arr.length === 0) return [[]];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = getPermutations(arr.slice(0, i).concat(arr.slice(i + 1)));
    for (const p of rest) result.push([arr[i], ...p]);
  }
  return result;
}

function isIsomorphic(graph1, graph2) {
  const [nodes1, edges1] = graph1;
  const [nodes2, edges2] = graph2;

  if (nodes1.length !== nodes2.length || edges1.length !== edges2.length)
    return false;

  const adj1 = new Set(edges1.map(([u, v]) => `${u}-${v}`));
  edges1.forEach(([u, v]) => adj1.add(`${v}-${u}`)); // undirected

  const permutations = getPermutations(nodes2);

  for (const perm of permutations) {
    // Map nodes1[i] -> perm[i]
    const mapping = {};
    nodes1.forEach((n, i) => {
      mapping[n] = perm[i];
    });

    let isMatch = true;
    for (const [u, v] of edges1) {
      const mappedU = mapping[u];
      const mappedV = mapping[v];
      // Check if this mapped edge exists in graph2
      const existsInG2 = edges2.some(
        ([x, y]) =>
          (x === mappedU && y === mappedV) || (x === mappedV && y === mappedU),
      );
      if (!existsInG2) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return true;
  }
  return false;
}
module.exports = { isIsomorphic };
