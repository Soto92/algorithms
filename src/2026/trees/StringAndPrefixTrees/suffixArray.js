class SuffixArray {
  constructor(text = "") {
    this.text = text;
    this.array = text ? this.build(text) : [];
  }

  build(text) {
    return Array.from({ length: text.length }, (_, index) => index).sort((a, b) => {
      const first = text.slice(a);
      const second = text.slice(b);
      return first < second ? -1 : first > second ? 1 : 0;
    });
  }

  search(pattern) {
    const result = [];

    for (const index of this.array) {
      if (this.text.startsWith(pattern, index)) result.push(index);
    }

    return result;
  }
}

module.exports = { SuffixArray };
