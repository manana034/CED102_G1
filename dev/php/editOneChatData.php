<?php
    try {
        require_once "../../connect_ced102g1.php";

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $keyNo = $decoded["keyNo"];
        $keyType = $decoded["keyType"];
        $keyW = $decoded["keyW"];
        $keyQ = $decoded["keyQ"];
        $keyA = $decoded["keyA"];

        $sql = "UPDATE chatbot
                SET keyType = :keyType,
                    keyW = :keyW,
                    keyQ = :keyQ,
                    keyA = :keyA
                WHERE keyNo = :keyNo
                ";
        $per_info_data = $pdo->prepare($sql);
        $per_info_data->bindValue(":keyNo", $keyNo);
        $per_info_data->bindValue(":keyType", $keyType);
        $per_info_data->bindValue(":keyW", $keyW);
        $per_info_data->bindValue(":keyQ", $keyQ);
        $per_info_data->bindValue(":keyA", $keyA);
        $per_info_data->execute();

        echo "Modified successfully";
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>