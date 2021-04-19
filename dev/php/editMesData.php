<?php
    try {
        require_once "../../connect_ced102g1.php";

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $mesRevState = $decoded["mesRevState"];
        $mesNo = $decoded["mesNo"];

        $sql = "UPDATE messagereport
                SET mesRevState = :mesRevState
                WHERE mesNo = :mesNo
                ";
        $per_info_data = $pdo->prepare($sql);
        $per_info_data->bindValue(":mesNo", $mesNo);
        $per_info_data->bindValue(":mesRevState", $mesRevState);
        $per_info_data->execute();

        echo "Modified successfully";
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>