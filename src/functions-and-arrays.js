// Progression #1: Greatest of the two numbers
var a=5;
var b=10;
function greatestOfTwoNumbers(a,b){
  if(a>b){
    return a;
  }
  else if(b>a){
    return b;
  }
  else{
    return a;
  }
}
greatestOfTwoNumbers(a,b)

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
findScaryWord(words);
function findScaryWord(arr){
if (arr.length===0){
  return null;
}
var longest="";
for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > longest.length) {
    longest = arr[i];
  }
}
return longest
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
netPrice(numbers)
function netPrice(numbers){
if(numbers.length===0){
     return 0;
}else{
var total=numbers.reduce((total,data)=>total+data)
}
return total
}

var type=0;
add(numbers)
function add(numbers){
  if(numbers.length===0){
    return 0;
  }
  var x;
  for(x of numbers){
    if(typeof(x)=="number"){
     type+=x;
    }
    else if(typeof(x)=="boolean"){
      type+=Number(x);
    }
    else{
      type+=x.length
    }
  }
return type;
}
 


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
midPointOfLevels(numbersAvg)
function midPointOfLevels(numbersAvg){
  if(numbersAvg.length===0){
    return null;
  }
  else{
    var sum=numbersAvg.reduce((total,data)=>total+data);
    return sum/numbersAvg.length;
  }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
averageWorldLength(wordsArr);
function averageWordLength(wordsArr){
  value=0;
  if(wordsArr.length===0){
    return null
  }
  else{
     for(x of wordsArr){
       value+=x.length;
     }
  }
return value/wordsArr.length
}



type=0;
avg(wordsArr)
function avg(wordsArr){
  if(wordsArr.length===0){
    return null;
  }
  var x;
  for(x of wordsArr){
    if(typeof(x)=="number"){
     type+=x;
    }
    else if(typeof(x)=="boolean"){
      type+=Number(x);
    }
    else{
      type+=x.length
    }
  }
return type/wordsArr.length
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
uniqueArray(wordsUnique);
function uniqueArray(wordsUnique){
  if(wordsUnique.length===0){
      return null
  }
  else{
     new_arr=[];
     wordsUnique.forEach(item=>{
       if(new_arr.indexOf(item)<0){
         new_arr.push(item)
       }
     })
  }
return new_arr;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
finding="machine";
searchElement(wordsFind,finding)
function searchElement(wordsFind,finding){
  if(wordsFind.length===0){
    return null;
  }
  return wordsFind.includes(finding);
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
howManyTimesElementRepeated(wordsCount)
function howManyTimesElementRepeated(wordsCount){
     search="machine";
     count=0;
     if(wordsCount.length==0){
       return 0
     }
     else{
       wordsCount.forEach((data)=>{
         if(data===search){
           count++;
         }
       });
      return count;
     }
}
