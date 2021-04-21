<?php 
    try {
    require_once("../../connect_ced102g1.php");

    $sql = "SELECT f.mNo , i.infoType , i.infoTitle , i.infoNo
    from favoritea f join information i on f.infoNo = i.infoNo
    where f.mNo=:mNo
    ";

    $member = $pdo->prepare($sql);

    $member->bindValue(":mNo", $_POST["mNo"]);
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