<?php
    session_start();
    try {
        require_once "../../connect_ced102g1.php";

        $sql = "INSERT INTO favoritea (mNo, infoNo) 
                VALUES (:mNo,:infoNo)"; 

        $per_ord_data = $pdo->prepare($sql);
        $per_ord_data->bindValue(":mNo", $_SESSION["mNo"]);
        $per_ord_data->bindValue(":infoNo", $infoNo);

        $per_ord_data->execute();

    } catch (PDOException $e) {
        echo $e->getLine();
        echo $e->getMessage();
    }
?>