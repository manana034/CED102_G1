<?php 
try{
    require_once("../../connect_ced102g1.php");
    $sql="INSERT INTO food (fdName,fdCalPer,fdType,calRate) values (:fdName,:fdCalPer,:fdType,:calRate)";
    $member = $pdo->prepare($sql);

    $member->bindValue(":fdName",$_GET['fdName']);
    $member->bindValue(":fdCalPer",$_GET['fdCalPer']);
    $member->bindValue(":fdType",$_GET['fdType']);
    $member->bindValue(":calRate",$_GET['calRate']);
    $member->execute();


}catch(PDOException $e){
    echo "error";
}
?>