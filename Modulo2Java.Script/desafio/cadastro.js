
let p = document.getElementById("p");
let alunos = [
    {nome: "evelyn", nota: 0}
];

let mostrarApenasAprovados = false;

function exibirAlunos() {
    p.innerHTML = "";
    
    let alunosParaExibir = alunos;
    if (mostrarApenasAprovados) {
        alunosParaExibir = alunos.filter(aluno => aluno.nota >= 7);
    }
    if (alunosParaExibir.length === 0) {
        p.innerHTML = "Nenhum aluno para exibir";
        return;
    }
    for (let aluno of alunosParaExibir) {
        const corClasse = aluno.nota >= 7 ? 'aprovado' : 'reprovado';
        p.innerHTML += `<span class="${corClasse}">${aluno.nome} - Nota: ${aluno.nota}</span><br>`;
    }
}
    

//function exibirAlunos() {
    //p.innerHTML = "";
    //for (let aluno of alunos) {
        //p.innerHTML += `${aluno.nome} possui nota ${aluno.nota}<br>`;
    //}
//}


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
function mostrarAprovados() {
    mostrarApenasAprovados = true;
    exibirAlunos();
}

function mostrarTodos() {
    mostrarApenasAprovados = false;
    exibirAlunos();
}

exibirAlunos();

