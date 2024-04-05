<?php
//Connexió a la base de dades
define("DB_HOST", "localhost");
define("DB_NAME", "m06_uf3");
define("DB_USER", "root");
define("DB_PSW", '');
define("DB_PORT", 3306);

try {
    $connexio = mysqli_connect(DB_HOST, DB_USER, DB_PSW, DB_NAME, DB_PORT);
    if ($connexio) {
        $districte = $_POST["dis"];
        $query = "SELECT * FROM barris WHERE id_districte = $districte;";
        $barris = mysqli_query($connexio, $query);

        // Afegir els resultats de la consulta a un array
        $return = array();

        while ($row = mysqli_fetch_assoc($barris)) {
            $object = new stdClass();
            $object->id = $row["id"];
            $object->name = $row["name"];
            $object->id_districte = $row["id_districte"];
            array_push($return, $object);
        }

        echo json_encode($return);
    } else {
        echo "La connexió no ha funcionat";
    }
} catch (PDOException $e) {
    echo "Error de connexió en " . database;
} finally {
    mysqli_close($connexio);
}