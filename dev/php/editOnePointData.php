<?php
    try {
        require_once "../../connect_ced102g1.php";

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $poNo = $decoded["poNo"];
        $poType = $decoded["poType"];
        $poName = $decoded["poName"];
        $startTime = $decoded["startTime"];
        $endTime= $decoded["endTime"];
        $points= $decoded["points"];

        $sql = "UPDATE point
                SET poType = :poType,
                    poName = :poName,
                    startTime = :startTime,
                    endTime = :endTime,
                    points = :points
                WHERE poNo = :poNo
                ";
        $per_info_data = $pdo->prepare($sql);
        $per_info_data->bindValue(":poNo", $poNo);
        $per_info_data->bindValue(":poType", $poType);
        $per_info_data->bindValue(":poName", $poName);
        $per_info_data->bindValue(":startTime", $startTime);
        $per_info_data->bindValue(":endTime", $endTime);
        $per_info_data->bindValue(":points", $points);
        $per_info_data->execute();

        echo "Modified successfully";
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>