// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  if(num1>num2)
  {
    return num1;
  }
  else
  return num2;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words){
  if(words.length==0){
  return null;
}
else if(words.length==1){
   return words[0];
}
else if(words.length==2)
{
  if(words[0].length==words[1].length){
    return words[0];
  }
}
else if(words.length>2){
  for(i=0;i<words.length;i++)
  {
    if(words[0].length<words[i].length){
      words[0]=words[i];
    }
  }
}
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  sum=0;
  for(let i=0;i<numbers.length;i++)
  {
    sum=sum+numbers[i];
    return sum;
  }
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg){
  sum=0;
  for(let i=0;i<numbersAvg.length;i++)
  {
    sum=sum+numbers[i];
    avg=sum/numbersAvg.length;
    return avg;
  }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr)
{
   total=0;
  for(let i=0;i<wordsArr.length;i++)
  {
   total+=wordsArr[i].length;
   var avg=total/wordsArr[i].length;
   return avg;
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
    
  let uniqueArr = [];
  
  
  for(let i of wordsUnique) {
      if(uniqueArr.indexOf(i) === -1) {
          uniqueArr.push(i);
      }
  }
  return uniqueArr;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
x='matter';
function searchElement(wordsFind, x){
  for(let i=0;i<wordsCount.length;i++)
  {
    if(x==wordsFind[i])
    {
      return true;
    }
    else
    return false;
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
x='matter';
function howManyTimesElementRepeated(wordCount, x){
  res=0;
  for(let i=0;i<wordsCount.length;i++)
  {
    if(x==wordsCount[i])
    res++;
    return res;
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
let n = 10;
 
    // function to find max product
    function maximumProduct(matrix)
    {
        let max = 0, result;
 
        // iterate the rows.
        for (let i = 0; i < n; i++)
        {
            // iterate the columns.
            for (let j = 0; j < n; j++)
            {
                // check the maximum product
                // in horizontal row.
                if ((j - 9) >= 0)
                {
                    result = arr[i][j] * arr[i][j - 1]
                            * arr[i][j - 2]
                            * arr[i][j - 3]* arr[i][j - 4]
                    * arr[i][j - 5]* arr[i][j - 6]
                    * arr[i][j - 7]* arr[i][j - 8]
                    * arr[i][j - 9];
                    if (max < result)
                        max = result;
                }
 
                // check the maximum product
                // in vertical row.
                if ((i - 9) >= 0)
                {
                    result = arr[i][j] * arr[i][j - 1]
                    * arr[i][j - 2]
                    * arr[i][j - 3]* arr[i][j - 4]
            * arr[i][j - 5]* arr[i][j - 6]
            * arr[i][j - 7]* arr[i][j - 8]
            * arr[i][j - 9];
 
                    if (max < result)
                        max = result;
                }
              }
            }
          }
