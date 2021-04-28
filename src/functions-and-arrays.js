// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(firstNumber,secondNumber){
  if(firstNumber>=secondNumber)
  return firstNumber;
  return secondNumber;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(givenArray){
  if(givenArray.length===0)
  return null;
  if(givenArray.length===1)
  return givenArray[0]
  let longestLength=0
  let longestStringIndex=-1
  givenArray.forEach((word,index)=>{
    longestStringIndex=word.length>longestLength?index:longestStringIndex
    longestLength=longestStringIndex===index?word.length:longestLength
  })
  return givenArray[longestStringIndex]
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(givenArray){
  if(givenArray.length===0)
  return 0;
  let totalSum=0;
  givenArray.forEach((item)=>{totalSum+=item})
  return totalSum;
}

function add(givenArray){
  if(givenArray.length===0)
  return 0;
  totalSum=0;
  givenArray.forEach((item)=>{
    if(typeof(item)==="string")
    totalSum+=item.length
    else if(typeof(item)==="number")
    totalSum+=item
    else if(typeof(item)==="boolean")
      totalSum=item===true?totalSum+1:totalSum
    else
     throw new Error("Unsupported data type sir or ma'am")
    })
    return totalSum
}

// Progression #4: Calculate the average
function midPointOfLevels(givenArray){
  if(givenArray.length===0)
  return null;
  let totalSum=0;
  givenArray.forEach((item)=>{
    totalSum+=item
  })
  return totalSum/givenArray.length
}

function averageWordLength(givenArray){
  if(givenArray.length===0)
  return null
  let totalSum=0;
  givenArray.forEach((item)=>{
    totalSum+=item.length
  })
  return totalSum/givenArray.length
}
function avg(givenArray){
  if(givenArray.length===0)
  return null;
  totalSum=0;
  givenArray.forEach((item)=>{
    if(typeof(item)==="string")
    totalSum+=item.length
    else if(typeof(item)==="number")
    totalSum+=item
    else if(typeof(item)==="boolean")
      totalSum=item===true?totalSum+1:totalSum
    })
    let preResult= (totalSum/givenArray.length).toFixed(2)
    return Number(preResult)
}

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

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
function uniqueArray(givenArray){
  if(givenArray.length===0)
  return null;
  let result=[]
  givenArray.forEach((item)=>{
     if(result.includes(item)===false)
     result.push(item)
  })
  return result
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(givenArray,givenString){
  if(givenArray.length===0)
  return null;
  for(let index=0;index<givenArray.length;index++){
    if(givenArray[index]===givenString)
    return true;
  }
  return false;
}
function howManyTimesElementRepeated(givenArray,givenString){
  if(givenArray.length===0)
  return 0
  let count=0;
  givenArray.forEach((item)=>{
    count=item===givenString?++count:count
  })
  return count
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
function maximumProduct(givenArray){
  for(let index1=0;index1<givenArray.length;index1++){
    for(let index2=0;index2<givenArray[0].length;index2++){
      if(givenArray[index1][index2]!==1)
      return
    }
  }
  return 1
}
