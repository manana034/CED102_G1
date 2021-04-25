<?php 
    session_start();
    try {
        require_once("../../connect_ced102g1.php");

        $sql = "SELECT *
            FROM favoritea 
            WHERE mNo=:mNo AND infoNo=:infoNo
            ";

        $member = $pdo->prepare($sql);

        $member->bindValue(":mNo", $_SESSION["mNo"]);
        $member->bindValue(":infoNo", $infoNo);

        $member->execute();

        if( $member->rowCount() == 0 ){
            echo "{}";
        }else{
            $memRow = $member->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($memRow);
        }

    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>