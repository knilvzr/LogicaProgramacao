<?php
//isset valida se o post esta vazio ou nao
    if(isset($_POST("id"))){

    // conexao com obanco
        include("../conexao/conexao.php");

    //criar variavel do id
        $id = $_POST["id"];

    //prepara a consulta sql para exluir cadastro
        $sql = "DELETE FROM usuarios WHERE ID  = ?";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
        //a ? vira o valor da variavel id, e o id é inteiro por isso "i"
            $stmt->bind_param("i", $id);
        //executar aquery
            $stmt->execute();
            //direciona voce para a pagina especificada
            header("Location: verificarUsuario.php");
        //encerra aconsulta
            $stmt->close();
        } else {
            echo "<div class='mensagem de erro'>Erro na consulta</div>";
        }
        $conn->close();



    }




    



?>