/**
P18 (**) Extract a slice from a list.
Given two indices, I and K, the slice is the list containing the elements between the I'th and K'th element of the original list (both limits included). Start counting the elements with 1.

Example:
?- slice([a,b,c,d,e,f,g,h,i,k],3,7,L).
X = [c,d,e,f,g]
 */

function sliceV1(list, i, k) {
  return list.slice(i - 1, k);
}

function sliceV2(list, i, k) {
  const result = [];
  for (let idx = i - 1; idx < k && idx < list.length; idx++) {
    result.push(list[idx]);
  }
  return result;
}
