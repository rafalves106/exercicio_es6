const alunos = [
    {nome: 'Pedro', nota: 6},
    {nome: 'Julia', nota: 3},
    {nome: 'Juliana', nota: 9},
    {nome: 'Roberto', nota: 5},
    {nome: 'Caio', nota: 6.5}
];

const alunosAcimaDaMédia = alunos.filter(item => item.nota >= 6);

console.log(alunosAcimaDaMédia)