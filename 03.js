const usuario = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    cor_preferida: "verde",
}
// 1 passo dessestruturar obj
const { nome, idade, profissao, cor_preferida } = usuario;
console.log(`Olá... Eu sou ${nome} e tenho ${idade} anos de idade. Sou ${profissao} e minha cor preferida é ${cor_preferida}!`);