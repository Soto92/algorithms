import { calculateMinimumHP } from '../../../2025/DungeonGameAlg/DFS';

describe('calculateMinimumHP', () => {
  it('handles example 1', () => {
    const dungeon = [
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5]
    ];
    expect(calculateMinimumHP(dungeon)).toBe(7);
  });

  it('handles all positive values', () => {
    const dungeon = [
      [2, 3, 1],
      [1, 2, 1],
      [1, 1, 1]
    ];
    expect(calculateMinimumHP(dungeon)).toBe(1);
  });

  it('handles all negative values', () => {
    const dungeon = [
      [-2, -3, -3],
      [-5, -10, -1],
      [-10, -30, -5]
    ];
    expect(calculateMinimumHP(dungeon)).toBe(15);
  });

  it('handles single cell', () => {
    expect(calculateMinimumHP([[0]])).toBe(1);
    expect(calculateMinimumHP([[-5]])).toBe(6);
    expect(calculateMinimumHP([[5]])).toBe(1);
  });

  /* Ignored because of performance issues
    //It explores all possible paths
    //- Stack overflow or RangeError due to deep recursion.
    //- Excessive computation time (practically infinite for 1000x1000).
    //- Redundant calculations for overlapping subproblems.
  it('throws RangeError for all negative values in 1000x1000', () => {
    // Create a 1000x1000 dungeon filled with -1
    const dungeon = Array.from({ length: 1000 }, () =>
      Array.from({ length: 1000 }, () => -1)
    );
    expect(calculateMinimumHP(dungeon)).toBe(2000);
  });
  */
});