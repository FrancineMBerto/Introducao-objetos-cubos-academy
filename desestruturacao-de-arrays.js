const array = [1, 2, 3, 4, 5, 6];

// const a = array[0];
// const b = array[1];

//desestruturação
// const [a, ...resto, b] = array; Nao funciona.

const [a, b, c, ...resto] = array; //Funciona. rest tem que ser por ultimo

console.log(a, b, c, resto);