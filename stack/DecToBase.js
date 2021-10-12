function dec2Base(decNumber, base) {
  let restStack = []
  let rest = 0;
  let baseString = ''
  let digits = '0123456789ABCDEF'

  while (decNumber > 0) {
    rest = Math.floor(decNumber % base) // floor arredonda para baixo
    restStack.push(rest)
    decNumber = Math.floor(decNumber / base)
  }

  while(restStack.length > 0) {
    baseString += digits[restStack.pop()]
  }
  return baseString
}

console.log(dec2Base(256, 8))