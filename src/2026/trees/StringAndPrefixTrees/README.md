# String and Prefix Trees

Trees specialized for **text**: prefix lookup, autocomplete, dictionary matching and substring queries.

## Files

| File | Concept | Notes |
| --- | --- | --- |
| `trie.js` | Classic prefix tree, one character per edge. | `O(L)` insert/search; memory-heavy for large alphabets. |
| `compressedTrie.js` | Trie with compressed edges. | Reduces chains of single-child nodes. |
| `radixTree.js` | Radix/Patricia-style compressed tree. | Edges store strings or multi-bit labels. |
| `patriciaTrie.js` | PATRICIA trie (bitwise radix tree). | Compressed binary trie for integer/string keys. |
| `burstTrie.js` | Burst trie: buckets at nodes, burst when full. | Better cache behavior; used in text search. |
| `hatTrie.js` | HAT-trie: hash buckets + trie. | Fast modern string dictionary. |
| `dawg.js` | Directed Acyclic Word Graph. | Shares suffixes as well as prefixes; compact dictionary. |
| `suffixTree.js` | Compressed trie of all suffixes. | Substring search, repeats, longest common substring. |
| `suffixArray.js` | Sorted array of suffix start indices. | Compact alternative to a suffix tree; binary search. |
| `merklePatriciaTrie.js` | Merkle Patricia Trie. | Ethereum-style authenticated key/value trie. |
| `genericNAryTree.js` | Generic n-ary node. | Building block for custom string trees. |

## Concepts

- **Prefix tree**: each root-to-node path spells a prefix. Nodes mark `isEnd` for complete words.
- **Edge compression**: instead of one character per edge, store a whole substring. This removes unary chains and saves memory.
- **Suffix structures**: index every suffix of a text, enabling `O(L)` substring search (or `O(L log n)` with a suffix array).
- **DAWG**: a trie minimized into a DAG — equivalent suffixes share nodes.
- **Hashing + trie**: HAT/burst tries group keys into buckets and only branch when a bucket overflows.
- **Authenticated trie**: Merkle Patricia nodes are hashed, so the root commits to the entire key/value set.
- **Alphabet trade-off**: array-per-node is fast but wastes memory; maps are sparse but allocate objects; compressed edges reduce node count.

## Complexity

| Operation | Trie | Suffix tree/array |
| --- | --- | --- |
| Insert key of length `L` | `O(L)` | build `O(n)` / `O(n log n)` |
| Exact lookup | `O(L)` | `O(L)` |
| Prefix/autocomplete | `O(L + matches)` | — |
| Substring search | — | `O(L)` (tree) / `O(L log n)` (array) |
| Memory | `O(total characters)` | `O(n)` for array, larger for tree |

## When to use what

- **Autocomplete / dictionary**: trie, compressed trie, HAT-trie.
- **Many substring/repetition queries**: suffix tree or suffix array.
- **Memory-constrained word list**: DAWG or compressed trie.
- **Blockchain authenticated state**: Merkle Patricia Trie.
- **IP routing / longest prefix**: radix tree (see `../SystemTrees/radixRoutingTree.js`).

## Run

```bash
node src/2026/trees/StringAndPrefixTrees/trie.js
node src/2026/trees/StringAndPrefixTrees/compressedTrie.js
node src/2026/trees/StringAndPrefixTrees/suffixArray.js
node src/2026/trees/StringAndPrefixTrees/merklePatriciaTrie.js
```
