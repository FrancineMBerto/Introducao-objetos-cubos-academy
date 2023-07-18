const pessoa = {
   nome: "Francine",
   idade: 23,
   altura: 1.68,
   temCNH: true,
   apelido: ["Fran", "Franzinha", "Japinha"]
}

let situacao = (pessoa.temCNH) ? "possui" : "não possui"; // terniário

// if (pessoa.temCNH) {
//    situacao = "possui"
// } else {                       //substituido pelo ternário
//    situacao = "não possui"
// }

console.log(`${pessoa.nome} tem ${pessoa['idade']} anos, ${pessoa.altura}m de altura, ${situacao} CNH  e tem os seguintes apelidos: `)

for (let apelido of pessoa.apelido) {
   console.log(`- ${apelido}`); // mais intuitivo; podemos adicionar mais apelidos ao objeto.
}