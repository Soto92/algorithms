function alienOrder(words) {
  const graph = new Map();
  const indeg = new Map();
  
  for (const w of words) for (const c of w) {
    if (!graph.has(c)) graph.set(c, new Set());
    if (!indeg.has(c)) indeg.set(c, 0);
  }
  
  for (let i = 0; i + 1 < words.length; i++) {
    const w1 = words[i], w2 = words[i + 1];
    if (w1.length > w2.length && w1.slice(0, w2.length) === w2) return "";
    let found = false;
    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      const a = w1[j], b = w2[j];
      if (a !== b) {
        if (!graph.get(a).has(b)) {
          graph.get(a).add(b);
          indeg.set(b, indeg.get(b) + 1);
        }
        found = true;
        break;
      }
    }
  }
  
  const q = [];
  for (const [c, d] of indeg) if (d === 0) q.push(c);
  const res = [];
  while (q.length) {
    const c = q.shift();
    res.push(c);
    for (const nei of graph.get(c) || []) {
      indeg.set(nei, indeg.get(nei) - 1);
      if (indeg.get(nei) === 0) q.push(nei);
    }
  }
  
  return res.length === indeg.size ? res.join('') : "";
}