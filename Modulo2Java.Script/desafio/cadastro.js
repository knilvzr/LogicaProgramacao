
let p = document.getElementById("p");
let alunos = [
    {nome: "evelyn", nota: 0}
];


function exibirAlunos() {
    p.innerHTML = "";
    for (let aluno of alunos) {
        p.innerHTML += `${aluno.nome} possui nota ${aluno.nota}<br>`;
    }
}


exibirAlunos();

function adicionarAluno() {
    let nome = document.getElementById("nome").value;
    let nota = document.getElementById("nota").value;
    

    if (nome === "" || nota === "" || nota > 10 ) {
        alert("Por favor, preencha nome e nota!");
        return;
    }
    
    alunos.unshift({nome, nota: Number(nota)});

    document.getElementById("nome").value = "";
    document.getElementById("nota").value = "";
    
    exibirAlunos();
}

