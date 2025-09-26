// for i in range (1, 10, 1): print(i) no python
// i ++ ir de um em um a variavel
// inicio, fime incremento (i = 0, i<=10)
//vai colocando de 1 em um enquanto i for menor ou giual a 10 
for (let i = 0; i <=10; i++) {
    console.log(i)
}

//percorrer um array com o for
let listaProdutos = ["pc", "notebook","teclado", "mouse"]
for (let i = 0; i < listaProdutos.length; i++ ) {
    console.log(listaProdutos[i])
}

//percorrer array - foreach
listaProdutos.forEach ((produto) => {
    console.log(produto);

}) //for produto in listaprodutos

//diferença de aarray para objeto, objetos é composto por chaves e valores. (api, json = chave), objetos = dicioario, objeto dentro do java const produto = { chave:"valor", nome:"notebook"}
let produto = {
    nome:"computador",
    fabricante: "positivo",
    preco: 300
 }
console.log(produto.nome) // ou console.log(produto[nome])
//adicionar um item no objeto
produto.armazenamento = "256gb"
produto["memoria RAM"] = "8gb"
delete produto.fabricante
console.log(produto)