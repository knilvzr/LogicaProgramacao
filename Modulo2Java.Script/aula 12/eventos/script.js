//java vem depoid etodo conteudo html por ter que carregar todo o body e depois aplicar o java  diferente docss, que carrega antes do conteudo

//criaçao de vento em tag html (2 maneiras dentro do html e dentro do dom)

//f12 console para ver erros 

let caixa = document.getElementById("mouse")
let nome = document.querySelector("#nome").value

function entradaMouse() {
    caixa.style.backgroundColor = "blue"
}
function saidaMouse() {
    caixa.style.backgroundColor = "deeppink"
}
function mudaHtml() {
    c//por a variVavel exisir no começo do codigo a variavel vem vazia por isso tem necesidade de declarar ela denovo atribuindo um valor a ela
    caixa.textContent = nome
}