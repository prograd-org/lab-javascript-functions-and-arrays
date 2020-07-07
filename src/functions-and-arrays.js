// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
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

function findScaryWord(Arr) {
  var elementLengths = [];
  if (Arr.length == 0) {
    return null;
  }
  for (i = 0; i < Arr.length; i++) elementLengths[i] = Arr[i].length;
  elementLengths.sort();
  for (i = 0; i < Arr.length; i++) {
    if (elementLengths[elementLengths.length - 1] == Arr[i].length) {
      return Arr[i];
    }
  }
}

findScaryWord(words);

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(arr3) {
  var sum = 0;
  if (arr3.length == 0) {
    return 0;
  }
  for (i = 0; i < arr3.length; i++) {
    sum = sum + arr3[i];
  }
  return sum;
}

netPrice(numbers);

function add(arr31) {
  var sum = 0;
  if (arr31.length == 0) {
    return 0;
  }
  for (i = 0; i < arr31.length; i++) {
    if (typeof arr31[i] === "object") {
      throw Error("Unsupported data type sir or ma'am");
    } else if (typeof arr31[i] === "string") {
      value = arr31[i].length;
    } else if (arr31[i] === true) {
      value = 1;
    } else if (arr31[i] === false) {
      value = 0;
    } else if (isNaN(arr31[i]) === false) {
      value = arr31[i];
    }
    sum = sum + value;
  }
  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(arr41) {
  var total = 0;
  if (arr41.length == 0) {
    return null;
  }
  for (i = 0; i < arr41.length; i++) {
    total = total + arr41[i];
  }
  sum = total / arr41.length;
  return sum;
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

function averageWordLength(arr42) {
  var total = 0;
  if (arr42.length == 0) {
    return null;
  }
  for (i = 0; i < arr42.length; i++) {
    total = total + arr42[i].length;
  }
  sum = total / arr42.length;
  return sum;
}

//avg of mixed ele
function avg(arr31) {
  var sum = 0;
  if (arr31.length == 0) {
    return null;
  }
  for (i = 0; i < arr31.length; i++) {
    if (typeof arr31[i] === "string") {
      value = arr31[i].length;
    } else if (isNaN(arr31[i]) === false) {
      value = arr31[i];
    } else if (arr31[i] === true) {
      value = 1;
    } else if (arr31[i] === false) {
      value = 0;
    }
    sum = sum + value;
  }
  sum = sum / arr31.length;
  sum = sum * 100;
  sum = Math.trunc(sum);
  sum = sum / 100;
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

function uniqueArray(arr5) {
  var x,
    n = 0;
  var str = "";
  var arr = [];

  if (arr5.length == 0) {
    return null;
  }
  for (i = 0; i < arr5.length; i++) {
    var str = arr5[i];
    x = arr5.indexOf(str, i + 1);
    if (x < 0) {
      arr[n] = arr5[i];
      n = n + 1;
    } else {
      arr[n] = arr5[i];
      n = n + 1;
      arr5[x] = "";
    }
  }
  return arr.filter((arr) => arr.length > 1);
}

uniqueArray(wordsUnique);
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

function searchElement(arr6, word) {
  if (arr6.length == 0) {
    return null;
  }
  for (i = 0; i < arr6.length; i++) {
    var x = word.localeCompare(arr6[i]);
    if (x == 0 || x == 1 || x == -1) {
      return true;
    } else {
      return false;
    }
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

function howManyTimesElementRepeated(arr7, word) {
  var words = "";
  words = words + word;
  var count = 0;
  var str = "";
  if (arr7.length == 0) {
    return 0;
  }
  // arr7.sort();
  for (i = 0; i < arr7.length; i++) {
    str = arr7[i];
    //var x = 0;
    var x = words.localeCompare(str);
    if (str.length == words.length && x == 0) {
      //console.log(words)
      //console.log(str)
      console.log(x);
      console.log(arr7[i]);
      count = count + 1;
      //console.log(count);
    }
  }

  return count;
}

howManyTimesElementRepeated(wordsCount, "matter");

/* str.indexOf[0] == words.indexOf[0] &&
str.indexOf[arr7[i].length - 1] == words.indexOf[words.length - 1] &&
str.indexOf[Math.trunc(arr7[i].length / 2)] ==
  words.indexOf[Math.trunc(words.length / 2)]
  
 var x = words.localeCompare(str);
    if (str.length == words.length && (x == 0 || x == 1 || x == -1))
    x = arr7.indexOf(words, i);
    if (str.length == words.length && x > 0) { {*/
// Progression #8: Bonus

const matrix2 = [
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
  var dimensions = [matrix.length, matrix[0].length];
  Product = [];
  var k = 0;
  for (i = 0; i < matrix.length - 3; i++)
    for (j = 0; j < matrix[0].length - 3; j++) {
      Product[k] = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3]
      k = k + 1
      //console.log(Product[k])
    }

  for (i = 0; i < matrix.length - 3; i++)
    for (j = 0; j < matrix[0].length - 3; j++) {
      Product[k] = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j]
      k = k + 1
    }
  Product.sort();
  // console.log(Product);
  return Product[Product.length - 1];

}


maximumProduct(matrix);