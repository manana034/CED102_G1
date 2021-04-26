<?php 
try{
    require_once("../../connect_ced102g1.php");
    $sql="UPDATE sport set spName=:spName,
                spCalPer=:spCalPer,
                spType=:spType
                where spNo=:spNo";
    $member =  $pdo->prepare($sql);

    $member->bindValue(":spName",$_GET['spName']);
    $member->bindValue(":spCalPer",$_GET['spCalPer']);
    $member->bindValue(":spType",$_GET['spType']);
    $member->bindValue(":spNo",$_GET['spNo']);
    $member->execute();


}catch(PDOException $e){
    echo "error";
}
?>