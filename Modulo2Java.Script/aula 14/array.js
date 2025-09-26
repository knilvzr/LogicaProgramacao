//array  é uma variavel que armazena diversos valores, dentro de uma variavel, no let por exemplo da pra armazenar um valor apenas, lista no python = array
 let listaTimes = ["Santos", "São Paulo", "Palmeiras", "Corinthians"]

 //acessar um item do array
 console.log(listaTimes[0]);
 console.log(listaTimes[1]);
 console.log(listaTimes[2]);
 console.log(listaTimes[3]);
 
 //append no python para adicionar elementos, ja no java, o push faz isso
 listaTimes.push("Ponte Preta")
 listaTimes.push("Flamengo")
 console.log (listaTimes)

 //verificar tamanho da lista
 console.log(listaTimes.length)

 //adicionar um item para primeira posiçao
 listaTimes.unshift("Fluminense")
 listaTimes.unshift("Vasco")
 console.log(listaTimes);

 //remover um item do inicio do array
 listaTimes.shift()
 console.log(listaTimes)

 //remover ultimo elemento do array
 listaTimes.pop()
 console.log(listaTimes);

 //encontrar a posiçao de um elemento
 console.log(listaTimes.indexOf("Santos"))

 let listaNomes = ["Marcos",  "Diego", "Camila", "Matheus"]

 //.splice(), primeiro vem a posiçao e apartir daqula posiçao o resto é removido de acordo com oque se pede

 listaNomes.splice(0,1) //apartir da posiçao 0, vai tirar 1 elemento, ou seja, o nome marcos foi removido, se fosse (o,2) o nome marcos e o nome diego seriam removidos, se fosse (2,1) o nome camila seria removido, se fosse (1,3), diego, camila e matheus seriam removidos.
 console.log(listaNomes)

 listaNomes.splice(1,2, "substituidos")
 console.log(listaNomes)

 //adicionar itens 
 listaNomes.splice(2,0, "Gabriel")
 console.log(listaNomes)

 //percorrer um array