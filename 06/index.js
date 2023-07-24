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
const jovens = []
const adultos = []

for (index of usuarios) {
    if (index.idade < 18) {
        jovens.push(index);
    } else {
        adultos.push(index);
    }
}
console.log("lista de jovens", jovens);
console.log("lista de adultos", adultos);
