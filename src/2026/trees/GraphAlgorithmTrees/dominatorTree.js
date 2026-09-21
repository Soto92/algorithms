class DominatorTree {
  constructor() {
    this.dominators = new Map();
    this.parent = new Map();
  }

  build(graph, start) {
    const vertices = [...graph.keys()];
    for (const vertex of vertices) this.dominators.set(vertex, new Set(vertices));
    this.dominators.set(start, new Set([start]));

    let changed = true;
    while (changed) {
      changed = false;
      for (const vertex of vertices) {
        if (vertex === start) continue;
        const predecessors = this.predecessors(graph, vertex);
        const intersection = this.intersection(predecessors.map((item) => this.dominators.get(item)));
        intersection.add(vertex);
        if (!this.sameSet(intersection, this.dominators.get(vertex))) {
          this.dominators.set(vertex, intersection);
          changed = true;
        }
      }
    }

    return this;
  }

  predecessors(graph, target) {
    const result = [];
    for (const [vertex, edges] of graph) {
      if ((edges || []).includes(target)) result.push(vertex);
    }
    return result;
  }

  intersection(sets) {
    if (!sets.length) return new Set();
    return sets.reduce((result, set) => new Set([...result].filter((value) => set.has(value))), new Set(sets[0]));
  }

  sameSet(first, second) {
    return first.size === second.size && [...first].every((value) => second.has(value));
  }
}

module.exports = { DominatorTree };
