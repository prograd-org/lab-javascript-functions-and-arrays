// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b) return a;
  else return b;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words) {
  let max = 0,
    res = null;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;

      res = words[i];
    }
  }

  return res;
}
// Progression #3: Net Price
const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
function netPrice(prices) {
  let sum = 0;

  for (let j = 0; j < prices.length; j++) {
    sum += prices[j];
  }

  return sum;
}
//Progression #3.1 (Bonus): A generic `sum()` function
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr) {
  let sum = 0;

  for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] == "number") sum += mixedArr[i];
    else if (typeof mixedArr[i] == "string") sum += mixedArr[i].length;
    else if (typeof mixedArr[i] == "boolean") {
      if (mixedArr[i] == true) sum++;
    } else {
      throw new Error("Invalid");
    }
  }

  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg) {
  if (numbersAvg.length == 0) return null;

  let sum = 0;

  for (let i = 0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i];
  }

  let x = numbersAvg.length;

  return sum / x;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr) {
  if (wordsArr.length == 0) return null;

  let sum = 0;

  for (let i = 0; i < wordsArr.length; i++) {
    sum = sum + wordsArr[i].length;
  }
  let x= wordsArr.length;
  return sum / x;
}
//Progression #4.3 (Bonus): A generic `avg()` function
const mixedAr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg(mixedAr) {
  if (mixedAr.length == 0) return null;

  let sum = 0;

  for (let i = 0; i < mixedAr.length; i++) {
    if (typeof mixedAr[i] == "number") sum += mixedAr[i];
    else if (typeof mixedAr[i] == "string") sum += mixedAr[i].length;
    else if (typeof mixedAr[i] == "boolean") {
      if (mixedAr[i] == true) sum++;
    } else {
      throw new Error("Invalid");
    }
  }
  sum = sum / mixedAr.length;
  return Math.round((sum + Number.EPSILON) * 100) / 100;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique) {
  if (wordsUnique.length == 0) return null;

  unique = [...new Set(wordsUnique)];

  return unique;
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, word) {
  if (wordsFind.length == 0) return null;

  let res = false;

  for (let i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i] == word) res = true;
  }

  return res;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount, word) {
  let count = 0;

  for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] == word) count++;
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
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix) {
  let prod = 0,
    max = 0;

  for (let i = 0; i < 7; i++) {
    for (let y = 0; y < 7; y++) {
      prod =
        matrix[i][y] * matrix[i][y + 1] * matrix[i][y + 2] * matrix[i][y + 3];

      if (prod > max) max = prod;
    }
  }

  for (let y = 0; y < 7; y++) {
    for (let i = 0; i < 7; i++) {
      prod =
        matrix[i][y] * matrix[i + 1][y] * matrix[i + 2][y] * matrix[i + 3][y];

      if (prod > max) max = prod;
    }
  }

  return max;
}