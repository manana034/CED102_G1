<?php 
try {
  require_once("../../connect_ced102g1.php");

    $sql="UPDATE dtritem 
    set fdNo=:fdNo2,
    fdQty=:fdQty,
    dtItemCal=(select fdCalPer from food where fdNo=:fdNo2)*fdQty
    where dtRNo=:dtRNo and fdNo=:fdNo1";

    $sql2="UPDATE dietrecord
    set dtCalTal=(select SUM(dtItemCal) from dtritem where dtRNo=:dtRNo)
    *(1-(select count(b.calRate)-SUM(b.calRate) from food b join dtritem a on a.fdNo=b.fdNo where a.dtRNo=:dtRNo))
    where dtRNo=:dtRNo";


   $member =  $pdo->prepare($sql);
   $member->bindValue(":dtRNo", $_GET["dtRNo"]);
   $member->bindValue(":fdNo1", $_GET["fdNo1"]);
   $member->bindValue(":fdNo2", $_GET["fdNo2"]);
   $member->bindValue(":fdQty", $_GET["fdQty"]);

   $member2 =  $pdo->prepare($sql2);
   $member2->bindValue(":dtRNo", $_GET["dtRNo"]);



   $member->execute();
   $member2->execute();
  
}catch (PDOException $e) {
    echo "err";
}
?>