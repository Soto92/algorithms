// Challenge Rotate Array  https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150

function rotate(nums: number[], k: number): void {
    function reverse(nums: number[], start: number, end: number): void {
        while (start < end) {
            const temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    const n = nums.length;
    k = k % n;
    if (k === 0) return;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))