// Progression #1: Greatest of the two numbers
function greaterOfTwoNumbers(num1,num2){
  if(num1>num2)
    return num1;
  else
    return num2;
}

function maxOfTwoNumbers(){}

// Progression #2: The lengthy word 
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(wordsList){
  if(wordsList.length <= 0)
    return null;
  var result='';
  for(var i=0;i<wordsList.length;i++){
    if(wordsList[i].length > result.length)
      result = wordsList[i];
  }
  return result;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(list){
  var sumOfPrice=0;
  for(var i = 0 ;i < list.length ; i++){
    sumOfPrice +=list[i]
  }
  return sumOfPrice;
}

function add(list){
  var sum=0;
  for(var i = 0 ;i < list.length ; i++){
    if(typeof(list[i]) == "string")
      sum += list[i].length;
    else if(typeof(list[i]) == "number")
      sum += list[i]
    else if(typeof(list[i]) == "boolean" && list[i] === true)
      sum += 1
    else if(typeof(list[i]) == "boolean" && list[i] === false)
      sum += 0
    else
      throw Error("Unsupported data type sir or ma'am");
  }
  return sum;
}

// Progression #4: Calculate the average
function midPointOfLevels(list){
  if(list.length <= 0 ) return null;
  return netPrice(list)/list.length;
}

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function average(list){
  return midPointOfLevels(list);
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(array){
  if(array.length <=0 ) return null;
  return (add(array)/array.length).toFixed(0);
}

function avg(list){
  if(list.length <=0) return null;
  return Number((add(list)/list.length).toFixed(2));
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
function elementPresent(array,element){
  for (var i = 0; i < array.length; i++)
    if(array[i] == element)
      return true;
  return false;    
}
function uniqueArray(array){
  uniqueArr = []
  if(array.length <=0) return null;
  for (var i = 0; i < array.length; i++) 
    if(elementPresent(uniqueArr,array[i]) == false)
      uniqueArr.push(array[i]);      
  return uniqueArr;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(array , element){
  if(array.length <=0) return null;
  return elementPresent(array,element);
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
function howManyTimesElementRepeated(array,element){
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i] == element){
      count+=1;
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
function maximumProduct(matrix){
  var rowProduct=1,columnProduct=1;
  for(var i=0 ;i < matrix.length; i++){
    for (var j = 0; j < matrix.length; j++) {
      rowProduct *= matrix[i][j];
      columnProduct *= matrix[j][i];
    }
  }
  return greaterOfTwoNumbers(rowProduct , columnProduct);
}