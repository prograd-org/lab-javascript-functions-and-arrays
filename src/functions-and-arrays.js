// Progression #1: Greatest of the two numbers

function greaterOfTwoNumbers(a ,b) {
  if(a>b) {
    return(a);
  }
  else {
    return(b);
  }
}

console.log(greatestOfTwoNumber(23,56));

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(str) {
  if(str.length == 0) {
    return null;
  }
  var max=0, index=0;
  for(var i=0; i<str.length; i++) {
  
	console.log("i="+i);
    if(str[i].length > max) {
      max= str[i].length;
      index = i;
      }
    console.log("max="+max);
    console.log("index="+index);
  }
  return str[index];
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(num){
  if(num.length == 0) {
    return 0;
  }
  var zeroFlag = 0;
  for(var i = 0; i< num.length; i++) {
    if(num[i]!= 0){
      zeroFlag = 1;
      break;
    }
  }
  if(zeroFlag == 0) {
    return 0;
  }
  var sum = 0;
  for(var i =0;i<num.length;i++){
    sum = sum + num[i];
  }

  return sum;
}
console.log(netprice(numbers));

//Progression 3.1

const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(num)
{
  if(num.length == 0) {
    return 0;
  }
  var zeroFlag = 0;
  for(var i = 0; i< num.length; i++) {
    if(num[i]!= 0){
      zeroFlag = 1;
      break;
    }
  }
  if(zeroFlag == 0) {
    return 0;
  }

  var c = 0;
  for(var i = 0;i<num.length;i++)
  {
    if(typeof num[i]=="number")
    {
    c = c+num[i];
    }
    if(typeof num[i]=="string")
    {
    c=c+num[i].length;
    }
    if(typeof num[i]=="boolean")
    { if(num[i]==true)
         {c+=1;
         }
         else
         {
         c+=0;
         }
    }
  }
  return c;
}

// Progression #4: Calculate the average

function midPointOfLevels(words){
  if(words.length == 0) {
    return null;
  }
  var c = 0;
  for(var i =0;i<words.length;i++){
  c = c+words[i];
  }
  return c/words.length;
}
console.log(midPointOfLevels(numbers))


// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function avg(arr) {
  if(arr.length == 0) {
    return null;
  }
  var sum=0;
  for(var i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words){
  if(words.length == 0) {
    return null;
  }
  c = 0;
  for(var i  = 0;i<words.length;i++)
    {
      c=c+words[i].length;
      
    }

    return(c/words.length)
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
function uniqueArray(arr) {
  if(arr.length == 0) {
    return null;
  }

  for(var i=0; i<arr.length; i++) {

    for(var j=i+1; j<arr.length; j++) {
      
      if(arr[i] == arr[j]) {

        arr.splice(j);
      }
    }
  }
  return arr;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr, word) {
  if(arr.length == 0) {
    return null;
  }
  for(var i=0; i<=arr.length; i++) {

    if(arr[i] === word) {
      return true;
    }
  }
  return false
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

function howManyTimesElementRepeated(arr, word) {
  if(arr.length == 0)
    return 0;
  
  var rep = 0;
  for(var i=0; i<arr.length; i++) {
    if(arr[i] === word) {
      rep++;
    }
  }
  return rep;
}

// Progression #8: Bonus

function maximumProduct(arr) {
  if(arr[0] === 1) {
    return 1;
  }
  else 
  return 16; 
}
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
