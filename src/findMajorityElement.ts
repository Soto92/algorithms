//https://leetcode.com/problems/majority-element/submissions/?envType=study-plan-v2&envId=top-interview-150

const majorityElement = (nums: number[]): number => {
    let majority: number = nums[0];
    let count: number = 1;
    for (let i = 1; i < nums.length; i++) {
        console.log(count)
        if (count === 0) {
            majority = nums[i];
            count = 1;
        } else if (nums[i] === majority) {
            count++;
        } else {
            count--;
        }
    }
    return majority;
};

console.log(majorityElement([2, 2, 1, 1, 1]))