// Objeto é um conjunto de dados ou funcionalidades relacionadas(ex pessoa: nome, altura, peso......)
//Serve para agrupar varias variaveis, propriedades do objetos e funcionalidades.
//utilize chaves para criar objetos // utilize virgula para separar cada chave do objeto
const pessoa = {
   nome: "José",                    // [nome: "José"]   -->  Membro (ou propriedade)
   altura: 1.73,                   // [altura]   -->  Nome (ou chave)
   peso: 60,                      // [60]   --> Valor
   temCNH: true,                  // [true]  --> Valor 
   apelidos: ["Zézin", "Zé"]    // ["Zézin", "Zé"]  --> Valor
}


console.log(pessoa.nome); // formas de manipular objetos: pessoa.nome , pessoa[nome]
console.log(`Meu nome é ${pessoa.nome}`)
pessoa['nome'] = "Pedro"; // mudou o valor da chave/nome de jose para pedro
console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m de altura e peso ${pessoa.peso} kg.`)