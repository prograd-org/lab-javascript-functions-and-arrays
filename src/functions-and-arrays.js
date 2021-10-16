// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b){
  var a;
  var b;
  if(a>b){
    return a;
  }
  else{
    return b;
  }
}
greatestOfTwoNumbers(28, 19);

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  let a;
  let findword=0;
  if(words.length==0){
    return null;
  }
  else{
  for(let i=0;i<words.length;i++){
    if(words[i].length>findword){
      findword=words[i].length;
      a=words[i];
    }
  }
  return a;
}
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const netPrice = sum =>{
  var total=0;
  if(sum.length>0){
    for(i=0; i<sum.length; i++){
      total= total +sum[i];
    }
  }
  return total;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const midPointOfLevels= array_avg => {
  var total=0;
  var AVG=0;
  if(array_avg.length===0){
    return null;
  }
  else if(array_avg.length>0){
    for(i=0;i<array_avg.length;i++){
      total =total+ array_avg[i];
      AVG=(total/array_avg.length);
    }
  }
  return AVG;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  let x=0;
  if(wordsArr.length==0)
    return null;
  else{
    for(let i=0;i<wordsArr.length;i++){
      x += wordsArr[i].length;
    }
    return x/wordsArr.length;
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
const uniqueArray = a =>{
  var newArr=[ ];
  if(a.length===0){
    return null;
  }
  else if(a.length>0){
    for(var i=0;i<a.length;i++){
      if(newArr.indexOf(a[i]) === -1){
        newArr.push(a[i]);
      }
    }
  }
  return newArr;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind){
  if(wordsFind.length==0){
    return null;
  }
  else{
  let b='tiles'
  for(let i=0;i<wordsFind.length;i++){
    if(wordsFind[i]==b)
      return true;
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
var x;
function howManyTimesElementRepeated(wordsCount,x){
  if(wordsCount.length==0)
    return 0;
  else{ 
    if(wordsCount.includes(x)){
      let count=0;
      for(let i=0;i<wordsCount.length;i++){
        if(wordsCount[i]==x){
          count+=1;
        }
      }
      return count;
    }
    else{
      return 0;  
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
function maximumProduct(matrix){
  let c=0
  for(let i=0;i<matrix.length;i++){
    const set=new Set(matrix[i]);
    if(set.size==1 && matrix[i][0]==1){
      c+=1;
    }
  }
  if(matrix.length==c)
    return 1;
}

//Bonus:Calculate the sum
const alist=[];
const b= new Set(alist);
function add(alist){
  if(alist.length==0){
    return 0;
  }
  else if(b.size==1 && alist[0]==0){
    return 0;    
  }
  else if(alist.length==1 && alist[0]!=0){
    return alist[0];
  }
  else{
      let sum=0;
      for(let i=0;i< alist.length;i++){
        if(typeof alist[i]=="string")
          sum+= alist[i].length;
        else if(alist[i]==true)
          sum += 1;
        else if(alist[i]==false)
          sum += 0;
        else if(typeof alist[i]== "number")
          sum += alist[i];
        else
          throw new Error('Unsupported data type sir or ma\'am'); 
      }
      return sum;
      }

    }
//Bouns:Calculate the average of a mixed elements array
const p=[]
function avg(p){
  if(p.length==0)
    return null;
  else{
    let a=0;
      for(let i=0;i< p.length;i++){
        if(typeof p[i]=="string")
          a+= p[i].length;
        else if(p[i]==true)
          a += 1;
        else if(p[i]==false)
          a += 0;
        else if(typeof p[i]== "number")
          a += p[i];
      }
      return parseFloat((a/p.length).toFixed(2));
}
}