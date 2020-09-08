// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b){
  if(a>b){
    return a;
  }
  else{
    return b;
  }

}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function  findScaryWord(words)
{
    if(words.length == 0)
    {
      return null;
    }
    else if(words.length == 1)
    {
      return words[0];
    }

    
    var longestWord = 0;
    for(var i = 0; i < words.length; i++){

      if(words[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
        longestWord = words[i].length; // ...then longestWord takes this new value
          var longest = longestWord;
      }
      
    }
      for(i=0;i<words.length;i++)
      {
        if (words[i].length === longestWord)
        {
         return words[i];
        }
      }
  }



// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers)

{   
    if(numbers.length==0)
    {
        return 0;
    }
    var sum=0;
    for(i=0;i<numbers.length;i++)
    {
        sum=sum+numbers[i];
    }
    return sum;
}



// Progression #4: Calculate the average

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
 function midPointOfLevels( numbersAvg )
 {
   var sum=0;
   if(numbersAvg.length==0)
   {
       return null;
   }
   let len=numbersAvg.length;
   for (i = 0; i < numbersAvg.length; i++) {
    sum=sum+numbersAvg[i];
    }
    let avg=sum/len;
    return avg;
 }
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  var sum=0;
  if(wordsArr.length==0)
  {
      return null;
  }
  for(i=0;i<wordsArr.length;i++)
  {
    sum=sum+wordsArr[i].length;
  }
  
return sum/wordsArr.length;
}
// Progression #5: Unique arrays
var wordsUnique = ['bread','jam','milk','egg','flour','oil','rice','coffee powder','sugar','salt','egg','flour'];
function uniqueArray(wordsUnique){

  
  if(wordsUnique.length==0)
  {
      return null;

  }
  var outputArray = []; 
          
  //function removewithfilter(arr) { 
      let outputArray = wordsUnique.filter(function(v, i, self) 
      { 
            
          // It returns the index of the first 
          // instance of each value 
          return i == self.indexOf(v); 
      }); 
        
      return outputArray; 
  } 
    


// usage example:
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter( onlyUnique );
   }

  }




// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,machine){
  if(wordsFind.length==0){
    return null;
  }
  for(i=0;i<wordsFind.length;i++)
  {
    if(machine==wordsFind[i] )
    {
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

function howManyTimesElementRepeated(wordsCount,matter)
{
  var count=0;
    for(i=0;i<wordsCount.length;i++)
    {
    
      if(matter===wordsCount[i])
      {
          count++;
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
