/*===================================
Trying somthing new here...not sure what happens when i create a new branch for this commit...

here we go!
===================================*/

//Week 1 - Project 1

// Log all answers to the console and write them to document
// =======================================================

//1. Log your name to the console (as a string).
  console.log('Gordon Graham');
  document.write('Gordon Graham');

//2. Declare a variable called name, log it to the console.
  var name='Gordon';
  console.log(name);
  document.write(name);

//3. Declare two variables with number values. Add, subtract, multiply and divide them.
  var num1=2;
  var num2=1;
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(num1 / num2);

  document.write(num1 + num2);
  document.write(num1 - num2);
  document.write(num1 * num2);
  document.write(num1 / num2);

//4. Declare two variables with string values. Create a third variable that concatenates them.
  var str1 = "JavaScript is...";
  var str2 = "AWESOME";
  var str3 = str1 + str2;
  console.log(str3);
  document.write(str3);

//5. Add, subract, multiply and divide the strings '5' and '3'. Observe and explain the results.
  document.write('5' +'3');
      //adding two strings concatenates them, '5'+'3' = '53', where 53 is a string value
  document.write('5' -'3');
      //JavaScript converts the strings to numerical values and subtracts them '5'-'3'= 2, where 2 is a number value
  document.write('5' *'3');
      //JavaScript converts the strings to numerical values and multiplies them '5'*'3'= 15, where 15 is a number value
  document.write('5' /'3');
      //JavaScript converts the strings to numerical values and divides them '5'/'3'= 2, where 1.666 is a number value


//6. Create a prompt that asks a user to pick a number. Double the answer.
  var number = prompt("Pick a number...");
  document.write(number*2);

//7. Create a custom alert.
  alert("This is a custom alert. =D");

//8. Declare three variables called length, width and height. Calculate area and volume.
  var l = 3;
  var w = 4;
  var h = 5;
  var area = 2*(l*w +l*h +w*h);
  var vol = l*w*h;
  document.write(area);
  document.write(vol);

//9. Ask for a user's name, age and city. In a single command display/log the sentence:
// "My name is...I'm....years old, and I live in....."
  var name = prompt("What is your name?");
  var age = prompt("What is your age?");
  var city = prompt("What is your current city?");
  console.log(document.write("My name is "+name+", I'm "+age+" years old, and I live in "+city+"."))

//10. Create an alert that uses the response from a prompt.
  var name = prompt("What is your name?");
  alert("Hello, "+name+". You look wonderful today. =D");
