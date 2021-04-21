<?php 
try{
    require_once("../../connect_ced102g1.php");
   
    $sql="DELETE FROM sport where spNo=:spNo";
    $member =  $pdo->prepare($sql);
    $member->bindValue(":spNo",$_GET['spNo']);
    $member->execute();

}catch(PDOException $e){
    echo "error";
}
?>