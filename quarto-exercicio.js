//faca um programa que imprime uma mensagem amigavel que inclui chamar o cliente pelo nome que informa o que ele deve pagar;
const produtosComprados = [
   {
      nomeProduto: "Novelo de lã",
      valorUnit: 1899, //em centaavosssssss
      quantidade: 2
   },
   {
      nomeProduto: "Agulha de Costura",
      valorUnit: 50, //em centaavosssssss
      quantidade: 6
   },
   {
      nomeProduto: "Tecido metro",
      valorUnit: 2500, //em centaavosssssss
      quantidade: 2
   }

]

const pessoa = {
   nome: "Francisvalda",
   idade: 63,
   produtosComprados
}




let totalAPagar = 0;
for (let produto of produtosComprados) {
   totalAPagar += produto.valorUnit * produto.quantidade;
}
const totalFormatado = (totalAPagar / 100).toFixed(2) // primeiro trabalha o dado depois formato para nao ter problemas de codigo...
console.log(` Sra ${pessoa.nome} adora costurar, o total a pagar em seus itens de costura será de ${totalFormatado} Reais.  `)
