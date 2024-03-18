<?php

if(isset($_POST["id"]) && !empty($_POST["id"])){
    // Conexión a la base de datos (asegúrate de configurar tus credenciales)
    define("DB_HOST", "localhost");
    define("DB_NAME", "m06_uf3");
    define("DB_USER", "root");
    define("DB_PSW", '');
    define("DB_PORT", 3306);

    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PSW, DB_NAME, DB_PORT);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM producte WHERE id=" . $_POST["id"];

    $result = $conn->query($sql);

    $array = array();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $object = new stdClass();
        $object->nom = $row["nom"];
        $object->addEdit = $row["id"];
       
        echo json_encode($object);

    } else {
        echo "0 results";
    }

    $conn->close();
}


?>