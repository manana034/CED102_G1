<?php 
try{
    require_once("../../connect_ced102g1.php");
    $fd = json_decode($_GET["fd"]);
    //寫入紀錄
    $sql="INSERT INTO dietrecord (mNo,dtCalTal,dtTime,dtPd) values(?,?,?,?)";

    $member=$pdo->prepare($sql);
    $member->bindValue(1,$_GET["mNo"]);
    $member->bindValue(2,0);
    $member->bindValue(3,$_GET["dtTime"]);
    $member->bindValue(4,$_GET["dtPd"]);

    $member->execute();
    $orderNo = $pdo->lastInsertId();

    //寫入紀錄明細
    $sql="INSERT INTO dtritem  (dtRNo,fdNo,fdQty,dtItemCal) values($orderNo,:fdNo,:fdQty,(select fdCalPer from food where fdNo=:fdNo)*:fdQty)";
    $Items=$pdo->prepare($sql);
    for($i=0;$i<count($fd);$i++){
		$Items->bindValue(":fdNo" , $fd[$i]->{'food_id'});
		$Items->bindValue(":fdQty" ,$fd[$i]->{'number'});
		$Items->execute();
	}

    $sql="UPDATE dietrecord
    set dtCalTal=(select SUM(dtItemCal) from dtritem where dtRNo=:dtRNo)
    where dtRNo=:dtRNo";

   $member =  $pdo->prepare($sql);
   $member->bindValue(":dtRNo",$orderNo);
   $member->execute();

}catch(PDOException $e){
    echo "error";
}
?>