function calcularPagamento() {
    let valorGasto =  parsefloat(document.getElementById("valorCompra").value)
    let formaPagamento = document.getElementById("formaPagamento").value
    let resultado = document.querySelector("#resultado")

    switch (formaPagamento) {
        case "pix": 
            let valorFinal = valorGasto*0.9
            resultado.innerHTML = "o valor a ser pago é de " + valorFinal.toFixed(2)
            break
        case "debito": 
            valorFinal = valorGasto*0.95
            resultado.innerHTML = "o valor a ser pago é" +valorFinal.toFixed(2)
            break
        case "debito": 
            valorFinal = valorGasto*1
            resultado.innerHTML = "o valor a ser pago é" +valorFinal.toFixed(2)
            break
        default:
            resultado.innerHTML = "valor invalido"
            break
    }
}
