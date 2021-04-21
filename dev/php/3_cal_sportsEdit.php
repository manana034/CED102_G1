<?php 
try{
    require_once("../../connect_ced102g1.php");
    $sql=""
    $member =  $pdo->prepare($sql);

    $member->bindValue(":dtRNo",$_GET['dtRNo']);
    $member->execute();


}catch(PDOException $e){
    echo "error";
}
?>