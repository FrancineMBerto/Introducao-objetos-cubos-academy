const carro = {
   marca: "Toyota",
   modelo: "Etios",
   ano: 2020,
   potencia: 80
};

const minhaAltura = 1.68;

const pessoa = {
   nome: "Francine",
   altura: minhaAltura, // se colocarmos apenas altura: (sem valor) dará erro. ela precisa estar declarada como variavel etc....   
   peso: 60,
   carro // colocando a variavel carro com os objetos aqui dentro deste objeto
}; //shorthand/atalho ===-> quando for o mesmo nome carro: carro podemos ocultar

console.log(pessoa)

// const pessoa = {
//    nome: "Francine",
//    altura: 1.68,
//    peso: 60,
//    carro: {              //objetos dentro de objetos.   //carro> marca, modelo, ano, potencia
//       marca: "Toyota",
//       modelo: "Etios",
//       ano: 2020,
//       potencia: 80
//    }
// };

// console.log(pessoa.carro.marca)
