//document.body.style.backgroundColor = "black"
// document.body.style.color = "white"

// window.alert("Seja Bem-Vindo")
// window.prompt("Login")
// window.prompt("Senha")
//exemplo: site de sistemas de roteador

// window.confirm("Site com vírus, deseja continuar ? ")

//atributo name ao inves de tagname, exiset no input, por isso nao é possivel chamar outras variaveis por name como h1
 //tag => codumente.getElementByTagName("nome da tag") seleciona o elementos do tipo tag input, para selecionar elemento em posiçao especifica é [0] no final para pegar da primeria posiçao

 let paragrafo1 = document.getElementsByTagName("p")[0]
 paragrafo1.innerHTML = "usando tag name"
 paragrafo1.style.backgroundColor ="red"

 //for para alterar de todas as caixas, let altera de uma caixa só

 //chamar por id documnt.getElementById("nome") so pode ter um por tag entao nao precisa especificar a posiçao, nao tem id para tag, entao precisa se criar um id dentro de <p> por exemplo

 let paragrafo2 =  document.getElementById("paragrafo2")
 paragrafo2.innerHTML = "Usando id"
 paragrafo2.style.backgroundColor = "green"

 //class => document.getElementsBYClassName("nome-classe") precisa colocar  a posiçao 
 let paragrafo3 =  document.getElementsByClassName("paragrafo3")[0]
 paragrafo3.innerHTML= "usando classe"
 paragrafo3.style.backgroundColor= "blue"

 //name =>  document.getElementsByName("name")[0]
 //queryselector seleciona um elemento do html apartir de tag, id ou classe documnt.querySelector("input")  só seleciona um e por isso nao precisa informar posição; tag - nome da tag - input;  id - nome do id -#nome; class - nome da classe - .nome-classe

 let paragrafo4 = document.querySelector ("#paragrafo4")
 paragrafo4.innerHTML = "usando query"
 paragrafo4.style.backgroundColor = "pink"

 //queryselector all seleciona tudo, query selector apenas um; document.queryelectorall("input""noem do id""#nome"".nome")[0]

 let paragrafo5 = document.querySelectorAll("p")[4]
paragrafo5.innerHTML = "query all"
paragrafo5.style.backgroundColor= "purple"


