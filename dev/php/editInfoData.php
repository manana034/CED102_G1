<?php
    try {
        require_once "../../connect_ced102g1.php";

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $infoState = $decoded["infoState"];
        $infoNo = $decoded["infoNo"];

        $sql = "UPDATE information
                SET infoState = :infoState
                WHERE infoNo = :infoNo
                ";
        $per_info_data = $pdo->prepare($sql);
        $per_info_data->bindValue(":infoNo", $infoNo);
        $per_info_data->bindValue(":infoState", $infoState);
        $per_info_data->execute();

        echo "Modified successfully";
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>