class SuffixArray {
  constructor(text) {
    this.text = text;
    this.suffixArray = this.buildSuffixArray(text);
  }

  buildSuffixArray(text) {
    const suffixes = [];
    for (let i = 0; i < text.length; i++) {
      suffixes.push({ index: i, suffix: text.substring(i) });
    }

    suffixes.sort((a, b) => a.suffix.localeCompare(b.suffix));

    return suffixes.map((item) => item.index);
  }

  search(pattern) {
    let low = 0;
    let high = this.text.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const suffix = this.text.substring(this.suffixArray[mid]);
      if (suffix.startsWith(pattern)) return true;
      if (pattern < suffix) high = mid - 1;
      else low = mid + 1;
    }
    return false;
  }
}
