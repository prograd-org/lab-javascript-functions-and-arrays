// Progression #1: Greatest of the two numbers
function greaterOfTwoNumbers(number1, number2) {
  if (number1 > number2)
    return number1;
  else
    return number2;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words) {
  let lengthy_word;
  maxlength = 0;
  if (words.length == 0)
    return null;
  for (var i = 0; i < words.length; i++) {
    var l = words[i].length;
    if (l > maxlength) {
      maxlength = l;
      lengthy_word = words[i];
    }
  }
  return lengthy_word;
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

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];


function getAvg(numbersAvg) {
  const total = numbersAvg.reduce((acc, c) => acc + c, 0);
  return total / numbersAvg.length;
}

const average = getAvg(numbersAvg);
console.log(average);

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function midPointOfLevels(numbersAvg) {
  var sum = 0;
  if (numbersAvg.length == 0)
    return null;
  for (var i = 0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i];
  }
  return sum / (numbersAvg.length);
}
//average word length
function averageWordLength(wordsArr) {
  var sum = 0;
  if (wordsArr.length == 0)
    return null;
  else {
    for (var i = 0; i < wordsArr.length; i++) {
      sum += wordsArr[i].length;
    }
    return sum / (wordsArr.length);


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
const uniq = [...new Set(wordsUnique)];
uniq;

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

var a = wordsFind.indexOf("subset");
console.log(a);

// Progression #7: Count repetition

function howManyTimesElementRepeated() {
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

  wordsCount.sort();

  var current = null;
  var count = 0;
  for (var i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] != current) {
      if (count > 0) {
        document.write(current + count + ' times<br>');
      }
      current = wordsCount[i];
      count = 1;
    } else {
      count++;
    }
  }
  if (count > 0) {
    document.write(current + count + ' times');
  }

}

var howManyTimesElementRepeated = {};
wordsCount.forEach(function (x) { howManyTimesElementRepeated[x] = (howManyTimesElementRepeated[x] || 0) + 1; });
document.write(howManyTimesElementRepeated);

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
