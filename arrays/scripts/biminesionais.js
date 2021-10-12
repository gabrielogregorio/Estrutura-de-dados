let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 0]
]

console.log(arr)
console.log(arr[1])
console.log(arr[1][1])

// Percorrer e exibir todos os elementos
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j])
  }
}
