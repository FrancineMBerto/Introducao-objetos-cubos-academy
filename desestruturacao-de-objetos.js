//destructuring

const pessoa = {
   nome: "Ana",
   idade: 28,
   cidade: "São-Paulo",
   profissao: "Manicure"
};

// const nome = pessoa.nome;
// const idade = pessoa.idade; ...
// const cidade = pessoa.cidade
const { nome, idade, ...outros } = pessoa; //isso faz a mesma coisa que o comentário acima.
console.log(nome, idade)
console.log(outros)//...outros = acessa o restante(tudo que sobrou) spread...
//... outros = cria um novo objeto com os restantes, quebra o objeto;