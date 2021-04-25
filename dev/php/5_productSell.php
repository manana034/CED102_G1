<?php 
try{
    require_once("../../connect_ced102g1.php");
    $sql="update product set prodState=:prodState
    where prodNo=:prodNo;";
    $member =  $pdo->prepare($sql);

    $member->bindValue(":prodState",$_GET['prodState']);
    $member->bindValue(":prodNo",$_GET['prodNo']);
    $member->execute();


}catch(PDOException $e){
    echo "error";
}
?>