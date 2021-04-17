<?php

try{
    require_once("../../connect_ced102g1.php");
    
    $sql = "SELECT sum(dtCalTal) dailySumCal 
    FROM dietrecord 
    WHERE mNo=:mNo 
    AND dtTime = :curTime
    group by dtTime"; 
    
    $member = $pdo->prepare($sql);

    $member->bindValue(":mNo", $_GET["mNo"]);
    $member->bindValue(":curTime",$_GET["curTime"]); 

    // $val = $_GET["memid"]

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