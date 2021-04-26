<?php

try{
    require_once("../../connect_ced102g1.php");

    $sql = "UPDATE member
    SET mPoints = (SELECT points
    FROM point
    WHERE poType=1 AND CURRENT_DATE() > startTime)
    WHERE mNo= :mNo"; 

    $member = $pdo->prepare( $sql );

    $member->bindValue(":mNo",$_GET["mNo"]); 

    $member -> execute();

    echo '註冊免費送100點!!';

} catch(PDOException $e){
    echo $e->getMessage(), "<br>";
    echo $e->getLine(), "<br>";
}

?>