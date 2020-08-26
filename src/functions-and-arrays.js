// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  }
  return number1;
}
// Progression #2: The lengthy word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findScaryWord(words) {
  if (!words.length) {
    return null;
  }

  let longestWord = "";
  let numberOfCharacters = 0;

  for (let word of words) {
    if (word.length > numberOfCharacters) {
      longestWord = word;
      numberOfCharacters = longestWord.length;
    }
  }
  return longestWord;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(prices) {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  return sum;
}

// Progression #3.1 (Bonus): A generic sum() function
function add(list) {
  let sum = 0;

  for (let item of list) {
    if (typeof item == "string") {
      sum += item.length;
    } else if (typeof item == "number" || typeof item == "boolean") {
      sum += item;
    } else {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }

  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(list) {
  const avg = add(list) / list.length;
  if (avg) {
    return avg;
  }
  return null;
}

// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(list) {
  return midPointOfLevels(list);
}

// Progression #4.3 (Bonus): A generic avg() function
function avg(list) {
  let avg = midPointOfLevels(list);
  if (avg) {
    return parseFloat(avg.toFixed(2));
  }
  return avg;
}

// Progression #5: Unique arrays
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
  "flour",
];

function uniqueArray(list) {
  let uniqueIndex = [];
  for (let item of list) {
    let index = list.indexOf(item);
    if (uniqueIndex.indexOf(index) == -1) {
      uniqueIndex.push(index);
    }
  }

  if (!uniqueIndex.length) {
    return null;
  }
  let uniqueList = [];

  for (let index of uniqueIndex) {
    uniqueList.push(list[index]);
  }
  return uniqueList;
}

// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function searchElement(list, search) {
  if (!list.length) {
    return null;
  }
  for (let word of list) {
    if (word == search) {
      return true;
    }
  }
  return false;
}

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
  "matter",
];

function howManyTimesElementRepeated(list, search) {
  let count = 0;
  for (let item of list) {
    if (item == search) {
      count++;
    }
  }
  return count;
}

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
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];

function maximumProduct(matrix) {
  let result = 0;

  for (let i = 0; i <= matrix.length - 4; i++) {
    let product1 = 1;
    let product2 = 1;
    for (let k = 0; k < matrix[0].length; k++) {
      // horizontaly
      for (let j = k; j <= k + 3; j++) {
        if (matrix[i][j]) {
          product1 *= matrix[i][j];
        }
      }

      // vertically
      for (let j = 0; j <= 3; j++) {
        product2 *= matrix[i + j][k];
        console.log(matrix[i + j][k]);
      }

      if (product1 > product2) {
        result = product1;
      } else {
        result = product2;
      }
    }
  }
  return result;
}

// Progression #8.1 (Bonus): Product of diagonals
function maximumProductOfDiagonals(matrix) {
  let result = 0;

  for (let i = 0; i <= matrix.length - 4; i++) {
    let product =
      matrix[i][i] *
      matrix[i + 1][i + 1] *
      matrix[i + 2][i + 2] *
      matrix[i + 3][i + 3];

    if (product > result) {
      result = product;
    }
  }

  for (let i = 0; i <= matrix.length - 4; i++) {
    let product = 1;
    count = 0;
    while (count < 4) {
      product *= matrix[i + count][[matrix[0].length - 1] - (i + count)];
      count++;
    }
    if (product > result) {
      result = product;
    }
  }

  return result;
}
