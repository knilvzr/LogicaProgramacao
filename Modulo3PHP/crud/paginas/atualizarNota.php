<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atualizar Nota</title>
    <link rel="stylesheet" href="../estilos/styleVerificar.css">
</head>
<body>
<header>
        <nav>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="cadastro.php">Cadastrar Usuário</a></li>
                <li><a href="#">Procurar Usuário</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="containerSection">
            <form action="atualizarNota.php" method="post">
                <select name="curso" id="curso" class="estilo">
                    <option value="ads">Analise e Desenvolvimento de sistemas</option>
                    <option value="es">Engenharia de Software</option>
                    <option value="si">sistema da informaçao</option>
                    <option value="cc">Ciencia da computaçao</option>
                </select>
                <input type="submit" value="buscar">
            </form>
        </section>

        <section>
            <?php
            //verifica se o $-post"curso"] esta preenchido
            if (isset($_POST["curso"])){
                //conexao com o banco
                include("../conexao/conexao.php");
                //variavel para salvar o valor a ser incluido dento do curso
                $curso = $_POST["curso"];
                //preprando para consulta
                $sql = "SELECT * FROM usuarios WHERE curso = ?";
                $smt = $conn->prepare($sql);

                if($stmt) {
                    $stmt->bind_param("s",$curso);
                    $stmt->execute();
                    $resultado = $stmt->get_result();
                    //converter para o array asscoiativo
                    //print_r($resultado->fetch_assoc();) 
                    //array associativo $nome["curso"->ads, "nome"->"joao"]
                    //num_rows numero de linhas dentro do array resultado
                    if($resultado->num_rows > 0 ) {
                        //array associativo
                        $cursos = [
                            "ads"=> "Analise e Desenvolvimnto de Sistemas",
                            "es"=> "Engenharia de Software",
                            "si" => "Sitema da informação",
                            "cc" => "Ciencia da Computaçao"
                        ];
                        $nomeCurso = $cursos[$curso]; //pega a variavel curso 
                        echo "<h2 style='text-align:center'>$nomeCurso</h2>";
                        //row é uma linha dentro do codigo

                        echo "<form action='processaNota.php' method='post' id='form-nota'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Sobrenome</th>
                                        <th>Nota Atividae</th>
                                        <th>Nota Prova</th>
                                    </tr>
                                </thead>
                                <tbody>
                                ";
                                while ($row = $resultado->fetch_assoc()){
                                    echo "<tr>
                                            <td>{row['id']}</td>
                                            <td>{row['nome']}</td>
                                            <td>{row['sobrenome']}</td>
                                            <td><input type='number'name='nota_atividade[{$row['id']}]' required></td>
                                            <td><input type='number'name='nota_porva[{$row['id']}]' required></td>
                                        </tr>";
                                }
                                echo "
                                        </tbody>
                                    </table>
                                    <input type'submit' value='enviar'>
                                </form>";
                        
                    } else {
                        echo "<div class ='mensagem erro'> O curso não possui alunos cadastrados</div>";
                    }
                    
                }

            }





            ?>
        </section>
    </main>
    
</body>
</html>