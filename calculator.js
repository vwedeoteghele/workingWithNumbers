const readline = require('readline');
rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
 });

function question(theQuestion) {
    return new Promise(resolve => rl.question(theQuestion, answ => resolve(answ)))
}

function calculator(a, b, c) {
  let acceptedOperators = ["+", "-", "/", "*", "%"]
  if(acceptedOperators.indexOf(c) === -1) {
    return `Input a valid operator from this list ${acceptedOperators.join(" ")}`
  }
  if(c === "+" ) {
    return `The sum of number ${a} and number ${b} is ${Number(a) + Number(b)}`; 
  } else if(c === "-") {
    return `The substraction of number ${b} from number ${a} is ${Number(a) - Number(b)}`; 
  } else if(c === "/") {
    return `The division of number ${a} by number ${b} is ${Number(a) / Number(b)}`; 
  } else if(c === "*") {
    return `The multiplication of number ${a} by number ${b} is ${Number(a) * Number(b)}`; 
  } else if(c === "%") {
    return `The remainder of number ${a} by number ${b} is ${Number(a) % Number(b)}`; 
  }
}


async function main() {
  let firstNum = await question("first number >> ")
  let secondNum = await question("second number >> ")
  let operator = await question("sign >> ")
  rl.close()
  let result = calculator(firstNum, secondNum, operator)
  console.log(result)
}

main()