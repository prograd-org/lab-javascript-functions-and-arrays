// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b){
  return a>b?a:b;
}
// Progression #2: The lengthy word
var words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  if(words.length===0)
  return null;
  var j=0;
  for(var i=1;i<words.length;i++){
   
   words[i-1].length>=words[i].length?(words[i]=words[i-1]):j++;
  }
  return words[words.length-1];
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(arr){
  if(arr.length===0)
  return 0;
  return arr.reduce((a,b)=>a+b)
}
function add(arr){
  var total=0;
  if(arr.length===0)
  return 0;
  for(var i=0;i<arr.length;i++){
    if(typeof(arr[i])==='string'){
      total+=arr[i].length;
    }
    else if(typeof(arr[i])==='boolean'){
      total+=arr[i]===true?1:0;
    }
    else if(typeof(arr[i])==='number'){
      total+=arr[i];
    }
    else{
    throw Error("Unsupported data type sir or ma'am");}
  }
  return total;
}
// Progression #4: Calculate the average

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr){
  if(arr.length===0)
  return null;
  return arr.reduce((a,b)=>a+b)/arr.length
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr){
  var total=0;
if(arr.length===0)
  return null;
  for(var i=0;i<arr.length;i++){
  total+=arr[i].length;}
  return total/arr.length;
}
function avg(arr){
var total=0;
  if(arr.length===0)
  return null;
  for(var i=0;i<arr.length;i++){
    if(typeof(arr[i])==='string'){
      total+=arr[i].length;
    }
    else if(typeof(arr[i])==='boolean'){
      total+=arr[i]===true?1:0;
    }
    else if(typeof(arr[i])==='number'){
      total+=arr[i];
    }
  }
    return Number((total/arr.length).toFixed(2));
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
function uniqueArray(s){
  if(s.length===0)
  return null;
return [...new Set(s)];
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(arr,serele){
  if(arr.length===0)
  return null;
  for(let i=0;i<arr.length;i++){
    if(arr[i]===serele)
      return true;    
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
function howManyTimesElementRepeated(s,repele){
  var count=0;
  if(s.length===0)
  return 0;
  for(var i=0;i<s.length;i++)
  {if(s[i]===repele)
    count+=1;
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
  pro=0;
  for(var i=0;i<matrix.length;i++){
    for(var j=0;j<matrix[i].length;j++){
      if(matrix[i][j]==1){
        pro=1;
      }
      else{
        pro=0;
      }
    }
  }
  return pro;
}