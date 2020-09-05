// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b)
{
  if(a>b)
  {
return a  }
  else{
    return b

  }
}

// Progression #2: The lengthy word here is my function
const words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];

function findScaryWord(words)
{
  if(Array.isArray(words) ){
  
    let longest = '';
for (let i = 0; i < words.length; i++) {
if (words[i].length > longest.length)
longest = words[i];
}
if(longest==0)
{
  return null
}
return longest
  }
  


}

// Progression #3: Net Price
const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];

function netPrice(prices){
  var sum=0;
  for(var i=0;i<prices.length;i++)
  {
    sum=sum + prices[i]
  }
  return sum
}
//function add
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr){
var  sum=[];
var sum1=[]
var sum2=[]
var final_result=0;
for(var i=0;i<mixedArr.length;i++)
  {

    if(typeof mixedArr[i] ==="number")
    {
       sum.push(mixedArr[i])

    }
    else if(typeof mixedArr[i] ==="string")
      {
        sum1.push(mixedArr[i].length)
      }
    else{
      sum2.push(mixedArr[i])
    }
    
  }


var sum3=[]
for(var i=0;i<sum2.length;i++){
if(sum2[i]==true)
  {
    sum3.push(1)
  }
  else{
    sum3.push(0)
  }
}
var final_result=0
for(var i=0;i<sum.length;i++)
  {
   
   final_result =final_result+sum[i]
  }
console.log(final_result)

     var final_result1=0
for(var i=0;i<sum1.length;i++)
  {
   
   final_result1 =final_result1+sum1[i]
  }
console.log(final_result1)

var final_result2=0
for(var i=0;i<sum3.length;i++)
  {
   
   final_result2 =final_result2+sum3[i]
  }
console.log(final_result2)
const final = final_result+final_result1+final_result2

 return final
}
 







// Progression #4: Calculate the average
// Progression 4.1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];  

function midPointOfLevels(numbersAvg){
  var sum=0;
 var result;
for(var i=0;i<numbersAvg.length;i++)
{
  sum=sum+numbersAvg[i]
  result=sum/numbersAvg.length
}
if(numbersAvg==0)
{
  return null
}
return result

}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];


//sir this the function no this one working i guess
function averageWordLength(wordsArr){
 // if(Array.isArray(wordsArr) ){
var sum=0;
var avg=0;
for(var i=0;i<wordsArr.length;i++)
  {
    sum=sum+wordsArr[i].length
    avg=sum/wordsArr.length
  }
  console.log(avg);
return avg

  // }
  // else{
  //   return null
  // }
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
  if(wordsUnique==0)
  {
    return null
  }

  return Array.from(new Set(wordsUnique));
  
}


// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,word)
{
  for(var i=0;i<words.length;i++){
    if(words[i]===  'trouble' )
    { return true }
  }
  if(wordsFind==0)
{
  return null
}
return true
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
  'matter',
  'digu',
  'digu',
  'digu',
  'digu',
  'digu'

];
function howManyTimesElementRepeated(wordsCount){
for(var i=0;i<wordsCount.length;i++)
  {
    if(wordsCount[i]=="digu")
      {
        break;
      }
  }
    var count=0

for(var j=0;j<wordsCount.length;j++)
  {

    if(wordsCount[j]==wordsCount[i])
    {
      count++
    }
    
  }
return count
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
