// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
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
  var len = 0;
  var word;
  if (words.length <= 0) return null;
  else {
    words.forEach((value) => {
      if (len < value.length) {
        len = value.length;
        word = value;
      }
    });
    return word;
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(num) {
  if (num.length <= 0) return 0;
  else {
    var total = 0;

    num.forEach((value) => {
      total = total + value;
    });
    return total;
  }
}
//Progression #3.1 (Bonus):
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
  var sum = 0;
  if (mixedArr.length <= 0) return null;
  else {
    mixedArr.forEach((value) => {
      if (typeof value == "object") throw "Unsupported data type sir or ma'am";
      if (typeof value == "string") value = value.length;
      else if (typeof value == "boolean") {
        if (value == true) value = 1;
        else value = 0;
      }

      sum = sum + value;
    });
    return sum;
  }
}
function avg(mixedArr) {
  var sum = 0;
  if (mixedArr.length <= 0) return null;
  else {
    mixedArr.forEach((value) => {
      if (typeof value == "string") value = value.length;
      else if (typeof value == "boolean") {
        if (value == true) value = 1;
        else value = 0;
      }

      sum = sum + value;
    });
    return parseFloat((sum / mixedArr.length).toFixed(2));
  }
}

// Progression #4: Calculate the average

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr) {
  var sum = 0;
  if (arr.length <= 0) return null;
  else {
    arr.forEach((value, index) => {
      sum = sum + value;
    });
    return sum / arr.length;
  }
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

function averageWordLength(arr) {
  var sum = 0;
  if (arr.length <= 0) return null;
  else {
    arr.forEach((value) => {
      sum += value.length;
    });
    return sum / arr.length;
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

function uniqueArray(arr) {
  var uni = [];

  var id;
  if (arr.length == 0) return null;
  else {
    arr.forEach((value) => {
      id = arr.indexof(value);
      if (id == -1) uni.push(value);
    });
    return uni;
  }
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
function searchElement(arr, word) {
  var set;
  if (arr.length <= 0) return null;
  else {
    arr.forEach((value) => {
      if (value == word) set = true;
    });
    if (set) return true;
    else return false;
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
function howManyTimesElementRepeated(arr, word) {
  var set = 0;
  arr.forEach((value) => {
    if (value == word) set++;
  });
  return set;
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
function maximumProduct(matrix) {}
