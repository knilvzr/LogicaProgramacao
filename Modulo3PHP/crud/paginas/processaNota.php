<?php
    include("../conexao/conexao.php");
    //var dump pega a variavel o post
    //var_dump($_POST)
    if(isset($_POST["nota_atividade"])&& isset($_POST["nota_prova"])){
        //percorrer o array
        foreach($_POST["nota_atividade"]as $id => $nota_atividade){
            $nota_prova = $_POST["nota_prova"][$id];
            $nota_final = $nota_atividade*0.3 +$nota_prova*0.7;
            //preparar a consulta no banco de dados
            $sql = "UPDATE usuarios SET nota_atividade = ?, 
            nota_prova = ?, 
            nota_final = ?
            WHERE id = ?";
             
            $stmt = $conn->prepare($sql)
            $stmt->bind_param("dddi", $nota_atividade, $nota_prova, $nota_final, $id); //d é double, i é int
            $stmt->execute();     
        }

        header("Location: atualizarNota.php")
    }




?>