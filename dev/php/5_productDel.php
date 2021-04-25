<?php 
try{
    require_once("../../connect_ced102g1.php");
    $sql="DELETE FROM  product where prodNo=:prodNo";
    $member =  $pdo->prepare($sql);

    $member->bindValue(":prodNo",$_GET['prodNo']);
    $member->execute();

    $sql="DELETE FROM  food where fdNo=:fdNo";
    $member =  $pdo->prepare($sql);

    $member->bindValue(":fdNo",$_GET['fdNo']);
    $member->execute();


}catch(PDOException $e){
    echo "error";
}
?>