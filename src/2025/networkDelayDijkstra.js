// https://neetcode.io/problems/network-delay-time?list=neetcode150

function networkDelayTime(times, n, k) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of times) {
    graph[u].push([v, w]);
  }

  const minHeap = [[0, k]];
  const dist = Array(n + 1).fill(Infinity);
  dist[k] = 0;

  while (minHeap.length) {
    minHeap.sort((a, b) => b[0] - a[0]);
    const [time, node] = minHeap.pop();

    if (time > dist[node]) continue;

    for (const [nei, wt] of graph[node]) {
      const newTime = time + wt;
      if (newTime < dist[nei]) {
        dist[nei] = newTime;
        minHeap.push([newTime, nei]);
      }
    }
  }

  const maxTime = Math.max(...dist.slice(1));
  return maxTime === Infinity ? -1 : maxTime;
}
