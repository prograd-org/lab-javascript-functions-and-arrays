// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(firstNum, secondNum){
  
    if (firstNum > secondNum) {
       return firstNum;
    } else if(firstNum<secondNum){
        return secondNum;
    }
    return firstNum;
}
// Progression #2: The lengthy word
var words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words)
{
   
    var result;
    if(words.length==0)
    {
        return null;
     }
    else if(words.length==1)
    {
      return words[0];
    }
    else{
    var max=0;
    for(i=0;i<words.length;i++)
    {
        if(max<words[i].length)
        {
            max=words[i].length;
            result=words[i];
        }
    }
  }
    return result;
  }
// Progression #3: Net Price

//It returns 0 if empty array is given or if all the elements are 0
//Else it returns the sum of the elements in the array
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){  
  var sum=0;
  for(i=0;i<numbers.length;i++){
    if(numbers[i]!=0){
      sum = sum +numbers[i];
    }     
  }      
  return sum; 
}
// Progression #4: Calculate the average

//It returns 0 if empty array is given or if all the elements are 0
//If one number is given in array it will return the number
//Else it returns the sum of the elements in the array
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function add(numbers){  
  var sum=0;
  for(i=0;i<numbers.length;i++){
    if(typeof numbers[i]=='string'){      
        sum = sum + numbers[i].length;    
    } 
    else if(numbers[i]==true){
      sum = sum+1;
    }
    else if(numbers[i]==false){
      sum = sum +0;
    }
    else if(typeof numbers[i]==="number"){      
        sum = sum + numbers[i];      
    }    
    else throw Error("Unsupported data type sir or ma'am");
  }      
  return sum; 
}

// Progression 4.1: Array of numbers

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function midPointOfLevels(numbersAvg){
  var sum = 0;
  if(numbersAvg.length==0){
    return null;
  }
  else{
  for(i=0;i<numbersAvg.length;i++){
    sum = sum+numbersAvg[i];    
  }
  return sum/numbersAvg.length;
}

// Progression 4.2: Array of strings
}
function averageWordLength(wordsArr){
  var sum=0;
  if(wordsArr.length==0){
    return null;
  }
  else{
  for(let i=0;i<wordsArr.length;i++){
    sum = sum + wordsArr[i].length;
  }
  return sum/wordsArr.length;
}
}
function avg(mixedArr){
  var sum=0;
  if(mixedArr.length==0){
    return null;
  }
  else{
  for(i=0;i<mixedArr.length;i++){
    if(typeof(mixedArr[i]) == 'string'){
      sum = sum+mixedArr[i].length;
    }
     else if(mixedArr[i]==true){
      sum = sum + 1;      
    }
    else if(mixedArr[i]==false){
      sum = sum + 0;      
    }
    else {
      sum = sum+mixedArr[i];
    }
  }
  var ans = parseFloat( (sum/mixedArr.length).toFixed(2));
  return ans;
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
  let arr=[];
  if(wordsUnique.length==0){
    return null;
  }
 else{
  for(let i=0;i<wordsUnique.length;i++){
    for(let j=i+1;j<wordsUnique.length-1;j++){
   if(wordsUnique[i] !=  wordsUnique[i+1]){
     arr[i] = wordsUnique[i];
   }
   }  
  }
  return arr;  
 }
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,_find){
  if(wordsFind.length==0){
    return null;
  }
  else{
    for(let i=0;i<wordsFind.length;i++){
      if(wordsFind[i]==_find){
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
function howManyTimesElementRepeated(wordsCount,tofind)
{
  var count=0;
  for(var i=0;i<wordsCount.length;i++){
    if(wordsCount[i]==tofind){
      count=count+1;
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
  var sum=0;
  for(i=0;i<matrix.length;i++){
    for(j=0;j<matrix[i].length;j++){
      var matrix1 = matrix[i];
      sum+=matrix1[j];
    }
  }
  var len = matrix.length*matrix.length;
  if(sum==len){
    return 1;
  }
}
