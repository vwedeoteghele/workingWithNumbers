
/**
 * temperature converter
 */
 const arr = [
  "1: Celsius to Fahrenheit",
  "2. Celsius to Kelvin",
  "3. Fahrenheit to Celsius",
  "4. Fahrenheit to Kelvin",
  "5. Kelvin to Celsius",
  "6. Kelvin to Fahrenheit"
]

console.log(arr.join(" \n"))
const readline = require('readline');
rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
 });

function question(theQuestion) {
    return new Promise(resolve => rl.question(theQuestion, answ => resolve(answ)))
    
}

async function tempConverter() {
  let conTemp, unit, index, temp;
  let selection = await question("What do you want to to from the list above >> ")
  if (selection === "1") {
    index = 0
    let questionParams = arr[index].split(" ").splice(1).join(" ")
    temp = await question(`What is the temperature amount to convert from ${questionParams} >> `)
    rl.close()
    conTemp = (Number(temp) * 1.8 + 32).toFixed(2)
    unit = "F"
    
  } else if(selection === "2") {
    index = 1
    let questionParams = arr[index].split(" ").splice(1).join(" ")
    temp = await question(`What is the temperature amount to convert from ${questionParams} >> `)
    rl.close()
    conTemp = (Number(temp) + 273.15).toFixed(2);
    unit = "K"
    
  } else if(selection === "3") {
    index = 2
    let questionParams = arr[index].split(" ").splice(1).join(" ")
    temp = await question(`What is the temperature amount to convert from ${questionParams} >> `)   
     rl.close()
    conTemp = (((Number(temp) - 32) * 5) / 9).toFixed(2) ;
    unit = "C"
  }  else if(selection === "4") {
    index = 3
    let questionParams = arr[index].split(" ").splice(1).join(" ")
    temp = await question(`What is the temperature amount to convert from ${questionParams} >> `)   
     rl.close()
    conTemp = (((Number(temp) - 32) * 5) / 9 + 273.15).toFixed(2)
    unit = "K"
  } else if(selection === "5") {
    index = 4
    let questionParams = arr[index].split(" ").splice(1).join(" ")
    temp = await question(`What is the temperature amount to convert from ${questionParams} >> `)   
     rl.close()
    conTemp = (Number(temp) - 273.15).toFixed(2)
    unit = "C"
  } else if(selection === "6") {
    index = 5
    let questionParams = arr[index].split(" ").splice(1).join(" ")
    temp = await question(`What is the temperature amount to convert from ${questionParams} >> `)    
    rl.close()
    conTemp = ((Number(temp) - 32) * 5 / 9 + 273.15).toFixed(2)
    unit = "F"
  } else {
    console.log("This is not a valid selection");
  }
let position = arr[index].split(" ").splice(1).join(" ")
console.log(`The result of ${temp} ${position} is ${conTemp}${unit}`);
}

tempConverter()