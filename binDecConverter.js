

function binaryToDecimal(binary) {
  let binaryString = String(binary).split("").reverse().map((value, index) => {
    return Math.pow(2, index) * Number(value)})
  .reduce((acc, current) => { return acc + current}, 0)
    
  console.log(binaryString);
}

// binaryToDecimal(1110011)

function decimalToBinary(decimal) {
  let remainder = ""
  let newNum = decimal
  while(newNum >= 1) {
    if (newNum % 2 !== 0) {
      remainder += '1'
    } else  {
      remainder += "0"
    }
    newNum = Math.floor(newNum / 2)
  }
  remainder = remainder.split("").reverse().join("")
  console.log(remainder);
}

decimalToBinary(158)