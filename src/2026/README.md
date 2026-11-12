# 2026 — TypeScript & JavaScript Practice

A mixed collection of interview problems, data structures, object-oriented design exercises, cryptography, and notes.

## Problem solving (arrays, strings, greedy)

| File | Concept |
| --- | --- |
| `bestTimeToBuy.ts` | Best time to buy/sell stock — one pass tracking the minimum price. |
| `calculateWater.ts` | Trapping rain water — two pointers (or prefix/suffix maxima). |
| `canJump.ts` | Jump Game — greedy reachability. |
| `canJumpV2.ts` | Jump Game II — minimum jumps with a greedy frontier. |
| `findMajorityElement.ts` | Boyer–Moore majority vote. |
| `findAwfulCandy.ts` | Josephus-style candy distribution. |
| `sumOfPrimes.ts` | Prime checking and summation. |
| `theOnlyone.ts` | Single number via XOR. |
| `removeDuplicatesFromArray.ts` | In-place deduplication (two pointers). |
| `removeDuplicatesFromSortedArray.ts` | Remove duplicates II — allow at most two copies. |
| `removeElement.ts` | In-place removal of a value. |
| `removeDuplicateLetters.ts` | Monotonic stack + last-occurrence map. |
| `merge.ts` | Merge two sorted arrays into `nums1` from the back. |
| `reverseArray.ts` | Rotate an array using three reversals. |
| `sum3.ts` | 3Sum — sort + two pointers, skip duplicates. |
| `matriz.ts` | Zigzag string conversion. |
| `HIndex.ts` | H-Index — sort or counting buckets. |
| `InsertDeleteGetRandom.ts` | RandomizedSet with array + hash map, `O(1)` average. |
| `isPalindrome.ts` | Normalize and compare two pointers. |
| `isSubsequence.ts` | Two-pointer subsequence check. |
| `lengthOfLastWord.ts` | Scan from the end. |
| `decToRoman.ts` | Greedy value/symbol table. |
| `romanToDec.ts` | Add/subtract based on the next symbol. |

## Data structures

| File | Concept |
| --- | --- |
| `binaryTree.ts` | Binary tree node and traversal helpers. |
| `linkedList.ts` | Singly linked list. |
| `queue.ts` | Generic FIFO queue. |
| `stack.ts` | Generic LIFO stack. |
| `hashMap.ts` | Generic key-value map backed by an object. |
| `hashTableAgenda.ts` | Phone-book hash table example. |
| `hashTableCollision.js` | Separate-chaining collision resolution. |
| `directedGraph.ts` | Directed graph with adjacency lists. |
| `undirectedGraph.ts` | Undirected graph. |
| `book-my-show.js` | Booking concert tickets with a segment tree. |

## Complexity

| File | Concept |
| --- | --- |
| `complexity.ts` | Examples of `O(1)`, `O(n)`, `O(n²)`, etc. |
| `complexityFactorial.ts` | Factorial/permutation growth — why `n!` is impractical. |

## Object-oriented design (OOAD challenges)

| File | Concept |
| --- | --- |
| `calculatePriceOfFreight.ts` | **Strategy** pattern for freight pricing, selected by a simple factory. |
| `restaurantQueueSystem.ts` | Queue/dispatch model with dishes, cook times and a dish factory. |
| `templates.ts` | Renderer **strategies** for HTML/PDF/CSV output. |
| `factoryNotes.md` | Factory Method vs. Abstract Factory notes. |

## Cryptography

| File | Concept |
| --- | --- |
| `caesarCipher.ts` | Caesar shift cipher. |
| `myOwnCripto.ts` | Toy additive/XOR-style cipher. |
| `fileShareCrypt.ts` | AES-256-CTR file encrypt/decrypt helpers used by the crypto server. |

> These ciphers are educational. Real systems need authenticated encryption (for example AES-GCM), random IVs and managed keys.

## Notes

| File | Topic |
| --- | --- |
| `graphNotes.md` | Directed vs. undirected graphs, with Mermaid diagrams. |
| `hashTable.notes.md` | Hashing, collisions, load factor, arrays vs. hash tables. |
| `factoryNotes.md` | Creational design patterns. |

## Run

```bash
node src/2026/hashTableCollision.js
npx ts-node src/2026/canJump.ts
npx ts-node src/2026/InsertDeleteGetRandom.ts
```

Most files end with a `console.log` demo, so running them prints the expected output.
