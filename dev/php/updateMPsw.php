<?php

try{
    require_once("../../connect_ced102g1.php");

    $sql = "UPDATE member
    set mPsw = :mPsw
    where mId = :mId"; 

    $member = $pdo->prepare( $sql );
    $member->bindValue(":mPsw", $_GET["mPsw"]);
    $member->bindValue(":mId",$_GET["mId"]); 

    $member -> execute();

    echo '個人資訊修改成功';

} catch(PDOException $e){
    echo $e->getMessage(), "<br>";
    echo $e->getLine(), "<br>";
}

?>