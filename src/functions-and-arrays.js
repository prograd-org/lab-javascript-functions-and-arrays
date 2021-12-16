// Progression #1: Greatest of the two numbers
var num2;
var num1;
function greatestOfTwoNumbers(num1,num2){
  if(num1>num2){
    return num1
  }
  else{
    return num2
  }
}
greatestOfTwoNumbers(45,67)

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words){
  let word;
  let wordLength = 0;
  if(words.length==0){
    return null
  }
  else{
    for(i=0;i<words.length;i++){
      if(words[i].length>wordLength){
        wordLength=words[i].length
        word= words[i];
      }
    }
    return word
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers){
  let sum=0;
  for(i=0;i<numbers.length;i++){
    sum=sum+numbers[i]
  }
  return sum
}
// Progression #4: Calculate the average
var average = [1,2,3,4,5,6]
function midPointOfLevels(average){
  var sum=0;
  if(average.length==0){
    return null;
  }
  else{
    for(var i=0;i<a.length;i++){
      sum = sum + average[i];
    }
    return sum/average.length;
  }
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  var total=0;
  var average;
  if(numbersAvg.length===0){
    return null;
  }
  else{
    for(i=0;i<numbersAvg.length;i++){
      total += numbersAvg[i];
      average=(total/numbersAvg.length);
    }
  }
  return average;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr){
  let averageLength =0;
  if(wordsArr.length==0){
    return null
  }
  else{
    for(i=0;i<wordsArr.length;i++){
      averageLength += wordsArr[i].length
    }
  } return averageLength/wordsArr.length
}

// Progression #5: Unique arrays
const wordsUnique = ['bread','jam','milk','egg','flour','oil','rice','coffee powder','sugar','salt','egg','flour'];

var unique= [...new Set(wordsUnique)]
console.log(unique);

// ...spreadOperator converts set to array; a set cntn nly unique elemts

// Progression #6: Find elements
const wordsFind = ['door','window','ceiling','roof','plinth','tiles','ceiling','flooring'];
function searchElement(wordsFind){
  let search='plinth'
  if(wordsFind.length==0){
    return null;
  }
  else{
    for(let i=0;i<wordsFind.length;i++){
      if(wordsFind[i]===search){       
        return true
      }
    } 
  } return
}

// Progression #7: Count repetition
const wordsCount = ['machine','matter','subset','trouble','starting','matter','eating','matter','truth','disobedience','matter'];
let wordsSearch = wordsCount.includes('matter');
function howManyTimesElementRepeated(wordsCount,wordSearch){
  if(wordsCount.length==0)
    return null;
  else{ 
      let count=0;
      for(i=0;i<wordsCount.length;i++) {
        if(wordsCount[i]==wordSearch){
          count ++
        }
      }  
  } return count;
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
  let product=[];
  for(i=0;i<matrix.length;i=i+2){
    for(j=0;j<matrix.length;j=j+2){
      product.push(matrix[j]*matrix[j+1])
    }
    product.push(matrix[i]*matrix[i+1])
  } return Math.max(product)
}
