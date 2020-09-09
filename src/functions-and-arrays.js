// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
greatestOfTwoNumbers(2, 1);

// Progression #2: The lengthy word
function findScaryWord(array) {
  var long = "";
  if (array.length == 0) {
    return null;
  }
  array.forEach(function (word) {
    if (word.length > long.length) {
      long = word;
    }
  });
  return long;
}
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
var word = findScaryWord(words);
console.log(word);

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(cost) {
  let sum = 0;
  if (cost.length == 0) {
    return 0;
  }
  cost.forEach(function (num) {
    sum = sum + num;
  });
  return sum;
}
var num = netPrice(numbers);
console.log(num);
//bonus(3)

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

function add(array) {
  let sum = 0;
  if (array.length == 0) {
    return 0;
  }
  array.forEach(function (x) {
    if (typeof x == "string") {
      var s = x.length;
      sum = sum + s;
    }
    if (typeof x == "number") {
      sum = sum + x;
    }
    if (typeof x == "boolean") {
      if (x == true) {
        sum = sum + 1;
      }
    }
    if (typeof x == "array" || typeof x == "object") {
      throw "Error: Unsupported data type sir or ma'am";
    }
  });

  return sum;
}
console.log(add(mixedArr));

// Progression #4: Calculate the average
const levels = [22, 16, 9, 10, 7, 14, 11, 9];

function midPointOfLevels(x) {
  var sum = 0;
  if (x.length == 0) {
    return null;
  }
  x.forEach(function (num) {
    sum = sum + num;
  });
  var average = sum / x.length;
  return average;
}
console.log(midPointOfLevels(levels));

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageWordLength(x) {
  var sum = 0;
  var average = 0;
  if (x.length == 0) {
    return null;
  }
  x.forEach(function (num) {
    sum = sum + num;
    average = (average + sum) / x.length;
    return average;
  });
}
console.log(averageWordLength(numbersAvg));

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

function avg(arr) {
  if (arr.length == 0) {
    return null;
  }
  var sum = 0;
  arr.forEach(function (xx) {
    if (typeof xx == "string") {
      var s = xx.length;
      sum = sum + s;
    }
  });
  var average = sum / arr.length;
  return average;
}
var a = avg(wordsArr);
console.log(a);
//4.3
const mixedAr = [
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

function avg(ary) {
  let sum = 0;
  let average;
  if (ary.length == 0) {
    return null;
  }
  ary.forEach(function (x) {
    if (typeof x == "string") {
      var s = x.length;
      sum = sum + s;
    }
    if (typeof x == "number") {
      sum = sum + x;
    }
    if (typeof x == "boolean") {
      if (x == true) {
        sum = sum + 1;
      }
    }
  });
  average = sum / ary.length;
  return average;
}
console.log(avg(mixedAr));

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

function uniqueArray(ar) {
  if (ar.length == 0) {
    return null;
  }
  let uniquified = [];
  ar.forEach(function (abc) {
    if (uniquified.indexOf(abc) == -1) {
      uniquified.push(abc);
    }
  });
  return uniquified;
}
console.log(uniqueArray(wordsUnique));
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
function searchElement(arr, x) {
  if (arr.length == 0) {
    return null;
  }
  var boo = false;
  arr.forEach(function (y) {
    if (x === y) boo = true;
  });
  return boo;
}
console.log(searchElement(wordsFind, "machine"));

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
function howManyTimesElementRepeated(arr, x) {
  if (arr.length == 0 || arr.indexOf(x) == -1) {
    return 0;
  }
  var count = 0;
  arr.forEach(function (y) {
    if (x === y) {
      count++;
    }
  });
  return count;
}
console.log(howManyTimesElementRepeated(wordsCount, "matter"));
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
function maximumProduct(array) {
  if (array.length == 0) {
    return null;
  }
  let arr = array.flat();
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] == 1) {
      return 1;
    }
  }
}
console.log(maximumProduct(matrix));
