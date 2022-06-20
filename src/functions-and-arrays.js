// greatestOfTwoNumbers
function greatestOfTwoNumbers(){
  var num1 = parseInt(document.getElementById("n1").value);
  var num2 = parseInt(document.getElementById("n2").value);
  if(num1 > num2)
      document.getElementById("max").innerText = num1;
  else
      document.getElementById("max").innerText = num2;
}

// The lengthy word
function findScaryWord(){
  const words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];
  let longest = "";
  for(let i=0; i<words.length; i++){
      if(words[i].length > longest.length)
          longest = words[i];
  }
  document.getElementById("lengthy").innerText = longest;
}

// Net Price
function netPrice(){
  const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
  let sum = 0;
  for(let i=0; i<prices.length; i++)
      sum += prices[i];
  document.getElementById("net").innerText = sum;   
}

// Mid Point
//4.1
function midPointOfLevels(){
  const levels = [22, 16, 9, 10, 7, 14, 11, 9];
  let sum = 0;
  for(let i=0; i<levels.length; i++){
      sum += levels[i];
  }
  let average = sum / levels.length;
  document.getElementById("avg").innerText = average;
}
//4.2
function averageWordLength(){
  const items = ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt'];
  let sum = 0;
  for(let i=0; i<items.length; i++){
      let len = items[i].length;
      sum += len;
  }
  let avg_str = sum / items.length;
  document.getElementById("avg-str").innerText = avg_str;
}

// Unique arrays
function uniqueArray(){
  const items = ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt', 'egg', 'flour'];
  let unique_arr = [...new Set(items)];
  document.getElementById("unique").innerText = unique_arr; 
}

// Find elements
function searchElement(){
  const words = ['door','window','ceiling','roof','plinth','tiles','ceiling','flooring'];
  let str = document.getElementById("str").value;
  for(let i=0; i<words.length; i++){
      if(str == words[i]){
          document.getElementById("found").innerText = "True";
          break;
      }
      else
          document.getElementById("found").innerText = "False";
  }
}

// Count repeated elements
function howManyTimesElementRepeated(){
  const words = ['machine', 'matter', 'subset', 'trouble', 'starting', 'matter', 'eating', 'matter', 'truth', 'disobedience', 'matter'];
  var answer = [];
  for(let i=0; i<words.length; i++){
      let f = 0;
      let current = words[i];
      
      for(let j=0; j<words.length; j++)
          if(current == words[j])
              f++;
      answer.push(" " + words[i] + " - " + f + " ");
      document.getElementById("freq").innerText = answer;
  }
}

// Product of adjacent numbers
function maximumProduct(){
  function findMaxP(arr, n){
      let max = 0, result;
      for(let i=0; i<n; i++){
          for(let j=0; j<n; j++){

              if((j-3) >= 0){
                  result = arr[i][j] * arr[i][j-1]
                           * arr[i][j-2] * arr[i][j-3];
                  if(max < result)
                      max = result;
              }

              if((i-3) >= 0){
                  result = arr[i][j] * arr[i-1][j]
                           * arr[i-2][j] * arr[i-3][j];
                  if(max < result)
                      max = result;
              }

              if((i-3) >= 0 && (j-3) >= 0){
                  result = arr[i][j] * arr[i-1][j-1]
                  * arr[i-2][j-2] * arr[i-3][j-3];
                  if(max < result)
                      max = result;
              }

              if((i-3) >= 0 && (j-1) <= 0){
                  result = arr[i][j] * arr[i-1][j+1]
                  * arr[i-2][j+2] * arr[i-3][j+3];
                  if(max < result)
                      max = result;
              }
          }
      }
      return max;
  }

  let n = 5;
  let arr =  [[ 1,  2, 3, 4, 5],
              [ 1, 25, 3, 4, 5],
              [ 1, 20, 3, 4, 5],
              [ 1, 20, 3, 4, 5],
              [ 1,  4, 3, 4, 5]];
  
  document.getElementById("maxP").innerText = findMaxP(arr, n);
}