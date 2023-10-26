// Remove Duplicates from Sorted Array II
// Challenge https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) {
        return nums.length;
    }
    let count = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[count - 2]) {
            nums[count] = nums[i];
            count += 1;
        }
    }
    return count;
}
