<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificar Nota</title>
    <link rel="stylesheet" href="../estilos/styleVerificar.css">
</head>
<body>
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
            if(isset($_POST["curso"])){
                include("../conexao/conexao.php");
                $curso = $_POST["curso"];
                //prepara a consulta sqp
                $sql = "SELECT * FROM usuarios HWERE curso= ?";
                $stmt = $conn->prepare(sql);

                $cursos = [
                    "ads"=> "Analise e Desenvolvimnto de Sistemas",
                    "es"=> "Engenharia de Software",
                    "si" => "Sitema da informação",
                    "cc" => "Ciencia da Computaçao"
                ];
                $nomeCurso = $cursos[$curso];

                if ($stmt) {
                    $stmt->bind_param("s", $curso);
                    $stmt->execute();
                    //resultado
                    $resultado = $stmt->get_result();
                    if ($resultado->num_rows>0) {
                        echo "
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
                            <tbody>";
                     while ($row=$resultado->fetch_assoc()){
                        echo "
                                <tr>
                                    <td>{row['id']}</td>
                                    <td>{row['nome']}</td>
                                    <td>{row['sobrenome']}</td>
                                    <td>{row['nota_atividade']}</td>
                                    <td>{row['nota_prova']}</td>
                                    <td>{row['nota_final']}</td> 
                                </tr>";
                    }echo "
                            </tbody>
                        </table>";
                }

                    

                }

            }
            ?>

        </section>

    </main>



    
</body>
</html>