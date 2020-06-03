// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(number1,number2){
  if(number1>number2){
    return number1;
  }
  return number2;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words){
  if(!words.length){
    return null;
  }
  let i , maxlen=0 , index = -1;

  for( i=0 ; i < words.length ; i++ ){
    if(maxlen < words[i].length){
      maxlen = words[i].length;
      index = i;
    }
  }
  return words[index];
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

//Bonus creating generic function
function add(numbers){
  let i, sum=0;
  for(i=0 ; i < numbers.length ; i++){
    switch(typeof(numbers[i])){
      case `object`:
        console.error(`Invalid data type`);
        break;
      case `number`:
        sum = sum + numbers[i];
        break;
      case `boolean`:
        if(numbers[i] == true){
          sum++;
        }
        break;
      case `string`:
        sum = sum + numbers[i].length;
    }
  }
  return sum;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbers){
  if(!numbers.length){
    return null;
  }
  let sum = add(numbers);
  return sum/numbers.length;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array){
  if(!array.length){
    return null;
  }
  let sum = add(array);
  return sum/array.length;
}

//bonus 2
function avg(arr){
  if(!arr.length){
    return null;
  }
  let sum = add(arr);
  let average = sum/arr.length;
  return (average.toFixed(2)*100)/100;
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
function removeElement(index , array){
    for(let i = index ; i<array.length-1 ; i++){
      array[i] = array[i+1];
    }
    array.pop();
}
function uniqueArray(words){
  if(!words.length){
    return null;
  }
  let i=0 ,index;
  for(i ; i<words.length ; i++){
    index = words.indexOf(words[i],i+1)
    while( index != -1){
      removeElement(index , words);
      index = words.indexOf(words[i],i+1)
    }
  }
  console.log(`changed array is ${words}`);
  return words;
}
console.log(uniqueArray(wordsUnique));
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(words , word){
  if(!words.length){
    return null;
  }
  let i;
  for(i=0 ; i<words.length ;i++){
    if(word == words[i]){
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
function howManyTimesElementRepeated(words,word){
  if(!words.length){
    return 0;
  }
  let count=0;
  for(let i=0 ; i<words.length ;i++){
    if(word == words[i]){
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
function maximumProduct( matrix ){
  let maximum = Number.MIN_VALUE;
  let i, j, product1, product2;
  let rows = matrix.length,
      cols = matrix[0].length;
  for( i=0 ; i<rows ; i++ ){
    for( j=0 ; j< cols ; j++ ){
      if((j+3)<cols){
        product1 = matrix[i][j] * matrix[i][j+1] * matrix[i][j+2] * matrix[i][j+3]  ;
        console.log(`${matrix[i][j]}*${matrix[i][j+1]}*${matrix[i][j+2]}*${matrix[i][j+3]} = ${product1}\n`);
      }
      if((i+3)<rows){
        product2 = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j] * matrix[i+3][j]  ;
        console.log(`${matrix[i][j]}*${matrix[i+1][j]}*${matrix[i+2][j]}*${matrix[i+3][j]} = ${product2}\n`);
      }
      
      if(product1>product2){
        if(product1 > maximum){
          maximum = product1;
        }
      }
      else{
        if(product2 > maximum){
          maximum = product2;
        }
      }
      console.log(maximum);
    }
  }
  return maximum;
}