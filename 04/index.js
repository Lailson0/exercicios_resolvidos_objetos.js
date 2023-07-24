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
for (aluno of usuarios) {
    if (aluno.idade >= 18) {
        aluno.maior_idade = true
    } else {
        aluno.maior_idade = false
    }

    console.log(usuarios);
}



