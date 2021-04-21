<?php

try{
    require_once("../../connect_ced102g1.php");


    //無法從js來傳遞null 所以來php來進行判斷
    if( $_GET["mGoalW"] === "null"){
        $mGoalW = null;
    } else {
        $mGoalW = $_GET["mGoalW"];
    }

    if( $_GET["mGoalS"] === "null"){
        $mGoalS = null;
    } else {
        $mGoalS = $_GET["mGoalS"];
    }

    if( $_GET["mGoalE"] === "null"){
        $mGoalE = null;
    } else {
        $mGoalE = $_GET["mGoalE"];
    }


    $sql = "UPDATE member
            set mGoalW =:mGoalW , 
            mGoalS = :mGoalS ,
            mGoalE = :mGoalE
            where mNo = :mNo
            ";

    $member = $pdo->prepare( $sql );
    $member->bindValue(":mGoalW", $mGoalW);
    $member->bindValue(":mGoalS",$mGoalS); 
    $member->bindValue(":mGoalE",$mGoalE); 

    $member->bindValue(":mNo",$_GET["mNo"]);
    $member -> execute();

    echo 'Goal 設定成功';

} catch(PDOException $e){
    echo $e->getMessage(), "<br>";
    echo $e->getLine(), "<br>";
}

?>