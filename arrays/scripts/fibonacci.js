/* Fibonacci */
let fibonacci = [0, 1, 1]

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci)
