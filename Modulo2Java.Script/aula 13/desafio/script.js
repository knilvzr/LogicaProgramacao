function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = document.querySelector("#resultado"); 
    let operacao = document.querySelector("#operacao").value; 


    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerHTML = "digite um valor"
    }
    else if (operacao == "+") {
        resultado.innerHTML = num1 + num2

    } else if (operacao == "-") {
        resultado.innerHTML = num1 - num2
    } else if (operacao == "*") {
        resultado.innerHTML = num1 * num2
    } else if (operacao == "/") {
            resultado.innerHTML = num1/num2
    } 
}
