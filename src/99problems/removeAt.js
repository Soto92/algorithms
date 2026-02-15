/**
P20 (*) Remove the K'th element from a list.
Example:
?- remove_at(X,[a,b,c,d],2,R).
X = b
R = [a,c,d]
 */

function removeAtV1(list, k) {
  const idx = k - 1;
  if (idx < 0 || idx >= list.length)
    return { removed: undefined, list: [...list] };
  const newList = [...list];
  const [removed] = newList.splice(idx, 1);
  return { removed, list: newList };
}

function removeAtV2(list, k) {
  const idx = k - 1;
  const newList = [];
  let removed;
  for (let i = 0; i < list.length; i++) {
    if (i === idx) removed = list[i];
    else newList.push(list[i]);
  }
  return { removed, list: newList };
}
