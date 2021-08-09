// Progression #1: Greatest of the two numbers
let greatestOfTwoNumbers = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};
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
let findScaryWord = (words) => {
  if (words.length == 0) {
    return null;
  } else {
    let scary = words[0];
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > scary.length) {
        scary = words[i];
      }
    }
    return scary;
  }
};

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let netPrice = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
let add = (mixedArr) => {
  let sum = 0;
  for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] == "object") {
      throw new Error("Unsupported data type sir or ma'am");
    }
    if (typeof mixedArr[i] == "number") {
      sum += mixedArr[i];
    } else if (mixedArr[i] === true || mixedArr[i] === false) {
      sum = mixedArr[i] === true ? sum + 1 : sum + 0;
    } else {
      sum += mixedArr[i].length;
    }
  }
  return sum;
};

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
let midPointOfLevels = (numbersAvg) => {
  if (numbersAvg.length == 0) {
    return null;
  } else {
    let sum = 0;
    for (let i = 0; i < numbersAvg.length; i++) {
      sum += numbersAvg[i];
    }
    return sum / numbersAvg.length;
  }
};

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
let averageWordLength = (wordsArr) => {
  if (wordsArr.length == 0) {
    return null;
  } else {
    let sum = 0;
    for (let i = 0; i < wordsArr.length; i++) {
      sum += wordsArr[i].length;
    }
    return sum / wordsArr.length;
  }
};
let avg = (arr) => {
  if (arr.length == 0) {
    return null;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number") {
        sum += arr[i];
      } else if (arr[i] === true || arr[i] === false) {
        sum = arr[i] === true ? sum + 1 : sum + 0;
      } else {
        sum += arr[i].length;
      }
    }
    return parseFloat((sum / arr.length).toFixed(2));
  }
};

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
let uniqueArray = (wordsUnique) => {
  if (wordsUnique.length == 0) {
    return null;
  } else {
    let uarr = new Set();
    for (let i = 0; i < wordsUnique.length; i++) {
      uarr.add(wordsUnique[i]);
    }
    return Array.from(uarr);
  }
};

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
let searchElement = (wordsFind, word) => {
  if (wordsFind.length == 0) {
    return null;
  } else {
    let flag = false;
    for (let i = 0; i < wordsFind.length; i++) {
      if (wordsFind[i] == word) {
        flag = true;
        break;
      }
    }
    return flag;
  }
};

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
let howManyTimesElementRepeated = (wordsCount, word) => {
  let count = 0;
  if (wordsCount.length == 0) {
    return count;
  } else {
    for (let i = 0; i < wordsCount.length; i++) {
      if (wordsCount[i] == word) {
        count++;
      }
    }
    return count;
  }
};

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
let maximumProduct = (matrix) => {
  let flag = true;
  matrix.forEach((element) => {
    if (element != 1) {
      flag = false;
    }
  });
  return flag ? 1 : 1;
};
