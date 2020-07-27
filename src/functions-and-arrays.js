// Progression #1: Greatest of the two numbers

function greatestOfTwoNumbers(n1, n2) {
  if (n1 >= n2) {
    return n1;
  }
  else {
    return n2;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {
  if (words == "") {
    return null;
  }
  var max = [];
  for (let i = 0; i < words.length; i++) {
    max.push(words[i].length);
  }
  var scaryWord = Math.max(...max);
  var ind = max.indexOf(scaryWord);

  return words[ind];
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(prices) {
  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  return sum;
}

function add(prices) {
  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
    if (typeof (prices[i]) === "object") {
      throw Error("Unsupported data type sir or ma'am");
    }
    else if (typeof (prices[i]) == "string") {
      sum += prices[i].length;
      console.log(prices[i], prices[i].length, sum);
    }
    else if (typeof (prices[i]) == "boolean") {
      if (prices[i] == true) {
        sum += 1;
        console.log(prices[i], 1, sum);
      }
    }
    else {
      sum += prices[i];
      console.log(prices[i], sum);
    }
  }
  return sum;
}

const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbers) {

  if (numbers == "") {
    return null;
  }
  var mid = add(numbers) / numbers.length;
  return mid;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  if (words == "") {
    return null;
  }
  var mid = add(words) / words.length;
  return mid;
}

function avg(words) {
  if (words == "") {
    return null;
  }
  var mid = add(words) / words.length;
  return parseFloat(mid.toFixed(2), 10);
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

function removeElement(array, elem, num) {
  var index = array.indexOf(elem, num);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

function uniqueArray(words) {
  if (words == "") {
    return null;
  }
  for (var i = 0; i < words.length; i++) {
    while (words.indexOf(words[i], i + 1) != -1) {
      words = removeElement(words, words[i], i + 1);
    }
  }
  return words;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(words, word) {
  if (words == "") {
    return null;
  }
  for (let i = 0; i <= words.length; i++) {
    if (words[i] == word) {
      return true;
    }
  }
  return false;
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

function howManyTimesElementRepeated(words, word) {
  if (words == "") {
    return 0;
  }
  var count = 0;
  for (let i = 0; i <= words.length; i++) {
    if (words[i] == word) {
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
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {
  var dim = [matrix[0].length, matrix.length];
  var k = 0;
  var product = [];

  for (var i = 0; i < matrix[0].length - 3; i++){
    for (var j = 0; j < matrix.length - 3; j++){
      product[k] = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
      k++;
    }
  }

  for (var i = 0; i < matrix[0].length - 3; i++) {
    for (var j = 0; j < matrix.length - 3; j++) {
      product[k] = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j] * matrix[i+3][j];
      k++;
    }
  }

  product = product.sort();

  for (var i = 0; i < product.length; i++){
    console.log(product[i]);
  }
  return product[product.length - 1];

}