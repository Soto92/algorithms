/**
https://neetcode.io/problems/foreign-dictionary?list=neetcode150
 */

function alienOrder(words) {
  const adj = new Map();
  const inDegree = new Map();

  for (let word of words) {
    for (let char of word) {
      if (!adj.has(char)) {
        adj.set(char, new Set());
        inDegree.set(char, 0);
      }
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);
    let foundDifference = false;

    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        if (!adj.get(w1[j]).has(w2[j])) {
          adj.get(w1[j]).add(w2[j]);
          inDegree.set(w2[j], inDegree.get(w2[j]) + 1);
        }
        foundDifference = true;
        break;
      }
    }

    if (!foundDifference && w1.length > w2.length) {
      return "";
    }
  }

  const queue = [];
  for (let [char, degree] of inDegree) {
    if (degree === 0) queue.push(char);
  }

  const result = [];
  while (queue.length > 0) {
    const curr = queue.shift();
    result.push(curr);

    for (let neighbor of adj.get(curr)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  if (result.length !== inDegree.size) {
    return "";
  }

  return result.join("");
}
