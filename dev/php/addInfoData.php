<?php
    try {
        require_once "../../connect_ced102g1.php";

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $infoType = $decoded["infoType"];
        $infoTitle = $decoded["infoTitle"];
        $infoContent1 = $decoded["infoContent1"];
        $infoContent2 = $decoded["infoContent2"];
        $infoContent3 = $decoded["infoContent3"];

        $sql = "INSERT INTO information(infoType,infoTitle,infoContent1,infoContent2,infoContent3)
                VALUES (:infoType,:infoTitle,:infoContent1,:infoContent2,:infoContent3);
                ";

        // $grouporddata = $pdo->query($sql);
        $per_ord_data = $pdo->prepare($sql);
        $per_ord_data->bindValue(":infoType", $infoType);
        $per_ord_data->bindValue(":infoTitle", $infoTitle);
        $per_ord_data->bindValue(":infoContent1", $infoContent1);
        $per_ord_data->bindValue(":infoContent2", $infoContent2);
        $per_ord_data->bindValue(":infoContent3", $infoContent3);

        $per_ord_data->execute();

        echo "修改成功~!!";

    } catch (PDOException $e) {
        echo $e->getLine();
        echo $e->getMessage();
    }
?>