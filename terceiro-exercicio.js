const produtosConsumidos = [
   {
      nomeProduto: "Coca-Cola",
      valorUnit: 700, //em centavos
      quantidade: 1
   },
   {
      nomeProduto: "Carne Bovina kg",
      valorUnit: 3000,
      quantidade: 1
   },
   {
      nomeProduto: "Arroz kg",
      valorUnit: 400,
      quantidade: 2
   }
]
let pessoa = {

   nome: 'João',
   idade: 21,
   produtosConsumidos
}


console.log(pessoa.nome) // João
console.log(pessoa.idade) // 21

//modifique a idade do cliente

pessoa.idade = 31;

console.log(pessoa.idade)

// imprimir o nome do primeiro produto consumido
console.log(pessoa.produtosConsumidos[0].nomeProduto)

//preco unitario do ultimo produto consumido por ele
console.log(pessoa.produtosConsumidos[produtosConsumidos.length - 1].valorUnit)