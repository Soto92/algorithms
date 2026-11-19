# Multiway Trees and Database Indexes

Trees with **more than two children per node**, designed to reduce height and match how storage works (disk pages, blocks, sorted runs).

## Files

| File | Concept |
| --- | --- |
| `bTree.js` | Balanced multiway search tree; nodes hold many keys and children. |
| `bPlusTree.js` | B+-tree: all keys in leaves, leaves linked for range scans. The classic database index. |
| `bStarTree.js` | B*-tree: redistributes between siblings before splitting, keeping nodes fuller. |
| `countedBTree.js` | B-tree with subtree counts; supports order statistics. |
| `twoThreeTree.js` | B-tree of order 3: nodes have 2 or 3 children. |
| `twoThreeFourTree.js` | B-tree of order 4: nodes have 2, 3 or 4 children. |
| `mArySearchTree.js` | Generic m-ary search tree. |
| `lsmTree.js` | Log-Structured Merge tree: in-memory table + immutable sorted segments, compacted over time. |
| `fractalTree.js` | Fractal tree index: buffers messages in internal nodes to batch writes (simplified). |

## Concepts

- **Order / fanout**: maximum number of children per node. Higher fanout means lower height and fewer disk reads.
- **Disk-page alignment**: a B-tree node is sized to one page, so a node read is one I/O.
- **B+ vs. B**: B+ stores values only in leaves and links leaves; B-trees may store values in internal nodes.
- **Range scan**: B+ trees shine because leaves are linked in key order.
- **Splits and merges**: when a node overflows it splits; when it underflows it borrows/merges with a sibling.
- **Write amplification**: one logical write can touch several pages during split/compaction.
- **LSM trade-off**: writes are sequential and fast, but reads may check multiple segments; background compaction controls read/write cost.
- **B-tree vs. LSM**: B-trees favor read latency and in-place updates; LSM trees favor write throughput.

## Complexity

| Operation | B-tree family | LSM tree |
| --- | --- | --- |
| Point lookup | `O(log_B n)` page reads | memtable + newest-to-oldest segments |
| Range scan | `O(log_B n + k)` | merge across segments |
| Insert | `O(log_B n)` + splits | append to memtable; flush/compact later |

## Where you meet these

- Relational databases (MySQL InnoDB, PostgreSQL indexes).
- Filesystems (NTFS, Btrfs, ext4 extent trees).
- Key-value stores (SQLite, RocksDB, LevelDB, Cassandra).
- Full-text and analytics engines (LSM + compaction).

## Run

```bash
node src/2026/trees/MultiwayAndDB/bTree.js
node src/2026/trees/MultiwayAndDB/bPlusTree.js
node src/2026/trees/MultiwayAndDB/lsmTree.js
```

These are teaching implementations. Real engines add concurrency control, WAL/journaling, checksums, compression, bloom filters and crash recovery.
