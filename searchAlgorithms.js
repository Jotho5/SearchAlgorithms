//John Thomas
//CSCI 651 Binary v. Linear Search
//Due Date: April 14th 
// This is responsible for retrieving the users array input
const readline = require('readline-sync');
const array = readline.question('Enter your elements for the list (comma-separated): ').split(',').map(num => parseInt(num.trim()));
const target = parseInt(readline.question('Enter your target element: ').trim());

//Binary search function: This function records tbe users array and target value
const binarySearch = (arr, target) => {

  // This checks if the array is sorted, it takes an the array and checks
  if (!isSorted(arr)) {
    console.log('Binary search only works on sorted arrays.');
    return -1;
  }

  //Our initial variables for the loops beelow
  let left = 0;
  let right = arr.length - 1;
  let count = 0; // Initial number of iterations

  //counts the iteration as the algorithm searchs for the target
  while (left <= right) {
    let median = Math.floor((left + right) / 2);
    count++;

    //Checks for equality between the median value and target. 
    if (arr[median] === target) {
      console.log(`The search iterated its process: ${count} times`);
      return median;
    } else if (arr[median] < target) {
      left = median + 1;
    } else {
      right = median - 1;
    }
  }

  console.log(`The search iterated its process: ${count} times`);
  // -1 will be returned if the array could not find the target.
  return -1;
}

//Linear search function: This function takes tbe users array and target value
const linearSearch = (arr, target) => {
  let count = 0; // Initial number of iterations

  //Counts the iteration and until the target is found then the iterations will stop
  for (let John = 0; John < arr.length; John++) {
    //This variable is the iteration counter
    count++;

    //if the target is found this will return the iteration count
    if (arr[John] === target) {

      console.log(`The search iterated its process: ${count} times`);
      return John;
    }
  }


  console.log(`The search iterated its process: ${count} times`);
  // -1 will be returned if the array could not find the target.
  return -1;
}

// Check if an array is sorted
function isSorted(arr) {
  for (let John = 0; John < arr.length - 1; John++) {
    if (arr[John] > arr[John+1]) {
      return false;
    }
  }

  return true;
}

// Retrieves the user choice to choose Linear or Binary search method
const searchAlgorithm = readline.question('Choose a search algorithm? (binary/linear): ').toLowerCase();

//Ensures that the users input is correct
let result;
if (searchAlgorithm === 'binary') {
  if (!isSorted(array)) {
    console.log('Your array must be sorted first in order to use Binary Search');
  } else {
    result = binarySearch(array, target);
  }
} else if (searchAlgorithm === 'linear') {
  result = linearSearch(array, target);
} else {
  console.log('Invalid search type.');
}

//At the end of every function -1 is returned if there is no result found
if (result === -1) {
  console.log('Element not found. Please try again!');
} else {
  console.log(`Your target was found at index ${result}.`);
}