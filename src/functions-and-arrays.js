// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
// Progression #2: The lengthy word
const words1 = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {
    let arr = [];
    var maximumlength = 0;
    if (words.length == 0) {
        return null;
    }
    for (i = 0; i < words.length; i++) {
        if (words[i].length > maximumlength) {
            maximumlength = words[i].length;

        }
    }
    for (i = 0; i < words.length; i++) {
        if (words[i].length == maximumlength) {
            arr.push(words[i]);
        }
    }
    return arr[0];
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(arr) {
    if (arr.length === 0) {
        return 0;
    }

    function sumofArray(sum, num) {
        return sum + num;
    }
    return arr.reduce(sumofArray)
}

function add(arr) {
    var count = 0;
    if (arr.length === 0) {
        return 0;
    } else {
        for (i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) === "boolean") {
                count += Number(arr[i]);
            } else if (typeof(arr[i]) === "number") {
                count += arr[i];
            } else if (typeof(arr[i]) === "string") {
                count += arr[i].length;
            } else {
                throw new Error("Unsupported data type sir or ma'am");

            }
        }
        return count;
    }
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(arr) {
    if (arr.length === 0) {
        return null;
    }
    var sum = netPrice(arr);
    return sum / arr.length;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        var sum = add(arr);
        return sum / arr.length;
    }
}

function avg(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        var sum = add(arr);
        return Number((sum / arr.length).toFixed(2));
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

function uniqueArray(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        var setarr = new Set(arr);
        return Array.from(setarr);
    }

}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(arr, element) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr.includes(element);
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

function howManyTimesElementRepeated(arr, ele) {
    if (arr.length === 0) {
        return 0;
    } else {
        var count = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === ele) {
                count += 1;
            }
        }
        return count;
    }
}
// Progression #8: Bonus
function maximumProduct(array) {
    return (new Set([new Set(array)])).size;
}
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