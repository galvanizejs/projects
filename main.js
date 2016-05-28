//Array for Days !!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.
  var myArray = [];
  myArray.push(3);
  myArray.push(4);
  myArray.unshift(2);
  myArray.unshift(1);

  //console.log("Question 1");
  //console.log(yourAnswer);


// 2. Add an additional item to the beginning of your Array.
  myArray.unshift(0);

// 3. Remove the second and third items.
  myArray.splice(1,2);

// 4. Add two new items after the second item.
  myArray.splice(1, 0, '8', '9');

// 5. Write 'The current length of the array is....' using the .length method
  console.log("The current length of the array is "+myArray.length+".");
  document.write("The current length of the array is "+myArray.length+".");

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
  things.splice(2, 1, "keyboard");

// 7. Combine all of the elements of the array into a string.
  var str = things.join(', ');

// 8. Declare a variable called lastItem whose using .pop() Add two new items to lastItem, on at the beginning and one at the end.
  var lastItem = [things.pop()]
  lastItem.unshift('beginning');
  lastItem.push('end');

// 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.
  var itemLast = lastItem.reverse();

// 10. Remove the first item of itemLast.
  itemLast.shift();

// 11. Remove all items from itemLast (No need to write to the document. Just console.log to test your results)
  //three different solutions to remove all items form array itemLast
  itemLast = [];
  itemLast.length = 0;
  itemLast.splice(0, itemLast.length);

  console.log(itemLast);

// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

  var numberPets = firstArray.concat(secondArray);

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'
  people.push('Gordon');
  people.push('Zack');

// 14. Remove everybody except 'Andrea' and 'Ted'
  people.splice(4, people.length);
  people.splice(2, 1);
  people.shift();

// 15. Add a new person to the beginning of the Array
  people.unshift('Victor');

// 16. Arrange the items alphabetically. Store this Array as orderedPeople
  var orderedPeople = people.sort();
  console.log(orderedPeople);
// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

  var arrayArray = [array1, array2, array3];
//here's my answer ^

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]
// 18. Remove "Sparky" and "White" from the above array of arrays.
  arrayArray[0].splice(3,1);
  arrayArray[2].splice(0,1);


// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]

  sortingNumbers.sort();

// Explain why it doesn't sort as expected.
  // .sort() method without a compareFunction as an argument will sort via unicode value,

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17]; //remove 34 and mug

var array1return = array1.splice(2, 4, array1[3], array1[4]);
array1.sort();
var last = array1.pop();
array1.unshift(last);


//Goal
var array2 = ['plant', 17, 2, 'Bill', 'dog'];
