<?php 
try{
    require_once("../../connect_ced102g1.php");
    $sql="UPDATE food set fdName=:fdName,
                fdCalPer=:fdCalPer,
                fdType=:fdType,
                calRate=:calRate
                where fdNo=:fdNo";
    $member =  $pdo->prepare($sql);

    $member->bindValue(":fdName",$_GET['fdName']);
    $member->bindValue(":fdCalPer",$_GET['fdCalPer']);
    $member->bindValue(":fdType",$_GET['fdType']);
    $member->bindValue(":calRate",$_GET['calRate']);
    $member->bindValue(":fdNo",$_GET['fdNo']);
    $member->execute();


}catch(PDOException $e){
    // echo "error";
    echo $e->getMessage(), "<br>";
    echo $e->getLine(), "<br>";
}
?>