// Progression #1: Greatest of the two numbers
let num1, num2
const greatestOfTwoNumbers = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else if (num2 > num1) {
    return num2
  } else {
    return num1
  }
}
// Progression #2: The lengthy word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
]
const findScaryWord = (words) => {
  let x
  let maxx = 0
  if (words.length == 0) {
    return null
  } else {
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxx) {
        maxx = words[i].length
        x = words[i]
      }
    }
    return x
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]
let summ = 0
const a = new Set(numbers)
const netPrice = (numbers) => {
  if (numbers.length == 0) {
    return 0
  } else if (a.size == 1 && numbers[0] == 0) {
    return 0
  } else if (numbers.length == 1 && numbers[0] != 0) {
    return numbers[0]
  } else {
    for (let i = 0; i < numbers.length; i++) {
      summ = summ + numbers[i]
    }
    return summ
  }
}
//Bonus
const lis = []
const b = new Set(lis)
const add = (lis) => {
  if (lis.length == 0) {
    return 0
  } else if (b.size == 1 && lis[0] == 0) {
    return 0
  } else if (lis.length == 1 && lis[0] != 0) {
    return lis[0]
  } else {
    let su = 0
    for (let i = 0; i < lis.length; i++) {
      if (typeof lis[i] == "string") su += lis[i].length
      else if (lis[i] == true) su += 1
      else if (lis[i] == false) su += 0
      else if (typeof lis[i] == "number") su += lis[i]
      else throw new Error("Unsupported data type sir or ma'am")
    }
    return su
  }
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9]
let sum = 0
const midPointOfLevels = (numbersAvg) => {
  if (numbersAvg.length == 0) {
    return null
  } else {
    for (let i = 0; i < numbersAvg.length; i++) {
      sum += numbersAvg[i]
    }
    return sum / numbersAvg.length
  }
}

// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
]
const averageWordLength = (wordsArr) => {
  let s = 0
  if (wordsArr.length == 0) return null
  else {
    for (let i = 0; i < wordsArr.length; i++) {
      s += wordsArr[i].length
    }
    return s / wordsArr.length
  }
}

//bonus
const p = []
const avg = (p) => {
  if (p.length == 0) return null
  else {
    let as = 0
    for (let i = 0; i < p.length; i++) {
      if (typeof p[i] == "string") as += p[i].length
      else if (p[i] == true) as += 1
      else if (p[i] == false) as += 0
      else if (typeof p[i] == "number") as += p[i]
    }
    return parseFloat((as / p.length).toFixed(2))
  }
}

// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
]
const uniqueArray = (wordsUnique) => {
  if (wordsUnique.length == 0) return null
  else {
    let ar = []
    for (let i = 0; i < wordsUnique.length; i++) {
      if (ar.includes(wordsUnique[i])) {
        continue
      } else {
        ar.push(wordsUnique[i])
      }
    }
    return ar
  }
}

// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
]
const searchElement = (wordsFind) => {
  if (wordsFind.length == 0) {
    return null
  } else {
    let x = "tiles"
    for (let i = 0; i < wordsFind.length; i++) {
      if (wordsFind[i] == x) return true
    }
  }
}

// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
]
var x
const howManyTimesElementRepeated = (wordsCount, x) => {
  if (wordsCount.length == 0) return 0
  else {
    if (wordsCount.includes(x)) {
      let cnt = 0
      for (let i = 0; i < wordsCount.length; i++) {
        if (wordsCount[i] == x) {
          cnt += 1
        }
      }
      return cnt
    } else {
      return 0
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
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
]
const maximumProduct = (matrix) => {
  let cn = 0
  for (let i = 0; i < matrix.length; i++) {
    const set = new Set(matrix[i])
    if (set.size == 1 && matrix[i][0] == 1) {
      cn += 1
    }
  }
  if (matrix.length == cn) return 1
}
