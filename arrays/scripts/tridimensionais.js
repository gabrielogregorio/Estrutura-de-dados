arr = [
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
  ],
  [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h']
  ]
]

console.log(arr)

for (let x = 0; x < arr.length; x++) {
  for (let i = 0; i < arr[x].length; i++) {
    for (let j = 0; j < arr[x][i].length; j++) {
      console.log(arr[x][i][j])
    }
  }
}