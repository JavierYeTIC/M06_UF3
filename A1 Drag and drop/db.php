<?php

print_r($_FILES["input-file"]);

for ($i = 0; $i < count($_FILES["input-file"]["name"]); $i++) {
    echo $_FILES["input-file"]["tmp_name"][$i] . '<br>';
    echo $_FILES["input-file"]["name"][$i] . '<br>';
}

?>
