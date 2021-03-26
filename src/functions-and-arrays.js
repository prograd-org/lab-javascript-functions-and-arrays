// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  if(num1>num2){
    return(num1)
  }
  else
    return(num2)
}
 greatestOfTwoNumbers(10,20);

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  let arr=[];
  var maximumlength=0;
 if(words.length==0){
  return(null)
  }
  for(var i=0;i<words.length;i++){
  if(words[i].length>maximumlength){
    maximumlength=words[i].length;

  }
}
for(var i=0;i<words.length;i++){
  if(words[i].length==maximumlength){
    arr.push(words[i]);
  }
}
return(arr[0])

}
findScaryWord(words)

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  if(numbers.length==0)
  return(0)
  var sum=0;
for(var i=0;i<numbers.length;i++)
sum=sum+numbers[i];
return(sum)
}
var output=netPrice();
console.log(output)
//progression #3.1:Add
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
      sum+=Number(mixedArr[i])
    }
    else if(typeof mixedArr[i]==='number'){
      sum+=mixedArr[i];
    }else{
      throw  Error("Unsupported data type sir or ma'\am")
    }
    
  }
 }
return(sum)
}
console.log(add(mixedArr))

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  if(numbersAvg.length==0)
  return(null)
  var sum=0;
  for(var i=0;i<numbersAvg.length;i++){
   sum=sum+numbersAvg[i];
   var average=sum/numbersAvg.length;
  }
  return(average)
}
console.log(average)
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  if(wordsArr.length==0)
  return(null)
  sum=0;
  for(var i=0;i<wordsArr.length;i++){
    wordsArr[i]=wordsArr[i].length;
    sum=sum+wordsArr[i];
    var average=sum/wordsArr.length;
  }
  return(average)
}
//progression 4.3:average of mixed strings
const Arr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg(Arr){
  if(Arr.length==0){
  return(null)
  }else{
  var sum=0
  for(var i=0;i<Arr.length;i++){
    
    if(typeof Arr[i]==='string')
    {
      sum+=Arr[i].length;
      
    }
    else if(typeof Arr[i]==="boolean"){
      sum+=Number(Arr[i])
    }
    else if(typeof Arr[i]==='number'){
      sum+=Arr[i];
    }else{
      throw  Error("Unsupported data type sir or ma'\am")
    }
  }
 }
 return Number((sum/Arr.length).toFixed(2))
    
}
console.log(avg(Arr));






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
 function uniqueArray(data){
  if(data.length==0){
  return(null)
  }
  else{
  return data.filter((value,index)=>data.indexOf(value)===index );
  }
}
console.log(uniqueArray(wordsUnique))
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,key){
  if(wordsFind.length==0){
    return(null)
  }
  else{
    return(wordsFind.includes(key))
  }
  
}
searchElement(wordsFind,subset)

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
function howManyTimesElementRepeated(wordsCount,keyword){
  if(wordsCount.length==0){
  return(0)
  }
  else{
  var count=0;
  for(var i=0;i<wordsCount.length;i++){
   if(wordsCount[i]===keyword){
   count+=1;
   }
  }
return(count)
  }
}
howManyTimesElementRepeated(wordsCount,'matter')
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
const n=10;
function maximumProduct(matrix){
 var  max=0,result;
  for(var i=0;i<matrix.length;i++){
  for(var j=0;j<matrix.length;j++){
    if((j-3)>=0){
      result=matrix[i][j]*matrix[i][j-1]*matrix[i][j-2]*matrix[i][j-3];
      if(max<result)
      max=result;
    }
    if((i-3)>=0){
      result=matrix[i][j]*matrix[i-1][j]*matrix[i-2][j]*matrix[i-3][j];
      if(max<result)
      max=result;
    }
    if((i-3)>=0 && (j-3)>=0){
      result=matrix[i][j]*matrix[i-1][j-1]*matrix[i-2][j-2]*matrix[i-3][j-3];
      if(max<result)
      max=result;
    }
    if((i-3)>=0 && (j-3)<=0){
      result=matrix[i][j]*matrix[i-1][j+1]*matrix[i-2][j+2]*matrix[i-3][j+3];
      if(max<result)
      max=result;
    }
  }
  }
return(max)
}
console.log(maximumProduct(matrix))