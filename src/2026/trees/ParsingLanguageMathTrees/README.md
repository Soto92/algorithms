# Parsing, Language and Math Trees

Trees that represent **structure**: the syntax of a language, the evaluation order of an expression, or the branching of a recursive computation.

## Files

| File | Concept |
| --- | --- |
| `parseTree.js` | Concrete parse tree produced by a grammar; every derivation step is visible. |
| `syntaxTree.js` | Syntax tree with named nodes and attributes. |
| `abstractSyntaxTree.js` | AST: keeps meaning, drops punctuation/formatting details. Used by compilers and linters. |
| `derivationTree.js` | Grammar derivation tree: internal nodes are nonterminals, leaves are terminals. |
| `expressionTree.js` | Binary tree for arithmetic; leaves are operands, internal nodes are operators. |
| `huffmanTree.js` | Prefix-code tree built from symbol frequencies. |
| `recursionTree.js` | Call/cost tree used to analyze divide-and-conquer recurrences. |
| `callTree.js` | Function-call tree: caller → callee. |
| `proofTree.js` | Proof/derivation in a logic system: conclusion supported by a rule and premises. |

## Concepts

- **Grammar**: rules `nonterminal → symbols`. A parse tree records which rule was applied.
- **Ambiguity**: a grammar is ambiguous if one input has multiple parse trees (classic example: `1 + 2 * 3`).
- **Precedence and associativity**: encoded in the grammar or resolved by a Pratt/precedence-climbing parser.
- **AST vs. parse tree**: the AST is smaller and semantic; the parse tree is a full record of the syntax.
- **Evaluation**: post-order traversal evaluates an expression tree; pre-order prints prefix notation.
- **Short-circuiting**: `and`/`or` in an AST can skip evaluating the right subtree.
- **Huffman coding**: repeatedly merge the two lowest-frequency nodes; the result gives optimal prefix codes for known frequencies.
- **Recursion tree**: each node is a subproblem, labeled with its cost. Summing per level gives the recurrence's complexity.
- **Proof tree**: leaves are axioms/assumptions, internal nodes are inference rules.

## Example: expression tree

```text
        +
       / \
      *   3
     / \
    2   4
```

- In-order: `2 * 4 + 3`
- Pre-order (prefix): `+ * 2 4 3`
- Post-order (postfix): `2 4 * 3 +`

## Complexity

- Parsing: `O(n)` for LL/LR/precedence parsers, `O(n³)` for general context-free parsing (CYK/Earley).
- Tree evaluation: `O(nodes)`.
- Huffman construction: `O(n log n)` with a heap.

## Run

```bash
node src/2026/trees/ParsingLanguageMathTrees/expressionTree.js
node src/2026/trees/ParsingLanguageMathTrees/abstractSyntaxTree.js
node src/2026/trees/ParsingLanguageMathTrees/huffmanTree.js
```
