
const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

for (const usuario of usuarios) {
    const { pets , nome } = usuario;

    if (pets.lenght > 0) {
        if (pets.lenght > 1) {
            console.log(`Sou ${nome} e tenho ${pets.lenght} pets`);
        } else {
            console.log(`Sou ${nome} e tenho ${pets.lenght} pet`);
        }

    } else {
        console.log(`Sou ${nome} não tenho pets`);

    }
}
