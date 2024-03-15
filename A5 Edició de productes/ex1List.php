<?php
    define("DB_HOST", "localhost");
    define("DB_NAME", "m06_uf3");
    define("DB_USER", "root");
    define("DB_PSW", '');
    define("DB_PORT", 3306);

    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PSW, DB_NAME, DB_PORT);

    if ($conn->connect_error) {
        die("Connexió fallida: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM producte";
    $result = $conn->query($sql);
?>

<table>
    <tr>
        <th>Nom</th>
        <th>Editar</th>
    </tr>
    <?php
        if ($result->num_rows > 0) {
            // Mostrar datos de cada producto
            while($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["nom"] . "</td>";
                echo "<td><a href='ex1Form.php?id=" . $row["id"] . "'>Editar</a></td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='2'>No hay productos disponibles</td></tr>";
        }
    ?>
</table>
