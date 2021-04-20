<?php
    try {
        require_once "../../connect_ced102g1.php";

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $mLevel = $decoded["mLevel"];
        $mWriteD = $decoded["mWriteD"];
        $mTotal = $decoded["mTotal"];

        $sql = "UPDATE level
                SET mWriteD = :mWriteD,
                    mTotal = :mTotal
                WHERE mLevel = :mLevel
                ";
        $per_info_data = $pdo->prepare($sql);
        $per_info_data->bindValue(":mLevel", $mLevel);
        $per_info_data->bindValue(":mWriteD", $mWriteD);
        $per_info_data->bindValue(":mTotal", $mTotal);
        $per_info_data->execute();

        echo "Modified successfully";
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>