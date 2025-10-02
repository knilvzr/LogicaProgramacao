let listaProdutos = [
    {nome:"computador", fabricante: "dell", valor: 200},
    {nome:"notebook",fabricante: "acer", valor:201 },
    {nome:"mouse",fabricante: "reddragon", valor:202 },
    {nome:"teclado" ,fabricante: "samsung", valor:203 },
    {nome:"celular",fabricante: "xiaomi", valor:204 }
]
//console.log((listaProdutos[2]))
// => é uma maneira simplificada de que se foi escrita uma função
 listaProdutos.forEach((produto) => {
    console.log(`O ${produto.nome} da ${produto.fabricante} custa R$: ${produto.valor}` );
})

let listaProdutosCaros = listaProdutos.filter(produto => produto.valor > 1000)
console.log(listaProdutosCaros);


 