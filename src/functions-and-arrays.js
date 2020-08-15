// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(array) {
  if (array.length === 0) {
    return null;
  } else if (array.length === 1) {
    return array[0];
  } else {
    return array.sort(function (a, b) {
      return b.length - a.length
    })[0];
  }

}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(prices) {
  let sum = 0;
  if (prices.length === 0) {
    return 0;
  } else if (prices.length === 1) {
    sum += prices[0];
  } else {
    prices.forEach(element => {
      sum += element;
    });
  }
  return sum;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(array) {
  let sum = 0;
  if (array.length === 0) {
    return null;
  } else {
    array.forEach(element => {
      sum += element;
    });
    return sum / array.length;
  }
}

//Progression 3.1: 
function add(mixedArr) {
  var sum = 0;
  if (mixedArr.length == 0)
    return 0;
  else {
    for (var i = 0; i < mixedArr.length; i++) {
      if (typeof (mixedArr[i]) == "number") {
        sum += mixedArr[i];
      } else if (typeof (mixedArr[i]) == "string") {
        var l = mixedArr[i].length;
        sum += l;
      } else if (typeof (mixedArr[i]) == "boolean") {
        var l = mixedArr[i] / 1;
        sum += l;
      } else
        throw "Unsupported data type sir or ma'am";

    }
  }
  return sum;
}

// Did you follow the naming convention as given in the progression??
//yes sir absolutely
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array) {
  let sum = 0;
  if (array.length === 0) {
    return null;
  } else {
    array.forEach(element => {
      sum += element.length;
    });
    return sum / array.length;
  }
}

// Progression 4.3: average of mixed array

function avg(mixedArr) {
  if (mixedArr.length == 0)
    return null;
  else {
    var sum = 0;

    for (var i = 0; i < mixedArr.length; i++) {
      if (typeof (mixedArr[i]) == "number") {
        sum += mixedArr[i];
      } else if (typeof (mixedArr[i]) == "string") {
        var l = mixedArr[i].length;
        sum += l;
      } else if (typeof (mixedArr[i]) == "boolean") {
        var l = mixedArr[i] / 1;
        sum += l;
      } else
        throw "Unsupported data type sir or ma'am";
    }
    var average = (sum / (mixedArr.length)).toFixed(2);
    console.log(average);
    return average;

  }
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

function uniqueArray(array) {
  let unique = [];
  if (array.length === 0) {
    return null;
  } else {
    array.forEach(element => {
      if (!unique.includes(element)) {
        unique.push(element);
      }
    });
    return unique;
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(array, element) {
  if (array.length === 0) {
    return null;
  } else {
    if (array.indexOf(element) === -1) {
      return false;
    } else {
      return true;
    }
  }

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

function howManyTimesElementRepeated(array, word) {
  let count = 0;
  if (array.length === 0) {
    return 0;
  } else {
    array.forEach(element => {
      if (element === word) {
        count++;
      }
    });
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
  let max = 0;
  let result;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if ((j - 3) >= 0) {
        result = matrix[i][j] * matrix[i][j - 1] *
          matrix[i][j - 2] * matrix[i][j - 3];
        if (max < result)
          max = result;
      }
      if ((i - 3) >= 0) {
        result = matrix[i][j] * matrix[i - 1][j] *
          matrix[i - 2][j] * matrix[i - 3][j];

        if (max < result)
          max = result;
      }
    }
  }
  return max;
}