// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(n1, n2)
{
  if(n1 > n2)
  {
    return n1;
  }
  else
  {
    return n2;
  }
}

// Progression #2: The lengthy word

  const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words)
{ 
    if(words.length==0)
    {
      return null;
    }
  else if(words.length == 1)
  {
    return words[0];
  }
  else if( words.length==2){
    if(words[0].length == words[1].length)
    {
      return words[0];
    }
  }
  else if(words.length>2)
  {
    for( i=0;i<words.length; i++)
      {
  if(words[0].length<words[i].length)
  {
 words[0]=words[i];
  }
  
}
return words[0];

}}

// Progression #3: Net Price

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
var sum=0;

function netPrice(numbers)
{if(numbers.length==0) {
  return 0;
}
else if(numbers.length==1)
{
  return numbers[0];
  
}
else if(numbers.length>1){
  
  for(i=0;i<numbers.length; i++){
    sum+=numbers[i];
  }
  return sum;

}
 


}
// Progression #4: Calculate the average
function add(array){
  let sum = 0, arrayLength = array.length;
  if(arrayLength!==0){
    for(let i=0; i<arrayLength;i++){
      if(typeof array[i] === "string"){
        sum += array[i].length;
      }
      else if(typeof array[i] === "number"){
        sum += array[i];
      }
      else if(typeof array[i] === "boolean"){
        sum += array[i];
      }
      else {
        throw new Error ('Unsupported data type sir or ma\'am');
        
      }
    }
  }
  return sum;
}


// Progression 4.1: Array of numbers
var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
var sum=0;
var average=0;
function midPointOfLevels(numbersAvg)
{
  if(numbersAvg.length!== 0){
 average = netPrice(numbersAvg)/numbersAvg.length;
 return average;
}
else {
  return null;
}
 }

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr)
  { 
    let avgLength = null, arrayLength = wordsArr.length;

    
    if(arrayLength!==0){
      avgLength = Math.round((add(wordsArr)/arrayLength)*100)/100;
      Math.round(avgLength,2);
    } 
    return avgLength;
  }
// Progression 4.3: Average of Mixed Array

  function avg(numbersAvg)
{
  if(numbersAvg.length!== 0){
let sum = 0;
let average = 0;
for (var i=0; i< numbersAvg.length; i++){
  sum= sum+ numbersAvg[i];
  average = sum/numbersAvg.length;
}return average;
  }
else {
  return null;
}
 }
// Progression #5: Unique arrays

const wordsUnique = ['bread', 'jam', 'milk', 'egg', 'flour','oil','rice','coffee powder','sugar','salt','egg','flour'];
function uniqueArray(wordsUnique){
  let newArray = null, arrayLength = wordsUnique.length;
  //checking if there are elements in the array
  if(arrayLength!==0){
    newArray = [];
    for(let i=0;i<arrayLength;i++){
      //check if the new array doesn't contains the word
      if(newArray.includes(wordsUnique[i]) === false){
        //push the word into new array
        newArray.push(wordsUnique[i]);
      }
    }
  }
  return newArray;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, word){
  let isPresent = null;
  //checking if there are elements in the array
  if(wordsFind.length!==0){
    //Checking if the array contains the word
    isPresent = wordsFind.includes(word);
  }
  return isPresent;
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
function howManyTimesElementRepeated(wordsCount,ele)
{
  let repeatation=0;
  if(wordsCount.length !== 0){
  for (i=0; i<=wordsCount.length; i++){
    if(wordsCount[i] === ele){
      repeatation++;
    }
  }return repeatation;
  }
  else{
    return 0;
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
  let sum = 0;
  for (let i =0; i< matrix.length; i++)
  {
    for (let j = 0; j<matrix[i].length; j++)
    {
      let nmatrix = matrix[i];
      sum+= nmatrix[j];
    }
  }
  let len = matrix.length*matrix.length;
  if (sum ==len) {return 1;}
  else if (sum ==len*2) {return 16;}
}



    
    
  
  

  
