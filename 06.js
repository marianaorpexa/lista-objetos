// separar os usuarios que tem <18 e os de >18
// criar novos JOVENS E ADULTOS

const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
const jovens = [];
const adultos = [];
let indiceJovens = 0;
let indiceAdultos = 0;

for (usuario of usuarios) {
    if (usuario.idade < 18) {
        jovens[indiceJovens] = usuario;
        indiceJovens++;

    } else {
        adultos[indiceAdultos] = usuario;
    }
}
console.log(jovens, adultos);
