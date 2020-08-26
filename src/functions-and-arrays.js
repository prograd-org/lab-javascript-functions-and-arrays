// Progression #1: Greatest of the two numbers

function greatestOfTwoNumbers(number1,number2)
{
  if(number1>number2)
  {
    return number1
  }
  else
  {
    return number2
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words)
{
  var lengthy_word
  let maxLength=0
  var i=0
  if (words.length == 0) return null;
  while(i<words.length)
  {
    var largestWord=words[i].length
    if (largestWord > maxLength)
    {
      maxLength = largestWord;
      lengthy_word = words[i];
    }
    i+=1
  }
  return lengthy_word;
}

// Progression #3: Net Price
const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];

function netPrice(prices)
{
  var sum = 0
  for (var i=0;i<prices.length;i++)
  {
    if (isNaN(prices[i])) {
      continue;
    }
    sum+=prices[i]
  }
  return sum
}

//Bonus Progression
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr)
{
  var numSum=0
  var strSum=0
  var boolSum=0
  for(i=0;i<mixedArr.length;i++)
  {
    if(typeof(mixedArr[i])=="number")
    {
      numSum+=mixedArr[i]
    }
    else if (typeof(mixedArr[i])== "string")
    {
      strSum+=mixedArr[i].length
    }
    else if (typeof (mixedArr[i]) == "boolean")
    {
      if(mixedArr[i]==true)
      {
        boolSum+=1
      }
    }
    else
    {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return(numSum+strSum+boolSum)
}

// Progression #4: Calculate the average

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numberAvg) 
{
  if(numberAvg.length==0)
  {
    return null
  }
  else
  {
    var sum = 0
    for (var i = 0; i < numberAvg.length; i++) 
    {
      sum += numberAvg[i]
      var avg=sum/numberAvg.length
    }
  }
  return avg
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if (wordsArr.length == 0) {
    return null
  }
  else {
    var sum = 0
    for (var i = 0; i < wordsArr.length; i++) {
      sum += wordsArr[i].length
      var avg = sum / wordsArr.length
    }
  }
  return avg
}

//Bonus 4.3
const arr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg(arr)
{
  var numSum = 0
  var strSum = 0
  var boolSum = 0
  if (arr.length == 0) {
    return null
  }
  for (i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) == "number") {
      numSum += arr[i]
    }
    else if (typeof (arr[i]) == "string") {
      strSum += arr[i].length
    }
    else if (typeof (arr[i]) == "boolean") {
      if (arr[i] == true) {
        boolSum += 1
      }
    }
  }
  var finalsum=numSum+strSum+boolSum
  return ((finalsum/ (arr.length)).toFixed(2) * 100) / 100
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
    const newarr = []
    if (wordsUnique.length == 0) {
      return null
    }
    for (i = 0; i < wordsUnique.length; i++) {
      let exist = false;
      for (j = 0; j < newarr.length; j++) {
        if (wordsUnique[i] === wordsUnique[j]) {
          exist = true
          break
        }
      }
      if (!exist) {
        newarr.push(wordsUnique[i]);
      }
    }
    return(newarr)
  }


// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,element)
{
  if(wordsFind.length==0)
  {
    return null
  }
  else
  {
    for (i=0;i<wordsFind.length;i++)
    {
      if (wordsFind[i] ==element )
      {
        return true
      }
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
function howManyTimesElementRepeated(wordsCount, element) {
  var counter = 0;
  if (wordsCount.length == 0) 
  {
    return 0;
  }
  for (var i = 0; i < wordsCount.length; i++)
  {
    if (wordsCount[i] == element) 
    {
      counter++;
    }
  }
    
  return counter;
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


function maximumProduct(matrix) {
  let product = 0;
  let result;
  for (let i = 0; i < matrix.length; i++) 
  {
    for (let j = 0; j < matrix.length; j++)
     {
      if ((j - 5) >= 0) 
      {
        result = matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
        if (product < result)
        {
          product = result;
        }
      }
      if ((i - 5) >= 0) {
        result = matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j];
        if (product < result)
        {
          product = result;
        }
      }
    }
  }
  return product;
} 

