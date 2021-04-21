<?php


try{

    require_once("../../connect_ced102g1.php");

    $sql = "INSERT into weigth(mNo, wDate , wWeight)
    value (:mNo , current_date() , :wWeight);"; 

    $member = $pdo->prepare( $sql );
    $member->bindValue(":wWeight", $_POST["weight"]);
    //確保 路徑與其他的一致↑↑↑↑↑↑↑↑↑

    $member->bindValue(":mNo",$_POST["mNo"]);
    $member -> execute();

    echo "更新成功";

} catch(PDOException $e){
    echo $e->getMessage();
}

?>