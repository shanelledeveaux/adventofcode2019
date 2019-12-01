massCalculator = (num) => Math.floor(num / 3) - 2;

tyrannyRocket = (input) => {
  var sum = 0;

  for (let i = 0; i < input.length; i++) {
    var currentMass = input[i];

    while(currentMass > 0){
      currentMass = massCalculator(currentMass)
      if(currentMass > 0){
        sum += currentMass
      }
    }
  }
  return sum;
}
