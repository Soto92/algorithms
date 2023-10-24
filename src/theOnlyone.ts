const solution = (list: number[]) => {
    let sum = 0
    list.forEach(element => {
        sum = sum ^ element
    });
    return sum
}

console.log(solution([2, 2, 7, 4, 4]))