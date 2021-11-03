// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  if(num1 > num2){
    return num1;
  }
  else if(num2>num1) {
    return num2;
  }
  else{
    return num2;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  let lengthyWord = words[0];
  if(words.length == 0){
    return null;
  }
  else if(words.length == 1){
    return words[0];
  }
  else{
  for(i=1;i<words.length;i++){
      if(words[i].length > lengthyWord.length){
        lengthyWord = words[i];
      }
    }
  return lengthyWord;
  }
}


// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  if (numbers.length <= 0) 
  return 0;
  var sum=0;
    for(var i=0;i<numbers.length;i++)
    {
      sum +=numbers[i]; 
  }
return sum;
}

//Progression #3.1 (Bonus): A generic sum() function
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr){
  if(mixedArr.length==0){
  return(0)
  }
  else{
  var sum=0;
  for(var i=0;i<mixedArr.length;i++){
    
    if(typeof mixedArr[i]==='string')
    {
      sum+=mixedArr[i].length;
    }
    else if(typeof mixedArr[i]==="boolean"){
      sum+=Number(mixedArr[i]);
    }
    else if(typeof mixedArr[i]==='number'){
      sum+=mixedArr[i];
    }else{
      throw  Error("Unsupported data type sir or ma'\am")
    }
    
  }
 }
return sum;
}
console.log(add(mixedArr));


// Progression #4: Calculate the average

const number=[2,6,9,10,7,4]
function midPointOfLevels(number){
  let sum=0;
  if(number.length==0) 
  return null;
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  if(numbersAvg.length==0){
    return null;
  }
  else{
    var sum=netPrice(numbersAvg);
  }
  var average=sum/numbersAvg.length;
  return average;
  }

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  let sum=0;
  if(wordsArr.length==0){
    return null;
  }
  else{
  for(let i=0;i<wordsArr.length;i++){
    sum=sum+wordsArr[i].length;
  }
  return average=sum/wordsArr.length;
}
}
function avg(wordsArr){
  if(wordsArr.length <=0) 
  return null;
  return Number((add(wordsArr)/wordsArr.length).toFixed(2));
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
  let array=[];
  if(wordsUnique.length==0){
    return null;
  }
  else{
    for(let i=0;i<wordsUnique.length;i++){
      for(let j=i+1;j<wordsUnique.length-1;j++){
        if(wordsUnique[i] !=  wordsUnique[i+1]){
          array[i] = wordsUnique[i];
     }
     }  
    }
    return array;  
   }
  }

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,find){
  if(wordsFind.length==0){
    return null;
  }
  else{
  for(let i=0;i<wordsFind.length;i++){
    if(wordsFind[i]==find)
      return true; 
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
function howManyTimesElementRepeated(wordsCount, wordToSearch)
{
  var count = 0;
  if(wordsCount.length == 0)
  {
    return 0; 
  }
  else{
    for(let i=0;i < wordsCount.length; i++)
    {
      if(wordsCount[i] == wordToSearch)
       count = count+1;;
    }
    return count;
  }
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
   var max = 0;
   var result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if ((j - 3) >= 0) {
        result = matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
      }
        if (result > max) {
          max = result;
        }
      if ((i - 3) >= 0) {
        result = matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j];
      }
      if (result > max) {
        max = result;
      }
    }
  }
  return max;
}