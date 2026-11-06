# Solutions for 99 Problems

JavaScript solutions to the classic Prolog ["99 Problems"](https://www.ic.unicamp.br/~meidanis/courses/mc336/2009s2/prolog/problemas/) list, based on [Tech resources by Diego Pacheco](https://diegopacheco.github.io/tech-resources/).

The originals are logic-programming exercises. These versions translate the ideas to arrays, objects and recursion in JavaScript. Most files export their function and print a small example.

## Themes

| Group | Problems | Main concepts |
| --- | --- | --- |
| Lists | P01–P28 | Recursion, run-length encoding, slicing, permutations, combinations, sorting. |
| Arithmetic | P31–P41 | Primes, GCD, Euler's totient, factorization, Goldbach's conjecture. |
| Logic | P46–P50 | Truth tables, logical operators, Gray code, Huffman coding. |
| Binary trees | P54–P69 | Tree representation, balancing, traversal, layout, serialization. |
| Multiway trees | P70–P73 | Node counting, path length, bottom-up order, Lisp-like notation. |
| Graphs | P80–P89 | Representation conversion, paths, cycles, spanning trees, coloring, isomorphism. |
| Puzzles and misc | P90–P97 | N-Queens, knight's tour, graceful trees, arithmetic puzzles, Sudoku. |

## Lists (P01–P28)

| File | Concept |
| --- | --- |
| `findLastElementOfList.js` | Last element of a list. |
| `findLastButOneElementOfList.js` | Penultimate element. |
| `findKthElementOfList.js` | k-th element. |
| `findNumberOfElementsOfList.js` | Length without `length`. |
| `reverseList.js` | Reverse a list. |
| `isPalindrome.js` | Palindrome check. |
| `flattenList.js` | Flatten nested lists. |
| `compressList.js` | Remove consecutive duplicates. |
| `packList.js` | Group consecutive duplicates into sublists. |
| `encodeList.js` | Run-length encoding. |
| `encodeModifiedList.js` | RLE that keeps singletons uncompressed. |
| `encodeDirectList.js` | Direct RLE without intermediate packing. |
| `decodeList.js` | Decode a run-length encoded list. |
| `duplicateList.js` | Duplicate every element. |
| `duplicateListN.js` | Duplicate every element `n` times. |
| `dropEveryNth.js` | Drop every n-th element. |
| `splitList.js` | Split at index `k`. |
| `sliceList.js` | Extract a slice. |
| `rotateList.js` | Rotate a list by `n` positions. |
| `removeAt.js` | Remove the k-th element. |
| `insertAt.js` | Insert at position `k`. |
| `range.js` | Build an integer range. |
| `rndSelect.js` | Random selection of `n` elements. |
| `lotto.js` | Draw `n` distinct numbers from a range. |
| `rndPermu.js` | Random permutation. |
| `combinations.js` | All combinations of `k` elements. |
| `group.js` | Group elements into disjoint subsets. |
| `lsort.js` | Sort sublists by length. |

## Arithmetic (P31–P41)

| File | Concept |
| --- | --- |
| `isPrime.js` | Primality test with divisor scan. |
| `gcd.js` | Greatest common divisor (Euclid). |
| `coprime.js` | Coprimality via `gcd(a, b) === 1`. |
| `totientPhi.js` | Euler's totient by factorization. |
| `primeFactors.js` | Prime factors. |
| `primeFactorsMult.js` | Prime factors with multiplicities. |
| `totientPhiImproved.js` | Faster totient using the factorization. |
| `compareTotient.js` | Compare the two totient approaches. |
| `primeList.js` | All primes in a range. |
| `goldbach.js` | Goldbach decomposition of an even number. |
| `goldbachList.js` | Goldbach decompositions for a range. |

## Logic and coding (P46–P50)

| File | Concept |
| --- | --- |
| `truthTables.js` | Truth tables for `and`, `or`, `nand`, `nor`, `xor`, `impl`, `equ`. |
| `truthTablesOperators.js` | Logical expressions written as operators. |
| `truthTablesGeneral.js` | Truth tables for an arbitrary number of variables. |
| `grayCode.js` | n-bit Gray code sequence. |
| `huffmanCode.js` | Huffman codes from symbol frequencies. |

## Binary trees (P54–P69)

| File | Concept |
| --- | --- |
| `isTree.js` | Check a valid binary-tree term. |
| `cbalTree.js` | Completely balanced trees with `n` nodes. |
| `symmetricTree.js` | Mirror-symmetry check. |
| `constructBst.js` | Build a BST from a list. |
| `symCbalTrees.js` | Generate-and-test symmetric balanced trees. |
| `hbalTree.js` | Height-balanced trees of a given height. |
| `hbalTreeNodes.js` | Height-balanced trees with a given node count (min/max nodes). |
| `countLeaves.js` | Count leaves. |
| `leaves.js` | Collect leaves in a list. |
| `internals.js` | Collect internal nodes. |
| `atLevel.js` | Nodes at a given level. |
| `completeBinaryTree.js` | Complete tree using heap-style indices. |
| `layoutBinaryTree.js` | Layout: x = in-order index, y = depth. |
| `layoutBinaryTree2.js` | Alternative evenly spaced layout. |
| `stringToTree.js` | Parse `a(b(d,e),c(,f(g,)))`. |
| `treeTraversals.js` | Preorder and in-order sequences. |
| `dotstringToTree.js` | Parse dot-string form (`abd..e..`). |

## Multiway trees (P70–P73)

| File | Concept |
| --- | --- |
| `mTreeToString.js` | Node string with `^` for "go up". |
| `isMTree.js` | Validate a multiway-tree term. |
| `countMNodes.js` | Count nodes. |
| `internalPathLength.js` | Sum of root-to-node depths (P71). |
| `bottomUpMTree.js` | Bottom-up node order. |
| `lispMTree.js` | Lisp-like `(a (b c))` representation. |

## Graphs (P80–P89)

| File | Concept |
| --- | --- |
| `graphConversions.js` | Convert between `[nodes, edges]` and adjacency lists. |
| `path.js` | All acyclic paths between two nodes. |
| `cycle.js` | A cycle starting at a node. |
| `spanningTree.js` | All spanning trees (backtracking). |
| `minSpanningTree.js` | Minimum spanning tree from weighted edges. |
| `graphIsomorphism.js` | Isomorphism via bijection search. |
| `graphColoring.js` | Degree and Welsh–Powell coloring. |
| `depthFirstOrder.js` | DFS node order. |
| `connectedCOmponent.js` | Connected components. |
| `bipartite.js` | Bipartite check via two-coloring. |

## Puzzles and miscellaneous (P90–P97)

| File | Concept |
| --- | --- |
| `eightQueen.js` | All N-Queens placements. |
| `knightsTour.js` | Knight's tour on an `n × n` board. |
| `vocnckoc.js` | Von Koch's conjecture / graceful tree labeling. |
| `arthmeticPuzzle.js` | Insert `+ - * /` and parentheses to form a target equation (P93). |
| `kRegularGraph.js` | Generate k-regular simple graphs. |
| `fullWords.js` | Spell a number digit by digit ("one-seven-five"). |
| `syntaxChecker.js` | Identifier syntax check: letter followed by letters/digits/hyphens. |
| `sudoku.js` | Sudoku backtracking solver. |

## Run

```bash
node src/99problems/eightQueen.js
node src/99problems/sudoku.js
```

## Concepts to notice

- **Recursion over lists** replaces Prolog's head/tail unification.
- **Generate and test**: produce candidates, then filter with a predicate (`symCbalTrees`, `kRegularGraph`).
- **Backtracking**: undo a choice when it fails (`eightQueen`, `sudoku`, `knightsTour`).
- **Term representation**: trees use arrays like `['t', value, left, right]`; the comment at the top of each file documents the shape.
- **Module style**: most files are standalone; a few export helpers so they can be composed or tested.
