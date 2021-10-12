let numbers = [1, 2, 3]

numbers.push(4)        // Inserir depois
numbers.unshift(0)     // Inserir antes
console.log(numbers)

numbers.pop()         // Remover o ultimo
numbers.shift()       // Remover o primeiro
console.log(numbers)

numbers.splice(1, 1)
console.log('A partir do 2, remova 1')
console.log(numbers)


console.log('A partir da posicao 1, adicione o texto Ola')
numbers.splice(1,0, 'ola mundo', 'legal')
console.log(numbers)
