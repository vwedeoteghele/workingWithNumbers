function fibonacci(number) {
  /**
   * how to calculate a fibonacci sequence
   * if number is 0 return 0, if number is 1 return 0, 1
   * any subsequent number add the two previous number till you arrive at the number
   * 
   */

  let sequence = [0, 1]
  if (number === 1) return 1;
  if (number === 0) return 0;
  for(let i = 1; i <= number; i++) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])  
  }
  return sequence
}

console.log(fibonacci(20))