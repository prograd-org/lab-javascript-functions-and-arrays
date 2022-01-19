// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(x, y){
  if (x > y){
    return x;
  }
  else {
    return y;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  let max = 0,final = null;
  for(let i = 0; words[i] != null; i++){
    if (words[i].length > max){
      max = words[i].length
      final = words[i];
    }
  }
  return final;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  let sum = 0;
  for(let i = 0; numbers[i] != null; i++){
    sum = sum + numbers[i];
  }
  return sum;
}

function add(mixedArr){
  sum = 0
  for (var i = 0; i < mixedArr.length; i++) {
    switch (typeof mixedArr[i]) {
      case 'number':
        sum = sum + mixedArr[i]
        break;
      case 'string':
        sum = sum + mixedArr[i].length
        break;
      case 'boolean':
        if (mixedArr[i] == true) {
          sum++
        }
        break;
      default: 
        throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return sum
}

// Progression #4: Calculate the average
function midPointOfLevels(numbersAvg){
  if(numbersAvg.length == 0)
    return null
  let mid = 0;
  for(let i = 0; numbersAvg[i] != null; i++){
    mid = mid + numbersAvg[i]
  }
  mid = mid/numbersAvg.length 
  return mid
}

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(levels){
  if(levels.length == 0)
    return null
  let avg = 0
  for(let i = 0; levels[i] != null; i++){
    avg = avg + levels[i] 
  }
  avg = avg / levels.length
  return avg
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  if(wordsArr.length == 0)
    return null
  let avg = 0
  for(let i = 0; wordsArr[i] != null; i++){
    avg = avg + wordsArr[i].length
  }
  avg = avg/wordsArr.length
  return avg
}

// Progression #4.3 (Bonus): A generic avg() function
function avg(mixedArr){
  if(mixedArr.length == 0)
    return null
  sum = 0
  for (var i = 0; i < mixedArr.length; i++) {
    switch (typeof mixedArr[i]) {
      case 'number':
        sum = sum + mixedArr[i]
        break;
      case 'string':
        sum = sum + mixedArr[i].length
        break;
      case 'boolean':
        if (mixedArr[i] == true) 
          sum++
        break;
      default: 
        throw new Error("Unsupported data type sir or ma'am");
    }
  }
  sum = sum / mixedArr.length
  sum = Math.round((sum + Number.EPSILON) * 100) / 100;
  return sum
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
function uniqueArray(wordsUnique){
  if(wordsUnique.length == 0)
    return null
  let temp = [], count = 0
  temp.push(wordsUnique[0])
  for(let i = 1; wordsUnique[i] != null; i++){
    for(let z = i; z != 0; z--)
      if(temp[z-1] == wordsUnique[i]){
        count++
      }
    if(count == 0)
      temp.push(wordsUnique[i])
  }
  return temp
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, wordReq){
  let result = null
  for(let i=0; wordsFind[i] != null; i++){
    if(wordReq == wordsFind[i])
      result = true
  }
  return result
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
function howManyTimesElementRepeated(wordsCount, wordReq){
  let result = 0
  for(let i=0; wordsCount[i] != null; i++){
    if(wordReq == wordsCount[i])
      result++
  }
  return result
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
function maximumProduct(matrix){
  let prod = 0, max = 0
  for(let i = 0; i < 7; i++){
    for(let y = 0; y < 7; y++){
      prod = matrix[i][y] * matrix[i][y + 1] * matrix[i][y + 2] * matrix[i][y + 3]
      if(prod > max)
        max = prod
    }
  }
  for(let y = 0; y < 7; y++){
    for(let i = 0; i < 7; i++){
      prod = matrix[i][y] * matrix[i + 1][y] * matrix[i+2][y] * matrix[i+3][y]
      if(prod > max)
        max = prod
    }
  }
  return max
}