// Progression #1: Greatest of the two numbers

function greatestOfTwoNumbers(number1, number2) {
  if (number1 > number2 || number1 == number2) {
    return number1
  } else if (number2 > number1) {
    return number2
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

//Find the scary word
//should create a function named findScaryWord
function findScaryWord(array) {
  if (array.length == 0) {
    return null;
  }
  var longest = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  if (numbers.length == 0)
    return 0
  sum = 0
  for (let i = 0; i < numbers.length; i++)
    sum += numbers[i]

  return sum
}

// Progression #4: Calculate the average


// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(array) {
  if (array.length == 0)
    return null
  var sum = array.reduce((data, init) => {
    return data + init
  })

  return sum / array.length
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function add(array) {
  if (array.length == 0)
    return 0;
  sum = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof (array[i]) == 'number')
      sum += array[i]
    else if (typeof (array[i]) == "string")
      sum += array[i].length
    else if (typeof (array[i]) == "boolean")
      sum += Number(array[i])
    else {
      throw new Error("Unsupported data type sir or ma'am")
    }
  }
  return sum
}


function averageWordLength(array) {
  if (array.length == 0)
    return null
  sum = 0
  for (data of array) {
    sum += data.length
  }
  return sum / array.length
}

function avg(array) {
  if (array.length == 0)
    return null
  sum = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof (array[i]) == 'number')
      sum += array[i]
    else if (typeof (array[i]) == "string")
      sum += array[i].length
    else if (typeof (array[i]) == "boolean")
      sum += Number(array[i])
    else {
      throw new Error("Unsupported data type sir or ma'am")
    }
  }
  return Number((sum / array.length).toFixed(2))
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
  if (array.length == 0)
    return null
  return [...new Set(array)]
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];


function searchElement(array, ele) {
  if (array.length == 0)
    return null
  return array.includes(ele)
}

function howManyTimesElementRepeated(array, ele) {
  if (array.length == 0)
    return 0
  count = 0
  for (data of array) {
    if (ele == data)
      count++
  }
  return count
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


function maximumProduct(array) {
  return (new Set([new Set(array)])).size;
}