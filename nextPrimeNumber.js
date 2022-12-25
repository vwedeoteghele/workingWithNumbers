/**
 * program to get the next prime number
 */

const readline = require("readline")

const rl =
 readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

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

function nextPrimeNumber(currentPrimeNumber) {
    for(let i = currentPrimeNumber + 1; ; i++) {
      let prime = isPrime(i)
      if(prime) {
        return i;
      }
    }
}

let currentPrimeNumber = 1;
function ask() {
  rl.question("What is your command\n", function (string) {
      let currentCommand = string;
           if (currentCommand != 'Y') {
          console.log('We are done.');
          rl.close();
      } else {
        currentPrimeNumber = nextPrimeNumber(currentPrimeNumber)
        console.log(currentPrimeNumber);
          ask();
      }
  });
}

ask();
