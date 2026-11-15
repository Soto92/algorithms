# Decision and AI Trees

Trees used to make decisions, predict values, or search game states. These are simplified models of machine-learning and game-AI techniques.

## Files

| File | Concept |
| --- | --- |
| `decisionTree.js` | Generic decision tree: each internal node holds a test, leaves hold a value. |
| `classificationTree.js` | Supervised classifier: splits features by threshold and predicts a class label. |
| `regressionTree.js` | Predicts a numeric value; leaves store the mean/target of their region. |
| `randomForest.js` | Ensemble (bagging) of decision trees; averages/votes their predictions. |
| `extraTrees.js` | Extremely randomized trees: stronger randomization of split thresholds. |
| `gradientBoostedTrees.js` | Sequential ensemble where each tree fits the residual error of the previous ones. |
| `behaviorTree.js` | Game/robotics AI: `sequence`, `selector` and status nodes (`success`, `failure`, `running`). |
| `gameTree.js` | State/action tree for games (nodes = positions, edges = moves). |
| `minimaxTree.js` | Adversarial search: maximize your score while the opponent minimizes it. |
| `monteCarloTreeSearchTree.js` | MCTS: selection, expansion, simulation, backpropagation using UCT. |

## Key concepts

- **Split**: a feature + threshold that partitions data.
- **Impurity**: Gini impurity or entropy for classification; variance/MSE for regression. A good split reduces impurity.
- **Overfitting**: deep trees memorize training data. Limit depth, require minimum samples per leaf, or prune.
- **Bagging**: train trees on bootstrap samples and combine them (random forest).
- **Boosting**: train trees sequentially, each focused on previous errors (gradient boosting).
- **Randomization**: random forests sample features; extra-trees randomize thresholds too.
- **Minimax + alpha-beta**: prune branches that cannot improve the result.
- **Exploration vs. exploitation**: MCTS balances untried moves (high uncertainty) with moves that look strong.

## Complexity intuition

- Prediction in one tree: `O(depth)`.
- Training a tree: roughly `O(features × samples log samples)` per level, depending on split search.
- Random forest/boosting: `O(number_of_trees × cost_of_one_tree)`.
- Minimax: `O(b^d)` without pruning, where `b` is branching factor and `d` depth.

## Run

```bash
node src/2026/trees/DecisionAndAITrees/decisionTree.js
node src/2026/trees/DecisionAndAITrees/minimaxTree.js
node src/2026/trees/DecisionAndAITrees/monteCarloTreeSearchTree.js
```

These files demonstrate structure and flow, not production ML quality. Real libraries add feature encoding, regularization, parallel training, and numerical safeguards.
