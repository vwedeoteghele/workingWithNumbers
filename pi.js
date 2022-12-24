function pi (decimalPlaces) {
  if (decimalPlaces < 0 || decimalPlaces > 100) {
    return 'please input a number between 0 and 100'
  }
  return Math.PI.toFixed(decimalPlaces)
}

console.log(pi(50))