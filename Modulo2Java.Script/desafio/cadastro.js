let p = document.getElementById("p")

let alunos = [
    {nome:"evelyn", nota: 0}
]


function adicionarAluno() {
    let nome = document.getElementById("nome").value 
    let nota = document.getElementById("nota").value 
    alunos.unshift ({nome, nota})
    atualizarLista()
}

let aluno = ({nome, nota})

function atualizarLista() {

alunos.forEach((aluno) => {
p.innerHTML += (` ${aluno.nome} possui nota ${aluno.nota}<br>`);
})
}
atualizarLista()
















