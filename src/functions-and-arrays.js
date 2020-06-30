// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num_1, num_2) {
  if (num_1 > num_2) {
    console.log(num_1);
  } else if (num_2 > num_1) {
    console.log(num_2);
  } else {
    console.log("Equal");
  }

}
greatestOfTwoNumbers(2, 5);



// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {
  let word = "";
  for (let i = 0; i < words.length; i++) {
    if (word.length < words[i].length) {
      word = words[i];
    }
  }
  console.log(word);

}
findScaryWord(words);




// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log("Net price : " + " " + total);

}
netPrice(numbers);


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  var sum = 0;
  for (var j = 0; j < numbersAvg.length; j++) {
    sum = sum + numbersAvg[j];
  }
  var avg = sum / (numbersAvg.length);

  console.log("Average of array of numbers : " + " " + avg);
}
midPointOfLevels(numbersAvg);


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if (words.length > 0) {
    var average = wordsArr.join('').length / wordsArr.length;
    console.log("Average of array of strings :" + " " + average);
  } else {
    console.log("ignore");
  }

}

averageWordLength(wordsArr);

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

function uniqueArray(wordsUnique) {
  if (wordsUnique.length > 0) {
    let unique = [...new Set(wordsUnique)];
    console.log(unique);
  } else {
    console.log("ignore");
  }
}

uniqueArray(wordsUnique);

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind) {
  var element_found = "subset";

  for (var k = 0; k < wordsFind.length; k++) {
    if (wordsFind[k].match(element_found)) {
      console.log("true");
      break;

    } else {
      console.log("false");
    }
  }

}

searchElement(wordsFind);

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

function howManyTimesElementRepeated(wordsCount) {
  var count = {};
  wordsCount.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  console.log(count);
}
howManyTimesElementRepeated(wordsCount);

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