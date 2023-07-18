//spread ...   =em ingles =espalhar;
//espalha o conteudo do objeto pessoa

const pessoa = {
   nome: "Ana",
   idade: 28,
   cidade: "São-Paulo",
   profissao: "Manicure"
};

//juntar dois objetos em um só

const endereco = {
   rua: "Catarina Santa",
   numero: "84",
   bairro: "Bairro Sul"
};

//aqui:::

// const mesclagem = {
//    nome: pessoa.nome,    //jeito dificil
//    idade: pessoa.idade,
//    rua: endereco.rua
// }

const mesclagemDeObjetos = {
   ...pessoa,
   ...endereco             //jeito facil de mesclar os objetos pessoa e endereco
}
console.log(mesclagemDeObjetos)