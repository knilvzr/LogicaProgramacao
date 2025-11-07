<?php


//$nomes = ["Caio", "Marcos", "Diego"];
//percorrer o array
//foreach($nomes as $nome) {
    //echo $nome."<br>";
//}

//percorrer array associativo
$notasAtividades = [
    "caio" => 10,
    "marcos" => 8,
    "diego" => 9 
];
foreach ($nomes at $nome => $nota) {
    echo $nome . "nota". $nota . "<br>";
}

//dois arrays associatuvis 
$notasAtividades = [
    "caio" => 10,
    "marcos" => 8,
    "diego" => 9 
];
$notasProvas = [
    "caio" => 9,
    "marcos" => 10,
    "diego" => 8
];

//nota atividade ta na tabela, esse valor que vai ser cpturado
foreach ($notasAtividades as $nome =>$nota){
$prova = $notasProvas[$nome];
echo $nome . "nota" . $nota . "<br>";
echo $nome . "nota". $prova. "<br>";

}
//post vai capturar oq foi digitado dentro da nota atividade

?>