// Progression #1: Greatest of the two numbers
function greatestOfTwoNumber(num1, num2){
  if (num1 > num2) {
    return num1;
    
  } else {
    return num2;
  }
}
// Progression #2: The lengthy word
const words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];
function findScaryWord(words){
  var large = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < words[i+1].length ) {
      large = words[i+1];
    }  
  }
  return large;
}
// Progression #3: Net Price
const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
function netPrice(prices){
  var sum_price = 0;
  for (let p = 0; p < prices.length; p++) {
    sum_price = sum_price + prices[p];
  }
  return sum_price;
}
//#3.1 (Bonus): A generic sum() function
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
mixedArr.reduce(add);
  function add(total,current_value){
    if (type(i)=="string") {
      total = total + (current_value.length);
    }
    else{
      total = total + current_value;
      return total
    }
  }
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
//const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const levels = [22, 16, 9, 10, 7, 14, 11, 9];
level.reduce(midPointOfLevels);
  function midPointOfLevels(total,current_value){
    avg = (total + current_value) / level.length;
    return avg;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  avg = wordsArr.join('').length / worrdsArr.length
  return avg;
}
//Progression #4.3 (Bonus): A generic avg() function
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
mixedArr.reduce(avg);
  function avg(total,current_value){
    if (type(i)=="string") {
      total = total + (current_value.length);
    }
    else{
      total = total + current_value;
      return total

}
// Progression #5: Unique arrays
const items = [
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
var newArray = [];
function uniqueArray(items){
  if (items.length == 0){
    return undefined;
  }
  var a = 0;
  for (i=0; i < items.length ; i++){
    if (newArray.indexOf(items[i]) == -1){
      newArray.push(items[i]);  
      a++;
    }
    if (a == items.length){
      return items;
    }
  }
  return newArray;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist (array, word){
  if (array.length == 0){
    return false;
  }
for (i=0; i < array.length; i++){
  if (word == array[i]){
    var a = 1;
  }
}
if (a == 1){
  return true
} else return false;
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
function howManyTimes (array, word){
  if (array.length == 0){
    return false;
  }
  var a = 0
  for (i=0; i < array.length; i++){
    if (array[i] == word){
      a++;
    }
  }
  return a;
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
function maximumProductOfDiagonals(matrix){
  //BRUTE FORCE ALGORITHMw
  var max = 0, result; 
  
  // iterate the rows. 
  for (let i = 0; i < n; i++)  
  { 
      // iterate the columns. 
      for (let j = 0; j < n; j++)  
      { 
          // check the maximum product  
          // in horizontal row. 
          if ((j - 3) >= 0)  
          { 
              result = arr[i][j] * arr[i][j - 1] * 
                  arr[i][j - 2] * arr[i][j - 3]; 
                
              if (max < result) 
                  max = result; 
          } 
          // check the maximum product  
          // in vertical row. 
          if ((i - 3) >= 0)  
          { 
              result = arr[i][j] * arr[i - 1][j] * 
                  arr[i - 2][j] * arr[i - 3][j]; 
                
              if (max < result) 
                  max = result; 
          } 
          // check the maximum product in 
          // diagonal and anti - diagonal 
          if ((i - 3) >= 0 && (j - 3) >= 0)  
          { 
              result = arr[i][j] * arr[i - 1][j - 1] * 
                  arr[i - 2][j - 2] * arr[i - 3][j - 3]; 
                
              if (max < result) 
                  max = result; 
          } 
    } 
} 

  return max; 
}