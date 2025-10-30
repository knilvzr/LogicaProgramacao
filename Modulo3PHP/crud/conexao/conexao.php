<?php

    $servername = "locahost";
    $username = "root"; //nome do usuario local do banco de daod spo estar usando um host local
    $password = ""; //senha do usuario do banco de dados
    $dbname = "faculdade"; //nome do banco de dados

    //cria conexao
    $conn = new mysqli($servername, $username, $password, $dbname)

    //verifica conexao
    if ($conn->connect_error) {
        die("conexão falhou")
    }

?>