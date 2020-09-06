// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b) return a;
  else return b;
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

function findScaryWord(arr) {
  var lgth = 0;
  var longest;

  if (arr.length == 0) {
    return null;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest = arr[i];
      }
    }
    return longest;
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function add(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] == "number") sum += numbers[i];
    else if (typeof numbers[i] == "string") {
      sum += numbers[i].length;
    } else if (typeof numbers[i] == "boolean") {
      if (numbers[i] == true) {
        sum += 1;
      }
    } else {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return sum;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(num) {
  var sum = 0;
  var mid;

  if (num.length == 0) {
    return null;
  } else {
    for (var i = 0; i < num.length; i++) {
      sum += num[i];
    }
    mid = sum / num.length;

    return mid;
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

function averageWordLength(wordsArr) {
  if (wordsArr.length == 0) {
    return null;
  } else {
    var total_len = 0;
    for (var i = 0; i < wordsArr.length; i++) {
      total_len += wordsArr[i].length;
    }

    return total_len / wordsArr.length;
  }
}

function avg(numbers) {
  if (numbers.length == 0) {
    return null;
  } else {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] == "number") sum += numbers[i];
      else if (typeof numbers[i] == "string") {
        sum += numbers[i].length;
      } else if (typeof numbers[i] == "boolean") {
        if (numbers[i] == true) {
          sum += 1;
        }
      }
    }
    return Number((sum / numbers.length).toFixed(2));
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
  if (arr.length == 0) {
    return null;
  } else {
    return Array.from(new Set(arr));
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
  if (arr.length == 0) {
    return null;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == word) {
        return true;
      }
    }
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

function howManyTimesElementRepeated(arr, word) {
  var count = 0;
  if (arr.length == 0) {
    return 0;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == word) {
        count += 1;
      }
    }
    return count;
  }
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

function maximumProduct(arr) {
  var n = 10;

  var max = 0,
    result;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (j - 3 >= 0) {
        result = arr[i][j] * arr[i][j - 1] * arr[i][j - 2] * arr[i][j - 3];
        if (max < result) max = result;
      }

      if (i - 3 >= 0) {
        result = arr[i][j] * arr[i - 1][j] * arr[i - 2][j] * arr[i - 3][j];

        if (max < result) max = result;
      }

      if (i - 3 >= 0 && j - 3 >= 0) {
        result =
          arr[i][j] * arr[i - 1][j - 1] * arr[i - 2][j - 2] * arr[i - 3][j - 3];

        if (max < result) max = result;
      }

      if (i - 3 >= 0 && j - 1 <= 0) {
        result =
          arr[i][j] * arr[i - 1][j + 1] * arr[i - 2][j + 2] * arr[i - 3][j + 3];

        if (max < result) max = result;
      }
    }
  }

  return max;
}
