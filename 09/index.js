const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

let posicao = 0;

//for (index of participantes) {
for (let index = 0; index < participantes.length; index++) {
    // console.log(participantes[index]);

    if (participantes[index].nome == "Carlos") {
        posicao = index + 1;
        break;
    }

}
//console.log(posicao);
console.log(`Galera... O Carlos está na posição ${posicao}, corre lá!`);