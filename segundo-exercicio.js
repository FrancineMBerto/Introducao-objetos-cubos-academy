//crie um objeto que represente o cartão de consumo de um cliente. DEVE TER:
//Nome do cliente; Idade do cliente; Produtos consumidos. CADA PRODUTO PODE TER:
//Nome do produto; Preço unitario (emcentavos); Quantidade comprada. INVENTE os dados e CRIE NO MINIMO 3 PRODUTOS!.

const produtosConsumidos = [
   {
      nomeProduto: "Natural Look",
      precoUnidade: 1500, //em centavos
      quantidade: 2
   },
   {
      nomeProduto: "Cover UP",
      precoUnidade: 3999, //em centavos
      quantidade: 2
   },
   {
      nomeProduto: "WEPINK",
      precoUnidade: 19999,
      quantidade: 1
   }

];
const cliente = {
   nome: "Angelica",
   idade: 18,
   produtosConsumidos //shorthand
};

console.log(cliente)


//eu tentando outros formatos, mas fiquei com duvidas

// const produtosConsumidos = {
//    nomeProduto: ["Natural Look", "Cover UP", "WePink Beauty"],
//    precoUnidade: [1500, 3999, 19999], //em centavos
//    quantidadeComprada: [2, 2, 1]
// }

// const cliente = {
//    nome: "Angelica",
//    idade: 18,
//    produtosConsumidos

// }

// console.log(cliente.produtosConsumidos)

//resolucao profesor::::
console.log("")
const cartao = {
   nome: "José",
   idade: 30,
   produtosConsumidos: [
      {
         nome: "Pão de Alho",
         precoUnit: 1500,
         quantidade: 3
      },
      {
         nome: "Cerveja",
         precoUnit: 1000,
         quantidade: 2
      },
      {
         nome: "Agua",
         precoUnit: 500,
         quantidade: 1
      }
   ]
}
console.log(cartao)