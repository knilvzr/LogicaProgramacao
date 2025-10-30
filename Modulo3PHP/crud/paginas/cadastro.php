<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela Cadastro</title>
    <link rel="stylesheet" href= "../estilos/styleCadastrar.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="#">Cadastrar Usuario</a></li>
                <li><a href="verificarUsuario">Procurar Usuario</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <form action="cadastro.php" method="post">
            <h2>Cadastro de Aluno</h2>
            <label for="nome">Nome:</label>
            <input type="text" name= "nome" id= "nome">

            <label for="sobrenome">Sobrenome</label>
            <input type="text" name="sobrenome" id="sobrenome">

            <label for="email">E-mail</label>
            <input type="email" name="email" id="email">

            <label for="curso">Selecione o Curso</label>
            <select name="curso" id="curso">
                <option value="ads">Analise e Desenvolvimento de Sistemas</option>
                <option value="es">Engenharia de Software</option>
                <option value="si">Sistema da Informação</option>
                <option value="cc">Ciencia da Computação</option>
            </select>

            <input type="submit" value="Cadastrar">

            <?php

            //tem que criar o database faculdade no mysql pra rodar
            //$prefixo criando um prefixo igual para todos, como o rgm

            if($_SERVER["REQUEST_METHOD"]=="POST") {
                include("../conexao/conexao.php");

                $nome = $_POST["nome"];
                $sobrenome = $_POST["sobrenome"];
                $email = $_POST [ "email"];
                $curso = $_POST[ "curso"];

                $hoje = new DateTime();
                $id = $hoje->format("Ym") . rand(100,999);

                $sql = "INSERT INTO usuarios (id, nome, sobrenome, email, curso) values (?,?,?,?,?)";
                //stmt = statment (pode ser outro nomese quiser)
                $stmt = $conn ->prepare($sql);
                $stmt ->bind_param("issss", $id,$nome,$sobrenome,$email,$curso); // i = inteiro,  s = string, cada interrogaçao é lida pelo programa assim, cada ? é lida como o que foi declarado
                $stmt-> execute();
                echo "<div class = 'mensaem sucesso'> Usuario cadasrado com sucesso
                </div>
                ";
                $stmt -> close();
                $conn->close();
            }

            ?>

        </form>
    </main>

    
</body>
</html>