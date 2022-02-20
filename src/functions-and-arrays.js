// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(n1,n2){
  if(n1>n2)
    return n1;
  else if(n1<n2)
    return n2;
  else
    return n1;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  let max=0;
  let w="";
    if(words.length==0)
      return null;
      if(words.length==1)
      return words[0];
    for(let i=0;i<words.length;i++){
      if(words[i].length>max){
        max=words[i].length;
        w=words[i];
      }
    }
    return w;
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  let sum=0;
  for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
  }
  return sum;
}
function add(array){
  let sum=0;
  for(let i=0;i<array.length;i++){
      if(typeof(array[i])=="number")sum+=array[i];
      else if(typeof(array[i])=="string")sum+=array[i].length;
      else if(typeof(array[i])=="boolean")sum+=array[i];
      else if(typeof(array[i])=="object" || typeof(array[i])=="undefined")throw "throw Error: Unsupported data type sir or ma'am";
  }
  return sum;
}
// Progression #4: Calculate the average
const levels = [22, 16, 9, 10, 7, 14, 11, 9];

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  let add=netPrice(numbersAvg);
  if(numbersAvg.length==0)
    return null;
  let ans=add/numbersAvg.length;
  return ans;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  let sum=0;
  let ans=0;
  if(wordsArr.length==0)
    return null;
  for(let i=0;i<wordsArr.length;i++){
    sum+=wordsArr[i].length;
  }
  ans=sum/wordsArr.length;
  return ans;
}
function avg(array){
  let sum=0;
  let ag=0;
  if(array.length==0)
    return null;
  for(let i=0;i<array.length;i++){
      if(typeof(array[i])=="number")sum+=array[i];
      else if(typeof(array[i])=="string")sum+=array[i].length;
      else if(typeof(array[i])=="boolean")sum+=array[i];
  }
  ag=sum/array.length;
  return Math.round((ag + Number.EPSILON) * 100) / 100;
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
  if(wordsUnique.length==0)
    return null;
  for(let i=0;i<wordsUnique.length;i++){
    var index = wordsUnique.indexOf(wordsUnique[i]);
    if(index>-1)
      wordsUnique.splice(index,1);
  }
  return wordsUnique;
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,wrd){
  if(wordsFind.length==0) return null;
  for(let i=0;i<wordsFind.length;i++){
    if(wordsFind[i]==wrd)
      return true;
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
function howManyTimesElementRepeated(wordsCount,wrd){
  let occr=0;
  for(let i=0;i<wordsCount.length;i++){
    if(wordsCount[i]==wrd)
      occr+=1;
  }
  return occr;
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
  let i=0,j=0,prod=1,ans=1;
  
  for(i;i<10;i++){
    for(j;j<10;j++){
      prod*=matrix[i][j];
    }
    if(prod>ans)
      ans=prod;
  }
  for(i;i<10;i++){
    for(j;j<10;j++){
      prod*=matrix[j][i];
    }
    if(prod>ans)
      ans=prod;
  }
  return ans;
}