![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Arrays

## Introduction

Manipulating arrays in code is a very common operation. Whether you're creating a total for a shopping cart, grabbing only the first names out of a list of people, or moving a piece on a chessboard, you're probably going to be modifying or manipulating an array in some way.


## What should you do
```
Fork this repo
Clone this repo
Practice JavaScript - Arrays
```

## How To Submit
```
Upon completion, run the following commands:

git add .
git commit -m "ProGrad ID"
git push origin master

And finally, create a pull request so your ProGrad Mentor (PM) can review your work.
```

## Tests

Open the `SpecRunner.html` file on your browser and start coding to pass the test. Remember to focus on one test at a time and read carefully the instructions to understand what should be done.

## Iteration #1: Find the greatest number

Define a function `greatestOfTwoNumber` that takes two numbers as arguments and returns the maximum number.

## Iteration #2: Find the scary word

Declare a function named `findScaryWord` that takes as an argument an array of names and returns the name which contains maximum characters. If there are 2 with the same type, it should return the first occurrence.

You can use the following array to test your solution:

```javascript
const words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];
```

## Iteration #3: Calculate the net price

Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

John spent his money on buying groceries, he need to find the net amount that he had spent on the super market.

Declare a function named `netPrice` that takes an array of prices as an argument, and returns the sum of all of the prices in the array. Later in the course we'll learn how to do this by using the `reduce` array method, which will make your work significantly easier. For now, let's practice _"declarative"_ way adding values, using loops.

You can use the following array to test your solution:

```javascript
const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
```

### Bonus - Iteration #3.1: A generic `sum()` function

**The goal: Learn how to refactor your code.** :muscle:

In the iteration 3, you created a function that returns the sum of an array of prices. But what if we wanted to know how much is the sum of the length of all of the words in an array? What if we wanted to add _boolean_ values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to _tweak_ it a little bit so that it can be reused no matter what is in the array that is passed as argument when function `sumOfArray()` is called.

Here we're applying a concept we call **polymorphism**, that is, dealing with a functions' input independently of the types they're passed as.

Let's create a new function `add()` that calculates the sum for array filled with (_almost_) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

You can use the following array to test your solution:

```javascript
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

// should return: 463
```

## Iteration #4: Calculate the mid point

Calculating an mid point is an extremely common task. Let's practice it a bit.

**The logic behind this:**

1. Find the sum as we did in the first exercise (or how about reusing that the _sumOfArray()_?)
2. Take that sum and divide it by the number of elements in the list.

### Level 1: Array of numbers

Consider a Surveyor is leveling a road and making a notes of it, he want to find the mid point of all those levels.

Declare a function named `midPointOfLevels` that expects an array of numbers and returns the average of the numbers:

**Starter Code**

```javascript
const levels = [22, 16, 9, 10, 7, 14, 11, 9];
```

### Level 2: Array of strings

Declare a function named `averageWordLength` that receives as a single argument an array of words and returns the average length of the words:

**Starter Code**

```javascript
const items = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt'
];
```

### Bonus - Iteration #4.1: A generic `avg()` function

Create function `avg(arr)` that receives any mixed array and calculates average. Consider as mixed array an array filled with numbers and/or strings and/or booleans. We're following a similar logic to the one applied on the bonus iteration 4.1 :wink:

```javascript
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

// should return: 46.3
```

## Iteration #5: Unique arrays

Take the following array, remove the duplicates, and return a new array. You're more than likely going to want to check out the [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) Array method.

Do this in the form of a function `uniqueArray` that receives an array of words as a argument.

**Starter Code**

```javascript
const items = [
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
```

## Iteration #6: Find elements

Let's create a simple array search.

Declare a function named `searchElement` that will take in an array of words as one argument, and a word to search for as the other. Return `true` if it exists, otherwise, return `false`. **Don't** use `indexOf` for this one.

**Starter Code**

```javascript
const words = [
  'door',
  'window',
  'ceiling',
  'roof',
  'plinth',
  'tiles',
  'ceiling',
  'flooring'
];
```

## Iteration #7: Count repeted elements

Declare a function named `howManyTimesElementRepeated` that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.

**Starter Code**

```javascript
const words = [
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
```

## Bonus - Iteration #8: Product of adjacent numbers

What is the greatest product of four adjacent numbers? We consider adjacent any four numbers that are next to each other horizontally or vertically.

For example, if we have a 5x5 Matrix like:

```bash
[ 1,  2, 3, 4, 5]
[ 1, 25, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]
```

The greatest product will be the `25`x`20`x`20`x`4` = `40000`;

Declare a function named `maximumProduct(matrix)` to find it in the 10x10 grid below!

```javascript
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
```

## Bonus - Iteration #8.1: Product of diagonals of matrix

Following the logic you've used in iteration #8, declare a function called `maximumProductOfDiagonals(matrix)`. It takes a matrix as a parameter and returns the greatest product of any four values layed out diagonally, in either direction.



Happy Coding ProGrad ❤️
