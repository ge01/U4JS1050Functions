function getNumber(){
  var number = prompt('Enter a number:');
  number = parseInt(number); // convert string to a number
  if (number < 0){
    number = 0;
  }
  return number;
}

// get first number
var number1 = getNumber();
// get second number
var number2 = getNumber();
// display the result
console.log(number1 + number2);
