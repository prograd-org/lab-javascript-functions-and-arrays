// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
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
  if (words == "") {
    return null;
  }
  let longWord = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longWord.length) {
      longWord = words[i];
    }
  }
  return longWord;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  var i;
  var sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

//Bonus
const mixedArr = [
  63,
  122,
  "audi",
  61,
  true,
  "volvo",
  "20",
  "lamborghini",
  38,
  156,
];

function add(mixedArr) {
  if (mixedArr == []) {
    return 0;
  }
  var i;
  var sum = 0;
  for (i = 0; i < mixedArr.length; i++) {
    sum = sum + mixedArr[i];
  }
  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  if (numbersAvg == "") {
    return null;
  }
  let result = 0;
  let sum = 0;
  for (var i = 0; i < numbersAvg.length; i++) {
    sum = sum + numbersAvg[i];
    result = sum / numbersAvg.length;
  }
  return result;
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
  if (wordsArr == "") {
    return null;
  }
  let result = 0;
  let sum = 0;
  for (var i = 0; i < wordsArr.length; i++) {
    sum = sum + wordsArr[i].length;
    result = sum / wordsArr.length;
  }
  return result;
}

//Bonus
function avg(mixedArr) {
  if (mixedArr == []) {
    return null;
  }
  let result = 0;
  let sum = 0;
  for (var i = 0; i < mixedArr.length; i++) {
    result = result + mixedArr[i];
    sum = result / mixedArr.length;
  }
  return sum;
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

var newArray = [];

function uniqueArray(wordsUnique) {
  if (wordsUnique.length == "") {
    return null;
  }
  var a = 0;
  for (i = 0; i < wordsUnique.length; i++) {
    if (newArray.indexOf(wordsUnique[i]) == -1) {
      newArray.push(wordsUnique[i]);
      a++;
    }
    if (a == wordsUnique.length) {
      return wordsUnique;
    }
  }
  return newArray;
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

function searchElement(array, word) {
  if (array.length == "") {
    return null;
  }
  for (var i = 0; i < array.length; i++) {
    if (word == array[i]) {
      var a = 1;
    }
  }
  if (a == 1) {
    return true;
  } else {
    return false;
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

function howManyTimesElementRepeated(wordsCount, word) {
  var count = 0;
  if (wordsCount.length == "") {
    return 0;
  }
  for (var i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] == word) {
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