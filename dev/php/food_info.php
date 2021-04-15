<?php 
try {
  require_once("../../connect_ced102g1.php");
    // $sql = "select * from dietrecord where mNo=:mNo AND date(dtTime)=:dtTime";
    $sql = "select * from 
            dietrecord a join dtritem b on a.dtRNo=b.dtRNo
            where mNo=:mNo AND date(dtTime)=:dtTime";
    $member = $pdo->prepare($sql);
    $member->bindValue(":mNo", $_GET["mNo"]);
    $member->bindValue(":dtTime", $_GET["dtTime"]);
    $member->execute();
  	$prodRows =  $member->fetchAll(PDO::FETCH_ASSOC);
    $result = $prodRows;
	  echo json_encode($result);
} catch (PDOException $e) {
	
}
?>
