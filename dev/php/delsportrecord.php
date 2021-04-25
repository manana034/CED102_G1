<?php
try {
    require_once("../../connect_ced102g1.php");
    
    $sql="DELETE FROM spritem where spRNo=:spRNo and spNo=:spNo";
    $member = $pdo -> prepare($sql);
    $member->bindValue(':spRNo',$_GET['spRNo']);
    $member->bindValue(':spNo',$_GET['spNo']);
    $member->execute();

    $sql="UPDATE sprecord
    set spCalTal=(select SUM(spItemCal) from spritem where spRNo=:spRNo)
    where spRNo=:spRNo";

    $member =  $pdo->prepare($sql);
    $member->bindValue(":spRNo",$_GET["spRNo"]);
    $member->execute();

    // $sql2="UPDATE dietrecord
    // set dtCalTal=(select SUM(dtItemCal) from dtritem where dtRNo=:dtRNo)
    // where dtRNo=:dtRNo";

    // $member2 =  $pdo->prepare($sql2);
    // $member2->bindValue(":dtRNo", $_GET["dtRNo"]);


    // $sql="DELETE FROM dietrecord where dtRNo=:dtRNo";
    // $member = $pdo -> prepare($sql);
    // $member->bindValue(':dtRNo',$_GET['dtRNo']);
    // $member->execute();


}catch (PDOException $e) {
    echo "error";
}    

?>