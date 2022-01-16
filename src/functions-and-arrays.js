// Progression #1: Greatest of the two numbers

greatestOfTwoNumbers=(num1,num2)=>{
  if(num1>num2){
    return(num1);
  }
  else{
    return(num2);
  }
  }

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words){
  if(words.length==0){
    return(null);
  }
  else{
    var i=0;
    var j=0;
    var count=0;
    for(i=0;i<words.length;i++){
      if(words[i].length>count){
        count=words[i].length;
      }
    }
    for(j=0;j<words.length;j++){
      if(words[j].length==count){
        return(words[j]);
      }
    }
  }
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers){
  var x=0;
  var i;
for(i=0;i<numbers.length;i++){
x=x+numbers[i];
}
return(x);
}
const mixed = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixed){
  if(mixed==0){
    return(0);
  }
else{
  
  function sum(mixed){
    var z=0;
    for(var i=0;i<mixed.length;i++){
      if(typeof(mixed[i])=='number'){
        z=z+mixed[i];
      }
      else if(typeof(mixed[i])=='string'){
        z=z+mixed[i].length;
      }
      else if(typeof(mixed[i])=='boolean'){
        z=z+mixed[i];
      }
      else{
        throw Error("Unsupported data type sir or ma'am");
      }
    }
    return(z);
  }
  return Number(sum(mixed));
}
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg){
  if(numbersAvg==0){
    return(null);
  }
  else{
  var x=0;
  var i;
  var y;
  for(i=0;i<numbersAvg.length;i++){
    x=x+numbersAvg[i];
  }
  y=x/numbersAvg.length;
  return(y);
}
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr){
  if(wordsArr==0){
    return(null);
  }
  else{
  var x;
 var y; x=wordsArr[0].length+wordsArr[1].length+wordsArr[2].length+wordsArr[3].length+wordsArr[4].length+wordsArr[5].length+wordsArr[6].length+wordsArr[7].length+wordsArr[8].length+wordsArr[9].length;
  y=x/wordsArr.length;
return(y);
}
}
//avg of the mixed array
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function avg(mixedArr){
  if(mixedArr.length==0){
    return(null);
  }
else{
  var x;
  var y;
  function add(mixedArr){           //adding the mixed array
    var z = 0;
    var i=0;
  for (i=0;i<mixedArr.length;i++) {
    if (typeof (mixedArr[i]) == 'number'){
      z= z+ mixedArr[i];
    }
    else if (typeof (mixedArr[i]) == 'string'){
      z=z+mixedArr[i].length;
    }
    else if (typeof (mixedArr[i]) == 'boolean'){
      z=z+mixedArr[i];
  }
    else{
      throw Error("Data Unsupported");
    }
  }
  return(z);    //returning the aded value
  }
x=add(mixedArr)/mixedArr.length;    //taking the added valie and finding the avg
y = x.toFixed(2);                   //limiting the avg value to two decimal place
return Number(y);                          //returning the final value
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
  if(wordsUnique==0){
    return(null);
  }
  else{
  var array=[];
  var i=0;
  for(i=0;i<wordsUnique.length;i++){
    if(array.indexOf(wordsUnique[i])=== -1){
      array.push(wordsUnique[i]);
    }
  }
  return(array);
}
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind){
  if(wordsFind.length==0){
    return(null);
  }
  else{
    var i=0;
    for(i=0;i<wordsFind.length;i++){
      var b= wordsFind.includes(wordsFind[i]);
    }
    return(b);
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

function howManyTimesElementRepeated(wordsCount,x){
  if(wordsCount.length==0){
    return(0);
  }
  else{
    var i=0;
    var count=0;
    for(i=0;i<wordsCount.length;i++){
      if(wordsCount[i]==x){
        count++;
      }
    }
    return(count);
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

maximumProduct=(matrix)=>{
  var max = 0,result;
  // iterate the rows.
  for (var i = 0; i < 10; i++){
   // iterate the columns.
      for (var j = 0; j < 10; j++){
      // check the maximum product
      // in horizontal row.
          if ((j - 3) >= 0)
          {
              result = matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
               
              if (max < result){
                  max = result;
              }
          }
          // check the maximum product
          // in vertical row.
          if ((i - 3) >= 0)
          {
              result = matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j];
               if (max < result){
                  max = result;
          }
        }
  }
  }
  return(max);
}
maximumProductOfDiagonals=(matrix)=>{
  var max = 0,result;
  // iterate the rows.
  for (var i = 0; i < 10; i++){
   // iterate the columns.
   for (var j = 0; j < 10; j++){
      if ((i - 3) >= 0 && (j - 3) >= 0){
           result = matrix[i][j] * matrix[i - 1][j - 1] * matrix[i - 2][j - 2] * matrix[i - 3][j - 3];
             if (max < result){
                max = result;
               }
             }
    if ((i - 3) >= 0 && (j - 1) <=0){
           result = matrix[i][j] * matrix[i - 1][j + 1] * matrix[i - 2][j + 2] * matrix[i - 3][j + 3];
             if (max < result){
                 max = result;
                }
            }
          }
        }
            return(max);
}