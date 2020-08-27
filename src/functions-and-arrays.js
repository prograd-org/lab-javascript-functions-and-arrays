// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words) {
  if (words.length == 0) {
    return null
  }
  let longW = "";
  let noOfChar = 0;

  for (let word of words) {
    if (word.length > noOfChar) {
      longW = word;
      noOfChar = longW.length;
    }
  }
  return longW;
}


// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  if (!numbers.length) {
    return 0
  }
  let sum = 0
  for (let num of numbers) {
    sum += num
  }
  return sum
}

function add(numbersAvg) {
  if (!numbersAvg.length) {
    return 0
  }
  let sum = 0
  for (let num of numbersAvg) {
    if (typeof (num) == 'string') {
      sum += num.length
    }
    else if (typeof (num) == 'number' || typeof (num) == "boolean") {
      sum += num
    }
    else {
      throw new Error('Unsupported data type sir or ma\'am')
    }
  }
  return sum
}


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersArr) {
  let avg = add(numbersArr) / numbersArr.length
  if (avg) {
    return avg
  }
  return null
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr) {
  return midPointOfLevels(wordsArr)
}

function avg(arr) {
  let avg = midPointOfLevels(arr);
  if (avg) {
    return parseFloat(avg.toFixed(2));
  }
  return null;
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
function uniqueArray(arr) {

  let uniqueArr = []
  for (let i of arr) {
    let index = arr.indexOf(i)
    if (uniqueArr.indexOf(index) == -1) {
      uniqueArr.push(index)
    }
  }
  if (!uniqueArr.length) {
    return null
  }
  let uniqueArrList = [];

  for (let i of uniqueArr) {
    uniqueArrList.push(arr[i])
  }
  return uniqueArrList
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr, word) {
  if (!arr.length) {
    return null
  }
  for (let i of arr) {
    if (i == word) {
      return true
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
function howManyTimesElementRepeated(arr, search) {
  if (!arr.length) {
    return 0
  }
  let count = 0
  for (let i of arr) {
    if (i == search) {
      count += 1
    }
  }
  return count
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
  let result = 0;

  for (let i = 0; i <= matrix.length - 4; i++) {
    let P1 = 1;
    let P2 = 1;
    for (let k = 0; k < matrix[0].length; k++) {

      for (let j = k; j <= k + 3; j++) {
        if (matrix[i][j]) {
          P1 *= matrix[i][j];
        }
      }


      for (let j = 0; j <= 3; j++) {
        P2 *= matrix[i + j][k];
        console.log(matrix[i + j][k]);
      }

      if (P1 > P2) {
        result = P1;
      } else {
        result = P2;
      }
    }
  }
  return result;
}

function maximumProductOfDiagonals(matrix) {
  let result = 0;

  for (let i = 0; i <= matrix.length - 4; i++) {
    let product =
      matrix[i][i] *
      matrix[i + 1][i + 1] *
      matrix[i + 2][i + 2] *
      matrix[i + 3][i + 3];

    if (product > result) {
      result = product;
    }
  }

  for (let i = 0; i <= matrix.length - 4; i++) {
    let product = 1;
    count = 0;
    while (count < 4) {
      product *= matrix[i + count][[matrix[0].length - 1] - (i + count)];
      count++;
    }
    if (product > result) {
      result = product;
    }
  }

  return result;
}