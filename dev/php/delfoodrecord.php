<?php
try {
    require_once("../../connect_ced102g1.php");
    
    $sql="DELETE FROM dtritem where dtRNo=:dtRNo and fdNo=:fdNo";
    $member = $pdo -> prepare($sql);
    $member->bindValue(':dtRNo',$_GET['dtRNo']);
    $member->bindValue(':fdNo',$_GET['fdNo']);
    $member->execute();

    $sql="UPDATE dietrecord
    set dtCalTal=(select SUM(dtItemCal) from dtritem where dtRNo=:dtRNo)
    *(1-(select count(b.calRate)-SUM(b.calRate) from food b join dtritem a on a.fdNo=b.fdNo where a.dtRNo=:dtRNo))
    where dtRNo=:dtRNo";

    $member =  $pdo->prepare($sql);
    $member->bindValue(":dtRNo",$_GET["dtRNo"]);
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