// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}
greatestOfTwoNumbers();

// Progression #2: The lengthy word
function findScaryWord(words) {

  var lgth = 0;
  var longest;

  if (words.length > 0) {
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > lgth) {
        lgth = words[i].length;
        longest = words[i];
      }
    }
    return longest;
  } else {
    return null;
  }
}


// Progression #3: Net Price

function netPrice(prices) {

  var total = 0;
  for (var i = 0; i < prices.length; i++) {

    total += prices[i];
  }
  return total;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
function midPointOfLevels(levels) {
  var total = 0;
  if (levels.length > 0) {
    for (var i = 0; i < levels.length; i++) {

      total += levels[i];
    }
    return total / levels.length;
  } else {
    return null;
  }
}

// Progression 4.2: Array of strings

function averageWordLength(items) {

  if (items.length > 0) {
    var average = items.join('').length / items.length

    return average;
  } else {
    return null;
  }
}



// Progression #5: Unique arrays

function uniqueArray(uniques) {
  if (uniques.length > 0) {
    let unique = [...new Set(uniques)];
    return unique;
  } else {
    return null;
  }
}







const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour"
];

// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];