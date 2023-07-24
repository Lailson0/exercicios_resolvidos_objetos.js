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
    }

]
// preciso usar o quant pets como contador da propiedade pets
//const [pets] = usuarios

for (index of usuarios) {
    if (index.pets.length === 0) {
        console.log(`Sou ${index.nome} e não tenho pets`);
    } else if (index.pets.length === 1) {
        console.log(`Sou ${index.nome} e tenho 1 pet`);
    } else if (index.pets.length === 2) {
        console.log(`Sou ${index.nome} e tenho 2 pets`);
    } else {
        console.log(`Sou ${index.nome} e tenho ${index.pets.length} pets`);
    }
}

