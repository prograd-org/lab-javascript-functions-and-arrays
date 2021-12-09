// Progression #1: Greatest of the two numbers
var num1 = 20
var num2 = 30
function greatestOfTwoNumbers(num1,num2)
{
  if(num1>num2)
  {
    return num1;
  }
  else{
    return num2;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord (words)
{
  var length = 0
  for(var i=0;i<=words.length;i++)
  {
    if(words.length==0)
    {
      return null;
    }
    else if(words.length==1)
    {
      return words;
    }
    else{
      for(var i=0;i<words[i].length;i++)
      {
        if(words[i].length>length)
        {
          length = length + words[i].length
          return length;
        }
      }
    }
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers)
{
  let sum = 0
  if(numbers.length==0)
  {
    return 0;
  }
  else{
    for(var i=0;i<numbers.length;i++)
    {
      sum=sum+numbers[i];
      return sum;
    }
  }
}

// Progression #4: Calculate the average
var a = [1,2,3,4,5,6]
function midPointOfLevels(a)
{
  if(a.length==0)
  {
    return null;
  }
  else{
    var sum=0
    for(var i=0;i<a.length;i++)
    {
      sum = sum+a[i];
    }
    return sum/a.length;
  }
}
var a = [1,2,3,4,5,6]
function avg(a)
{
  if(a.length==0)
  {
    return null;
  }
  else
  {
    var sum = 0
    for(var i =0;i<a.length;i++)
    {
      sum = sum+a[i]
    }
    ;
  }
  return sum/a.length
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
var count = 0;
var arr =[];
var sum = 0
function add(numbersAvg)
{
  if(numbersAvg.length==0)
  {
    return 0;
  }
  for(var i =0;i<=numbersAvg;i++)
  {
    if(numbersAvg[i]==0)
    {
      count++;
      if(count==numbersAvg.length)
      {
        return 0;

      }
    }
    sum=sum+numbersAvg[i];
  }
  arr.push(sum)
  return sum;
}



// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr)
{
  if(wordsArr.length==0)
  {
    return null;
  }
  else{
    for(var i = 0;i<wordsArr.length;i++)
    {
      var con = parseInt(wordsArr[i])
      sum = sum+con;
    }
    return sum/wordsArr.length;
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
function uniqueArray(wordsUnique)
{
  if(wordsUnique.length==0)
  {
    return null;
  }
  else
  {
    return wordsUnique;
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
var ser = 'machine'
function searchElement(wordsFind,ser)
{
  if(wordsFind.length==0)
  {
    return null;
  }
  else
  {
    for(var i=0;i<wordsFind.length;i++)
    {
      if(ser==wordsFind[i])
      {
        return true;
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
var count =0
function howManyTimesElementRepeated(wordsCount,count)
{

  if(wordsCount.length==0)
  {
    return 0;
  }
  for(var i=0;i<wordsCount.length;i++)
  {
    for(var j=i+1;j<wordsCount.length;j++)
    {
      if(wordsCount[i]==wordsCount[j])
      {
        count = count +1;

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
function maximumProduct(matrix)
{
  for(var i =0 ; i<matrix.length;i++)
  {
    if(matrix[i]==1)
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }
}
