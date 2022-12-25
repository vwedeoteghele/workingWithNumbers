function primeFactors(number) {
  /**
   * when you recieve a number lets say 12
   * divide it by the lowest prime number which is 2 to give you 6
   * then divide again by 2 which gives you 3
   * then divide again by 2 if you cannot, divide by the next smallest prime number
   * divide by 3 which gives you 1, at this point tak all the divisor and display
   * if any one appears more than once display it once
   * get the next 
   */
//  console.log("got here");
  function isPrime(num) {
    let sqrtnum = Math.floor(Math.sqrt(num));
      let prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }

   function nextPrimeNumber(currentprime) {
    let returnValue;
     for(let i = currentprime + 1; ; i++) {
      let newPrime = isPrime(i)
      
      if(newPrime) {
        return i
        // returnValue = i
      }
     }
    //  return returnValue
  }

  const primeFactorSet = new Set()
  let primeNumber = 2;
  let currentWholeNumber = number;
  while (currentWholeNumber != 1) {
   
    let division = currentWholeNumber / primeNumber;
    console.log(division)
    if (Number.isInteger(division)) {
      currentWholeNumber = division
      primeFactorSet.add(primeNumber)
      console.log("cwn",currentWholeNumber);
    } else {
      primeNumber = nextPrimeNumber(primeNumber)
    }
  }
return primeFactorSet
}

console.log(primeFactors(15))