<?php
    session_start();
    try {
        require_once "../../connect_ced102g1.php";

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $fdName = $decoded["fdName"];
        $fdCalPer = $decoded["fdCalPer"];

        $sql = "INSERT INTO food(fdNo,fdName,fdCalPer,fdType,mNo,calRate)
                VALUES (null,:fdName,:fdCalPer,9,:mNo,1.0);
                ";

        $per_ord_data = $pdo->prepare($sql);
        $per_ord_data->bindValue(":fdName", $fdName);
        $per_ord_data->bindValue(":fdCalPer", $fdCalPer);
        $per_ord_data->bindValue(":mNo", $_SESSION["mNo"]);

        $per_ord_data->execute();

        echo "修改成功~!!";

    } catch (PDOException $e) {
        echo $e->getLine();
        echo $e->getMessage();
    }
?>