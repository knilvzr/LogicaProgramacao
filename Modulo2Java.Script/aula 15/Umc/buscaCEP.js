//https://viacep.com.br/ws/colocar cep/json
//try catch tenta se comunicar com o banco e caso esteja indisponivel o programa nao vai dar erro, vai apenas tratar o erro e tentar recomunicar o servidor com o banco
//async nao possui resposta imediata mas permite que continue mexendo no site sem resposta do banco
//await espera ate que a requisiçao seja respondida
const cep = document.getElementById("cep")

cep.addEventListener("change", (evento)=> {
    let cepUsuario = evento.target  
    buscaCEP(cepUsuario.value)
})

async function buscaCEP(cepUsuario){

    let erroCep = document.getElementById("erro")
    erroCep.innerHTML = ""


    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json`)
        let consultaCEPJson = await consultaCEP.json()

        if(consultaCEPJson.erro){
            throw Error ("CEP INEXISTENTE");
            
        }
        
        preencheCampos(consultaCEPJson)
    }
    catch {
        erroCep.innerHTML = "CEP INVÁLIDO, TENTE NOVAMENTE !!"
        apagaCampo()
    }



}

function preencheCampos(cepJson) {
    let rua = document.getElementById("rua");
    let bairro = document.getElementById("bairro") ;
    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");
    rua.value = cepJson.logradouro
    bairro.value = cepJson.bairro
    cidade.value = cepJson.localidade
    estado.value = cepJson.uf
}

function apagaCampo(){
    let rua = document.getElementById("rua");
    let bairro = document.getElementById("bairro") ;
    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");
    rua.value = ""
    bairro.value = ""
    cidade.value = ""
    estado.value = ""

}


