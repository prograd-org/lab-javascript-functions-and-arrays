// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(firstno, secondno) {
  if (firstno > secondno) {
    return firstno;
  } else {
    return secondno;
  }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];


function findScaryWord(words){
  let i , maxlen=0 , index = -1;
  if(words.length==0){
    return null;
  }
  else
  for( i=0 ; i < words.length ; i++ )
  {
    if(maxlen < words[i].length){
      maxlen = words[i].length;
      index = i;
    }
  }
  return words[index];
}

}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers){
  let i ,sum=0;
  for(i=0 ; i < numbers.length ; i++){ 
    sum = sum + numbers[i];
  }
  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];


function midPointOfLevels(num) {
  var midpoint;
  var sum = 0;
  var i;
  
  if (num.length == 0) {
    return null;
  } 
  else {
    for (i = 0; i < num.length; i++) {
      sum= sum + num[i];
    }
    midpoint= sum / num.length;

    return midpoint;
  }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr){
  var sum=0;
  var i;
  
  if(wordsArr.length==0){
    return null;
  }
  else{
    for (i = 0; i < wordsArr.length; i++) {
      sum=sum + wordsArr[i].length;
    }

    return sum / wordsArr.length;
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

function uniqueArray(wordsUnique) {
  if (wordUnique.length == 0) {
    return null;
  } else {
    return Array.from(new Set(wordsUnique));
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind, searchelement) {
  if (wordsFind.length == 0)
    return null;
  for (var i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i] == searchelement)
      return true;
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

function howManyTimesElementRepeated(wordsCount,word){
  let count=0;
  if(wordsCount.length==0){
    return 0;
  }
  
  for(let i=0 ; i<wordsCount.length ;i++){
    if(word == wordsCount[i]){
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