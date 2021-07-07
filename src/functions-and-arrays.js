// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b){
  if(a>b){
    return a;
  }
  else if(b>a){
    return b;
  }
  else{
    return a,b;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(Array){
  var l=0;
  if(Array.length==0){
    return null;
  }
  else if(Array.length==1){

      return Array[0];
    
  }
  else if(Array.length>1){
    for(var x=0;x<=Array.length;x++){
       if(l<Array[x].length){
        l=Array[x].length;
        return Array[x];
      }
    }
}
else if(Array.length>1){
  for(var x=0;x<=Array.length;x++){
    if(l>Array[x].length){
     return Array[x-1];
   }
 }
}
else{
  return Array[x];
}

}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(Array){
  sum=0;
  if(Array.length==0){
    return 0;
  }
  else if(Array.length==1){
    return Array[0];
  }
  else if(Array.length>1){
    for(x=0;x<Array.length;x++){
      sum+=Array[x];
      }
    return sum;
    }
  }


// Progression #4: Calculate the average
function midPointOfLevels(Array){
  var sum=0;
  if(Array.length==0){
    return null;
  }
  else{
    for(var x=0; x<Array.length;x++){
      sum+=Array[x];
      var avg=sum/Array.length;
    }
    return avg;
  }
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
midPointOfLevels(numbersAvg);

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(Array){
  var sum=0;
  if(Array.length==0){
    return null;
  }
  else{
  for(var x=0;x<Array.length;x++){
      sum+=Array[x].length;
      var avg=sum/Array.length;
  }
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

function uniquifyArray(Array) {
  var Array=[];
  Array.push(wordsUnique);
  if(Array.length==0){
    return null;
  }
  else{
  for(var x=0;x<Array.length;x++){
    for(var y=x+1;y<Array.length;y++){
      if(Array[x]==Array[y]){
        Array.splice(y,y+1);
      }
    }
  }
  return Array;
  }
}



// Progression #6: Find elements
function searchElement(){
  const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
  search='trouble';
  if(wordsFind.length==0){
    return null;
  }
  else{
    for(var x=0;x<wordsFind.length;x++){
      if(search==wordsFind[x]){
        return true;
      }
      else{
        continue;
      }
    }
  }
}
// Progression #7: Count repetition

function howManyTimesElementRepeated(){
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
  var count=0;
  search='disobedience';
  if(wordsCount.length==0){
    return 0;
  }
  else{
    for(var x=0;x<wordsCount.length;x++){
      if(wordsCount[x]==search){
        count++;
      }
      else{
        return 0;
      }
    return count;
  }
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
