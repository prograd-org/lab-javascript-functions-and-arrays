// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}

// Progression #2: The lengthy word

function findScaryWord(words) {
  let lengthy_word;
  maxlength = 0;
  if (words.length == 0) return null;
  for (var i = 0; i < words.length; i++) {
    var largest_Word = words[i].length;
    if (largest_Word > maxlength) {
      maxlength = largest_Word;
      lengthy_word = words[i];
    }
  }
  return lengthy_word;
}

// Progression #3: Net Price
const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];

function netPrice(price) {
  var sum = 0;
  for (var i = 0; i < price.length; i++) {
    sum += price[i];
  }
  return sum;
}

// Progression #4: Calculate the average
function add(arr) {
  var sum = 0;
  if (arr.length == 0) return 0;
  else {
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number") {
        sum += arr[i];
      } else if (typeof arr[i] == "string") {
        var l = arr[i].length;
        sum += l;
      } else if (typeof arr[i] == "boolean") {
        var l = arr[i] / 1;
        sum += l;
      } else throw Error;
    }
  }
  return sum;
}

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  var sum = 0;
  if (numbersAvg.length == 0) return null;
  for (var i = 0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i];
  }
  return sum / numbersAvg.length;
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

function averageWordLength(wordsArr) {
  if (wordsArr.length == 0) {
    return null;
  } else {
    var sum = 0;
    for (var i = 0; i < wordsArr.length; i++) {
      sum += wordsArr[i].length;
    }
    return sum / wordsArr.length;
  }
}

// Progression #4.3 (Bonus): A generic `avg()` function
function avg(mixedArr) {
  if (mixedArr.length == 0) return null;
  else {
    var sum = 0;
    for (var i = 0; i < mixedArr.length; i++) {
      if (typeof mixedArr[i] == "number") {
        sum += mixedArr[i];
      } else if (typeof mixedArr[i] == "string") {
        var l = mixedArr[i].length;
        sum += l;
      } else if (typeof mixedArr[i] == "boolean") {
        var l = mixedArr[i];
        sum += l;
      } else throw Error;
    }
    var average = parseInt(sum / mixedArr.length);
    return average;
  }
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
// The filter method creates a new array of elements that pass the conditional we provide. And any element that fails or returns false, it will not be in the filtered array.
function uniqueArray(wordsUnique) {
  if (wordsUnique.length == 0) {
    return null;
  }
  return wordsUnique.filter(
    (value, index) => wordsUnique.indexOf(value) === index
  );
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

function searchElement(wordsFind, element) {
  if (wordsFind.length == 0) return null;
  for (var i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i] === element) return true;
  }
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

function howManyTimesElementRepeated(wordsCount, element) {
  if (wordsCount.length == 0) return 0;
  var counter = 0;
  for (var i = 0; i < wordsCount.length; i++)
    if (wordsCount[i] == element) counter++;
  return counter;
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
  var max = 0;
  var result;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (j - 3 >= 0)
        result =
          matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
      if (max < result) max = result;
    }
    if (i - 3 >= 0) {
      result =
        matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j];
      if (max < result) max = result;
    }
  }
  return max;
}

function maximumProductOfDiagonals(matrix) {
  var max = 0;
  var result;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (j - 3 >= 0 && i - 3 >= 0) {
        result =
          matrix[i][j] *
          matrix[i - 1][j - 1] *
          matrix[i - 2][j - 2] *
          matrix[i - 3][j - 3];
        if (max < result) max = result;
      }
    }
  }
  return max;
}
