<?php 
try{
    require_once("../../connect_ced102g1.php");
    // $des=urldecode($_GET['des']);
    $sql="UPDATE product set prodType=:prodType,
                price=:price,
                des=:desS
                where prodNo=:prodNo";
    $member =  $pdo->prepare($sql);

    $member->bindValue(":prodType",$_GET['prodType']);
    $member->bindValue(":price",$_GET['price']);
    $member->bindValue(":desS",$_GET['des']);
    $member->bindValue(":prodNo",$_GET['prodNo']);
    $member->execute();

    $sql="UPDATE food set fdName=:fdName,
    fdCalPer=:fdCalPer,
    calRate=:calRate
    where fdNo=(select fdNo from product where prodNo=:prodNo)";
    $member =  $pdo->prepare($sql);

    $member->bindValue(":fdName",$_GET['fdName']);
    $member->bindValue(":fdCalPer",$_GET['fdCalPer']);
    $member->bindValue(":calRate",$_GET['calRate']);
    $member->bindValue(":prodNo",$_GET['prodNo']);
    $member->execute();


}catch(PDOException $e){
    // echo "error";
    echo $e->getMessage(), "<br>";
    echo $e->getLine(), "<br>";
}
?>