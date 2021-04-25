<?php 
try{
    require_once("../../connect_ced102g1.php");
    // $des=urldecode($_GET['des']);
    $sql="INSERT INTO food (fdName,fdCalPer,calRate)values(:fdName,:fdCalPer,:calRate)";
    $member =  $pdo->prepare($sql);

    $member->bindValue(":fdName",$_GET['fdName']);
    $member->bindValue(":fdCalPer",$_GET['fdCalPer']);
    $member->bindValue(":calRate",$_GET['calRate']);
    $member->execute();
    $orderNo = $pdo->lastInsertId();

    $sql="INSERT INTO product (prodType,price,des,fdNo,prodPic1,prodPic2,prodPic3,prodState)
                values(:prodType,:price,:desS, $orderNo,
                CONCAT('./productImg/prod',$orderNo,'.png'),
                CONCAT('./productImg/prod',$orderNo,'_1.jpg'),
                CONCAT('./productImg/prod',$orderNo,'_2.jpg'),
                prodState=0)";
    $member =  $pdo->prepare($sql);

    $member->bindValue(":prodType",$_GET['prodType']);
    $member->bindValue(":price",$_GET['price']);
    $member->bindValue(":desS",$_GET['des']);
    $member->execute();

    

}catch(PDOException $e){
    // echo "error";
    echo $e->getMessage(), "<br>";
    echo $e->getLine(), "<br>";
}
?>