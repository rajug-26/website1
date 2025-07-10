function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log("Max:", max);
  console.log("Min:", min);
}

// Example:
findMaxMin([5, 2, 9, 1, 7]);




function findSecondMaxMin(arr) {
  let max = -Infinity, secondMax = -Infinity;
  let min = Infinity, secondMin = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val > max) {
      secondMax = max;
      max = val;
    } else if (val > secondMax && val !== max) {
      secondMax = val;
    }

    if (val < min) {
      secondMin = min;
      min = val;
    } else if (val < secondMin && val !== min) {
      secondMin = val;
    }
  }

  console.log("Second Max:", secondMax);
  console.log("Second Min:", secondMin);
}

// Example:
findSecondMaxMin([10, 20, 5, 7, 20]);





function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log(arr);
}

// Example:
sortArray([5, 2, 9, 1, 7]);







function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result[result.length] = arr[i];
    }
  }

  console.log(result);
}

// Example:
removeDuplicates([1, 2, 2, 3, 3, 4]);





function removeDuplicateChars(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (str[i] === result[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result += str[i];
    }
  }

  console.log(result);
}

// Example:
removeDuplicateChars("HelloWorld"); // Output: HeloWrd




function camelToSnake(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= "A" && ch <= "Z") {
      result += "_" + (ch.toLowerCase()); // Convert capital to small
    } else {
      result += ch;
    }
  }

  console.log(result);
}

// Example:
camelToSnake("thisIsCamelCase"); // Output: this_is_camel_case




function snakeToCamel(str) {
  let result = "";
  let toUpper = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      toUpper = true; // Next letter should be capital
    } else {
      if (toUpper) {
        result += str[i].toUpperCase();
        toUpper = false;
      } else {
        result += str[i];
      }
    }
  }

  console.log(result);
}

// Example:
snakeToCamel("this_is_snake_case"); // Output: thisIsSnakeCase





function flattenArray(arr) {
  let result = [];

  function flatten(current) {
    for (let i = 0; i < current.length; i++) {
      if (Array.isArray(current[i])) {
        flatten(current[i]); // Recurse for nested arrays
      } else {
        result[result.length] = current[i];
      }
    }
  }

  flatten(arr);
  console.log(result);
}

// Example:
flattenArray([1, [2, [3, 4], 5], 6]); // Output: [1, 2, 3, 4, 5, 6]






function secondLargestNested(arr) {
  let flat = [];

  function flatten(current) {
    for (let i = 0; i < current.length; i++) {
      if (Array.isArray(current[i])) {
        flatten(current[i]);
      } else {
        flat[flat.length] = current[i];
      }
    }
  }

  flatten(arr);

  // Find max and 2nd max
  let max = -Infinity, second = -Infinity;

  for (let i = 0; i < flat.length; i++) {
    if (flat[i] > max) {
      second = max;
      max = flat[i];
    } else if (flat[i] > second && flat[i] != max) {
      second = flat[i];
    }
  }

  console.log("Second Largest:", second);
}

// Example:
secondLargestNested([1, [2, 9], [10, 15, [12]]]);






function generatePattern() {
  let count = 1;

  for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
      line += count + " ";
      count++;
    }

    console.log(line.trim());
  }
}

generatePattern();




function addZeroAfter3(arr) {
  let result = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    result[result.length] = arr[i]; // add original value
    count++;

    if (count === 3) {
      result[result.length] = 0; // add zero
      count = 0;
    }
  }

  console.log(result);
}

// Example:
addZeroAfter3([1, 2, 3, 4, 5, 6, 6, 7, 8]);
// Output: [1,2,3,0,4,5,6,0,6,7,8,0]



function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  console.log(reversed);
}

// Example:
reverseString("Hello"); // Output: "olleH"



function fibonacciSeries(n) {
  let a = 0, b = 1;
  let result = [a, b];

  for (let i = 2; i < n; i++) {
    let next = a + b;
    result[result.length] = next;
    a = b;
    b = next;
  }

  console.log(result);
}

// Example:
fibonacciSeries(7); // Output: [0, 1, 1, 2, 3, 5, 8]




function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}

// Example:
let original = { name: "John", address: { city: "Pune" }, skills: ["JS", "HTML"] };
let cloned = deepClone(original);
console.log(cloned);






function countElements(arr) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (freq[el]) {
      freq[el]++;
    } else {
      freq[el] = 1;
    }
  }

  console.log(freq);
}

// Example Array:
countElements([1,2,3,3,5,2,1,7,6,8,7,8]);

// Example String:
function countChars(str) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (freq[ch]) {
      freq[ch]++;
    } else {
      freq[ch] = 1;
    }
  }

  console.log(freq);
}

countChars("abcdaabdlfjl");




function capitalizeWords(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let capitalized = word[0].toUpperCase(); // first letter

    for (let j = 1; j < word.length; j++) {
      capitalized += word[j]; // add rest letters
    }

    result[result.length] = capitalized;
  }

  console.log(result);
}

// Example:
capitalizeWords(['abc', 'def', 'ghi']); // Output: ['Abc', 'Def', 'Ghi']




function sumMarks(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i].marks;
  }

  console.log("Total Marks:", total);
}

// Example:
let marksArray = [
  { sub: 'Maths', marks: 60 },
  { sub: 'Science', marks: 70 },
  { sub: 'English', marks: 90 }
];
sumMarks(marksArray); // Output: 220




let todos = [];

function addTodo(task) {
  todos[todos.length] = task;
}

function removeTodo(index) {
  for (let i = index; i < todos.length - 1; i++) {
    todos[i] = todos[i + 1];
  }
  todos.length = todos.length - 1;
}

function editTodo(index, newTask) {
  todos[index] = newTask;
}

function showTodos() {
  console.log(todos);
}

// Example:
addTodo("Learn JS");
addTodo("Practice");
editTodo(1, "Practice More");
removeTodo(0);
showTodos(); // Output: ['Practice More']




function mergeUnique(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    result[result.length] = a[i];
  }

  for (let j = 0; j < b.length; j++) {
    let found = false;
    for (let k = 0; k < result.length; k++) {
      if (b[j] === result[k]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result[result.length] = b[j];
    }
  }

  console.log(result);
}

// Example:
mergeUnique([1, 2, 3, 4, 5], [5, 3, 7, 8, 9]);
// Output: [1, 2, 3, 4, 5, 7, 8, 9]




function countFreq(arr) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }

  console.log(freq);
}

// Example:
countFreq([1, 1, 2, 3, 3, 3]);
// Output: {1:2, 2:1, 3:3}