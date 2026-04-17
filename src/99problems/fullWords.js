/**
 * P95 (**) English number words
 * Write a predicate full_words/1 to print a number in full words.
 * Example: 175 -> one-seven-five.
 */

function fullWords(num) {
  const words = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  return num
    .toString()
    .split("")
    .map((digit) => words[digit] || digit)
    .join("-");
}
module.exports = { fullWords };
