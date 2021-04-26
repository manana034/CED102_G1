<?php

try{
    require_once("../../connect_ced102g1.php");

    $sql = "UPDATE member
    SET mPoints = (mPoints + :newPoints ), loginDate=CURRENT_DATE()
    WHERE mNo = :mNo"; 

    $member = $pdo->prepare( $sql );

    $member->bindValue(":newPoints", $_GET["points"]);
    $member->bindValue(":mNo",$_GET["mNo"]); 

    $member -> execute();

    echo '天天登入贈送20點';

} catch(PDOException $e){
    echo $e->getMessage(), "<br>";
    echo $e->getLine(), "<br>";
}

?>