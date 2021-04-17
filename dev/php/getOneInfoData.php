<?php
    try {
        require_once "../../connect_ced102g1.php";

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $infoNo = $decoded["infoNo"];

        $sql = "SELECT *
                FROM information
                WHERE infoNo = :infoNo
                ";

        $per_info_data = $pdo->prepare($sql);
        $per_info_data->bindValue(":infoNo", $infoNo);

        $per_info_data->execute();

        if ($per_info_data->rowCount() == 0) { //找不到
            echo "{}";
        } else { //找得到
            $per_info_datarow = $per_info_data->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($per_info_datarow);
        }

    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>