<?php 
try {
  require_once("../../connect_ced102g1.php");

    $sql="UPDATE spritem 
    set spNo=:spNo2,
    spTimeSpan=:spTimeSpan,
    spItemCal=(select spCalPer from sport where spNo=:spNo2)*spTimeSpan*
    (select wWeight from weigth where mNo=(select mNo from sprecord where spRNo=:spRNo) order by wDate DESC limit 1)
    where spRNo=:spRNo and spNo=:spNo1";

    $sql2="UPDATE sprecord
    set spCalTal=(select SUM(spItemCal) from spritem where spRNo=:spRNo)
    where spRNo=:spRNo";


   $member =  $pdo->prepare($sql);
   $member->bindValue(":spRNo", $_GET["spRNo"]);
   $member->bindValue(":spNo1", $_GET["spNo1"]);
   $member->bindValue(":spNo2", $_GET["spNo2"]);
   $member->bindValue(":spTimeSpan", $_GET["spTimeSpan"]);

   $member2 =  $pdo->prepare($sql2);
   $member2->bindValue(":spRNo", $_GET["spRNo"]);



   $member->execute();
   $member2->execute();
  
}catch (PDOException $e) {
    echo "err";
}
?>