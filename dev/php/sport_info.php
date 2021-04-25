<?php 
try {
  require_once("../../connect_ced102g1.php");
    // $sql = "select * from dietrecord where mNo=:mNo AND date(dtTime)=:dtTime";
    $sql = "select *,(select spName from sport where spNo=b.spNo) spName from 
    sprecord a join spritem b on a.spRNo=b.spRNo
    where mNo=:mNo AND date(spTime)=:spTime";
    $member = $pdo->prepare($sql);
    $member->bindValue(":mNo", $_GET["mNo"]);
    $member->bindValue(":spTime", $_GET["spTime"]);
    $member->execute();
    
    // if(  $member->rowCount() == 0) { 
    //   echo json_encode("error");
    // }else{
      $prodRows =  $member->fetchAll(PDO::FETCH_ASSOC);
      $result = $prodRows;
      echo json_encode($result);
    
} catch (PDOException $e) {
	echo "error";
}
?>
