/**
 * https://neetcode.io/problems/sliding-window-maximum

You are given an array of integers nums and an integer k. There is a sliding window of size k that starts at the left edge of the array. The window slides one position to the right until it reaches the right edge of the array.
Return a list that contains the maximum element in the window at each step.
Example 1:

Input: nums = [1,2,1,0,4,2,6], k = 3
Output: [2,2,4,4,6]

Explanation: 
Window position            Max
---------------           -----
[1  2  1] 0  4  2  6        2
 1 [2  1  0] 4  2  6        2
 1  2 [1  0  4] 2  6        4
 1  2  1 [0  4  2] 6        4
 1  2  1  0 [4  2  6]       6
 */

const maxSlidingWindow = (nums = [], k) => {
  const output = [];
  let subArray = [];
  for (let i = 0; i < nums.length; i++) {
    subArray.push(nums[i]);
    if (subArray.length === k) {
      const max = Math.max(...subArray);
      output.push(max);
      subArray.shift();
    }
  }
  return output;
};

console.log(maxSlidingWindow([1, 2, 1, 0, 4, 2, 6], 3));
