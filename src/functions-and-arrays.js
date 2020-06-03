// Progression #1: Greatest of the two numbers
function greatestofTwonumbers(a, b) {
  if (a > b)
    return a;
  else
    return b;
}

function greaterOfTwoNumbers(a, b) {
  if (a > b)
    return a;
  else
    return b;
}

function maxOfTwoNumbers(a, b) {
  if (a > b)
    return a;
  else
    return b;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {
  var lenOfArray = words.length;
  var max_length = 0;
  if (lenOfArray == 0) {
    return null;
  }
  if (lenOfArray == 1) {
    return words[0];
  } else {
    for (let i = 0; i < lenOfArray; i++) {
      var wrd = words[i].length;
      if (wrd > max_length) {
        max_length = wrd;
        var lengthy_word = words[i];
      }
    }
    return lengthy_word;
  }
}
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  if (numbers.length == 1) {
    var sum = 0;
    return (sum = sum + numbers[0]);
  } else {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      var num = numbers[i];
      sum = sum + num;
    }
    return sum;
  }
}

function add(arr) {
  var sum = 0;
  var len_of_arr = arr.length;
  if (len_of_arr == 0) {
    return sum;
  }
  if (len_of_arr == 1) {
    return (sum = sum + arr[0]);
  }
  for (let i = 0; i < len_of_arr; i++) {

    if (typeof arr[i] == "string") {
      let len = arr[i].length;
      sum = sum + len;
    }
    if (typeof arr[i] == "boolean") {
      if (arr[i] == true) {
        sum = sum + 1;
      }
    }
    if (typeof arr[i] == "number") {
      sum = sum + arr[i];
    }
  }
  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(arr) {
  if (arr.length == 0) {
    return null;
  } else {
    var average = netPrice(arr);
    return average / arr.length;
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
  "palace"
];
// function averageWordLength(arr) {
//   var sum = 0;
//   if (arr.length == 0) {
//     return null;
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] == "boolean") {
//         var l = arr[i] / 1;
//         sum = sum + l;
//       } else {
//         sum = sum + arr[i].length;
//       }
//     }
//   }
//   var avWrL = sum / arr.length;
//   return avWrL;
// }

function averageWordLength(wordsArr) {
  var sum = 0;
  if (wordsArr.length == 0) return null;
  else {
    for (var i = 0; i < wordsArr.length; i++) {
      sum += wordsArr[i].length;
    }
    var x = sum / 7;
    return Math.round(x);
  }
}

function avg(arr) {
  var sum = 0;
  if (arr.length == 0) {
    return null;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "string") {
        let len = arr[i].length;
        sum = sum + len;
      } else if (typeof arr[i] == "boolean") {
        var l = arr[i] / 1;
        sum = sum + l;
      } else if (typeof arr[i] == "number") {
        sum = sum + arr[i];
      } else {
        throw exception(
          "Unsupported data type (object or array) present in the array"
        );
      }
    }
  }
  let avWrL = sum / arr.length;
  return Number(avWrL.toFixed(2));
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
  "flour"
];

function uniqueArray(array) {
  // var unique = [];
  if (array.length == 0) {
    return null;
  } else {
    return array.filter((a, b) => array.indexOf(a) === b);
  }
  // for (let i = 1; i < wordsUnique.length; i++) {

  //   // if (unique.length == 0) {
  //   //   unique = unique.push(wordsUnique[0]);
  //   // }
  //   // if (wordsUnique.indexOf(wordsUnique[i]) != unique.indexOf(unique[i])) {
  //   //   unique = unique.push(wordsUnique[i]);
  //   // }
  // }
  // return unique;
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
  "disobedience"
];

function searchElement(array, word) {
  if (array.length == 0) {
    return null;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == word) {
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
  "matter"
];

function howManyTimesElementRepeated(array, word) {
  var count = 0;
  if (array.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == word) {
        count = count + 1;
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
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {
  var max = 0;
  var result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if ((j - 3) >= 0) {
        result = matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
        if (result > max) {
          max = result;
        }
      }
      if ((i - 3) >= 0) {
        result = matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j];
      }
      if (result > max) {
        max = result;
      }
    }
  }
  return max;
}

function maximumProductOfDiagonals(matrix) {
  var max = 0;
  var res = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if ((i - 3) >= 0 && (j - 3) >= 0) {
        res = matrix[i][j] * matrix[i - 1][j - 1] * matrix[i - 2][j - 2] * matrix[i - 3][j - 3];
        if (res > max) {
          max = res;
        }
      }
      return max;
    }
  }
}