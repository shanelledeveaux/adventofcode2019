add = (num1, num2) => num1 + num2;
multiply = (num1, num2) => num1 * num2;

function Intcode (input) {
  var replacementValue = 0;

  for (var i=0; i < input.length; i=i+4){
    console.log(i, input[i], input[i+1], input[i+2], input[i+3]);
    if (input[i] == 99){
      return input;
    }

    if (input[i] == 1){
      replacementValue = add(input[input[i+1]], input[input[i+2]])
      input.splice(input[i+3], 1, replacementValue)
    } else if (input[i] === 2) {
      replacementValue = multiply(input[input[i+1]], input[input[i+2]])
      input.splice(input[i+3], 1, replacementValue)
    }
  }
  return input;
}
