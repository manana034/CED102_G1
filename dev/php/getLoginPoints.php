<?php
try{
    require_once("../../connect_ced102g1.php");
 
    $sql = "SELECT SUM(p.points) points
    FROM member m JOIN point p ON (CURRENT_DATE() BETWEEN p.startTime AND p.endTime)
    WHERE p.poType=2 AND DATE(m.loginDate) < CURRENT_DATE() AND m.mNo= :mNo
    ";

    $member = $pdo->prepare($sql);

    $member->bindValue(":mNo", $_GET["mNo"]);

    $member->execute();

    if( $member->rowCount() == 0 ){
        echo "{}";
    }else{
        $memRow = $member->fetch(PDO::FETCH_ASSOC);
        echo json_encode($memRow);
    }

} catch(PDOException $e){
    echo $e->getMessage();
}
?>