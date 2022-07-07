// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  if(num1>num2){
    return num1;
  }
  else{
    return num2;
  }
}
const words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];
// Progression #2: The lengthy word
function findScaryWord(words){
    if(words.length===0){
      return null;
    }
    else{
      var max=words[0].length;
      var index=0;
      for(var i=1;i<words.length;i++)
      {
        if(words[i].length > max){
          max=words[i].length;
          index=i;
        }
      }
    }
    return words[index];
} 
//const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  if(numbers.length===0){
    return 0;
  }
  else{
    var cost=0;
    for(var i=0;i<numbers.length;i++)
    {
      cost = cost + numbers[i];
    }
    return cost;
  }
}

const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr){
  var cost=0;
  for(var i=0;i<mixedArr.length;i++)
  {
    if(typeof mixedArr[i]==="string")
    {
      var sumchar=mixedArr[i].length;
      cost = cost + sumchar;
    }
    else if(typeof mixedArr[i]==="boolean"){
      cost = cost + Number(mixedArr[i]);
    }
    else if(typeof mixedArr[i]==="number"){
      cost = cost + mixedArr[i];
    }
    else if(typeof mixedArr[i]==="object"){
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return cost;
}



// Progression #4: Calculate the average
const levels = [22, 16, 9, 10, 7, 14, 11, 9];
function midPointOfLevels(levels){
    var sum=0;
    for(var i=0;i<levels.length;i++)
    {
      sum = sum + levels[i];
    }
    return (sum/levels.length);
}


// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(levels){
  if(levels.length===0){
    return null;
  }
  else{
    var sum=0;
    for(var i=0;i<levels.length;i++)
    {
      sum = sum + levels[i];
    }
    return (sum/levels.length);
  }
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  if(wordsArr.length===0){
    return null;
  }
  else{
    var sum=0;
    for(var i=0;i<wordsArr.length;i++){
      sum = sum + wordsArr[i].length;
    }
  }
  return (sum/wordsArr.length);
}

//Bonus
function avg(mixedArr){
  if(mixedArr.length===0){
    return null;
  }
  else{
    var sum1=0;
    for(var i=0;i<mixedArr.length;i++)
    {
      if(typeof mixedArr[i]==="string")
      {
        var sumchar=mixedArr[i].length;
        sum1 = sum1 + sumchar;
      }
      else if(typeof mixedArr[i]==="boolean"){
        sum1 = sum1 + Number(mixedArr[i]);
      }
      else if(typeof mixedArr[i]==="number"){
        sum1 = sum1 + mixedArr[i];
      }
    }
    return parseFloat((sum1/mixedArr.length).toFixed(2));
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
function uniqueArray(wordsUnique){
  var arr2=[];
  var count = 0;
  var k=0;
  if(wordsUnique.length===0)
  {
    return null;
  }
  else{
    for(i=0;i<wordsUnique.length;i++){
      var item=wordsUnique[i];
      var counter = arr2.indexOf(item);
      if(counter<0)
      {
        arr2.push(item);
      }
     }
  }
  return arr2;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
var c=0;
function searchElement(wordsFind, word1){
  if(wordsFind.length===0){
    return null;
  }
  else{
    for(var i=0;i<wordsFind.length;i++){
      if(wordsFind[i]==word1){
        return true;
        c=1;
      }
    }
    if(c==0)
    {
      return false;
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

function howManyTimesElementRepeated(wordsCount, word2){
  if(wordsCount.length===0)
  {
    return 0;
  }
  else{
    var count=0;
    for(var i=0;i<howManyTimesElementRepeated.length;i++){
      if(howManyTimesElementRepeated[i]==word2){
        count++;
      }
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
  var arr3=[];
  for(var i=0;i<10;i++)
  {
    for(var j=0;j<10;j++){
      arr3.push(matrix[i][j]);
    }
  }
  for(var i=0;i<99;i++){
    if(arr3[i+1]>arr3[i]){
      var temp=arr3[i+1];
      arr3[i+1]=arr3[i];
      arr3[i]=temp;
    }
  }
  var product = arr3[0]*arr3[1]*arr3[2]*arr3[3];
  return product;
}

//Progression #8.1 (Bonus): Product of diagonals

function maximumProductOfDiagonals(matrix){
  var arr3=[];
  for(var i=0;i<10;i++)
  {
    for(var j=0;j<10;j++){
      if((i==j) || (i+j==9)){
        arr3.push(matrix[i][j]);
      }
    }
  }
  for(var i=0;i<99;i++){
    if(arr3[i+1]>arr3[i]){
      var temp=arr3[i+1];
      arr3[i+1]=arr3[i];
      arr3[i]=temp;
    }
  }
  var product = arr3[0]*arr3[1]*arr3[2]*arr3[3];
  return product;
}
