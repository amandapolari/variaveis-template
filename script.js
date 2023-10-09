//=> SINTAXE BÁSICA <=

// 1. COMENTÁRIOS:

// Isso é um comentário de uma linha

/*
Isso 
é 
um
Comentário 
de 
muitas 
linhaaaas!
*/

// 2. IMPRIMINDO NO CONSOLE:
// console.log("Olá Mundo");
// console.log("Aulinha básica de JS <3");

// 3. PROMPT
// prompt("Qual é o seu nome?");
// prompt("Qual é a sua idade");
// console.log(prompt("Qual é o seu nome?"))

// => PRÁTICAS
// 1. PRIMEIRA PRÁTICA
// const nome = "Amanda Oliveira Polari de Alcântara";
// const nome = prompt("Qual é o seu nome?");
// console.log(nome);
// console.log(typeof nome) //PROMPT SEMPRE DEVOLVE UMA STRING

// nome = "Ana";
// console.log(nome);

//let idade = 27;
// let idade = Number(prompt("Qual é a sua idade?"));
// console.log(idade);
// console.log(typeof idade) //PROMPT SEMPRE DEVOLVE UMA STRING

// idade = 28;
// console.log(idade);

// Vírgulas se tornam espaços no console.log:
// console.log("Olá!", "Meu nome é", nome, "e eu tenho", idade, "anos de idade");

// 2. SEGUNDA PRÁTICA
//cenário A
let temPet = false;
let nomePet = null;

//cenário B
// temPet = true;
// nomePet = "Naive"

// Testando tipo
// console.log("Tipo da variável", typeof nome);
// console.log("Tipo da variável idade", typeof idade);

// console.log(temPet);
// console.log(typeof temPet);

// console.log(nomePet);
// console.log(typeof nomePet);

//======================
// EXERCÍCIO DE FIXAÇÃO

const marcaFoneDeOuvido = 'JBL';
let anosDeUso = 3;
let estadoNovo = false;

// => Melhorando

console.log('Tipo da variável marcaFoneDeOuvido', typeof marcaFoneDeOuvido);

console.log('Tipo da variável anosDeUso', typeof anosDeUso);

console.log('Tipo da variável estadoNovo', typeof estadoNovo);

//--Antes

// console.log(typeof marcaFoneDeOuvido, typeof anosDeUso, typeof estadoNovo);

// console.log(marcaFoneDeOuvido, anosDeUso, estadoNovo);

console.log(
    'Eu escolhi o objeto fone de ouvido da marca',
    marcaFoneDeOuvido,
    'que possui',
    anosDeUso,
    'anos de uso',
    'e não está em estado novo'
);

// =================================

let A = 10;
let B = 20;
let C;

A = B;
B = A;
