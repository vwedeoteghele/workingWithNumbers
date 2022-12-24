function euler (decimalPlaces) {
  if (decimalPlaces < 0 || decimalPlaces > 100) {
    return "please enter a number between 0 and 100"
  }
  return Math.E.toFixed(decimalPlaces)
}

console.log(euler(210))