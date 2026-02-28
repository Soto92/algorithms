/**
P27 (**) Group the elements of a set into disjoint subsets.
a) In how many ways can a group of 9 people work in 3 disjoint subgroups of 2, 3 and 4 persons?
b) Generalize the above predicate in a way that we can specify a list of group sizes and the predicate will return a list of groups.

Example:
?- group([aldo,beat,carla,david,evi,flip,gary,hugo,ida],[2,2,5],Gs).
Gs = [[aldo,beat],[carla,david],[evi,flip,gary,hugo,ida]]
...
 */

function group(list, sizes) {
  if (sizes.length === 0) return [[]];
  const [n, ...restSizes] = sizes;

  function getCombinationsWithRemainder(k, arr) {
    if (k === 0) return [{ selection: [], remainder: arr }];
    if (arr.length === 0) return [];
    const [head, ...tail] = arr;

    const withHead = getCombinationsWithRemainder(k - 1, tail).map(
      ({ selection, remainder }) => ({
        selection: [head, ...selection],
        remainder: remainder,
      }),
    );

    const withoutHead = getCombinationsWithRemainder(k, tail).map(
      ({ selection, remainder }) => ({
        selection: selection,
        remainder: [head, ...remainder],
      }),
    );

    return [...withHead, ...withoutHead];
  }

  return getCombinationsWithRemainder(n, list).flatMap(
    ({ selection, remainder }) =>
      group(remainder, restSizes).map((subGroup) => [selection, ...subGroup]),
  );
}

function group3(list) {
  return group(list, [2, 3, 4]);
}
