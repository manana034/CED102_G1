<?php 
try{
    require_once("../../connect_ced102g1.php");
    $sql="INSERT INTO sport (spName,spCalPer,spType) values (:spName,:spCalPer,:spType)";
    $member = $pdo->prepare($sql);

    $member->bindValue(":spName",$_GET['spName']);
    $member->bindValue(":spCalPer",$_GET['spCalPer']);
    $member->bindValue(":spType",$_GET['spType']);
    $member->execute();



}catch(PDOException $e){
    echo "error";
}
?>