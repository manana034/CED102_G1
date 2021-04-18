<?php
    try {
        require_once "../../connect_ced102g1.php";

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $keyType = $decoded["keyType"];
        $keyW = $decoded["keyW"];
        $keyQ = $decoded["keyQ"];
        $keyA = $decoded["keyA"];

        $sql = "INSERT INTO chatbot(keyType,keyW,keyQ,keyA)
                VALUES (:keyType,:keyW,:keyQ,:keyA);
                ";

        $per_ord_data = $pdo->prepare($sql);
        $per_ord_data->bindValue(":keyType", $keyType);
        $per_ord_data->bindValue(":keyW", $keyW);
        $per_ord_data->bindValue(":keyQ", $keyQ);
        $per_ord_data->bindValue(":keyA", $keyA);

        $per_ord_data->execute();

        echo "修改成功~!!";

    } catch (PDOException $e) {
        echo $e->getLine();
        echo $e->getMessage();
    }
?>