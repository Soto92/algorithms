const findAwfulCandy = (prisoners, candies, start): number => {
    if (prisoners > candies) {
        if (start === prisoners) {
            return candies + start - prisoners - 1
        }
        return candies - start
    } else {
        const result = (candies % prisoners) + start - 1
        return result === 0 ? prisoners : result
    }
}

console.log(findAwfulCandy(7, 4, 1))
console.log(findAwfulCandy(3, 5, 1))
console.log(findAwfulCandy(3, 3, 1))
console.log(findAwfulCandy(5, 2, 5))