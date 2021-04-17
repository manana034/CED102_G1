<?php
    try {
        require_once "../../connect_ced102g1.php";

        $sql = "SELECT * FROM information
                WHERE infoNo = :infoNo
                ";

        $per_info_data = $pdo->prepare($sql);
        $per_info_data->bindValue(":infoNo", $infoNo);
        $per_info_data->execute();

        $numberId = $per_info_data->fetchAll(PDO::FETCH_ASSOC);
        json_encode($numberId);
        echo "Successfully deleted";
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>