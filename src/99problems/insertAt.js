/**
P21 (*) Insert an element at a given position into a list.
Example:
?- insert_at(alfa,[a,b,c,d],2,L).
L = [a,alfa,b,c,d]
 */

function insertAt(element, list, position) {
  // Note: Position is 1-based in the problem description
  const result = [...list];
  result.splice(position - 1, 0, element);
  return result;
}
