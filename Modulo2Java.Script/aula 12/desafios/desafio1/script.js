
function calcularMedia() {
    let nota1 = document.querySelector("#nota1").value
    let nota2 = document.querySelector("#nota2").value
    let resultado = document.getElementById("resultado")
    resultado.textContent = parseInt(nota1) + parseInt(nota2) / (2)
}