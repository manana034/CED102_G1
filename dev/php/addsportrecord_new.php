<?php 
try{
    require_once("../../connect_ced102g1.php");
    $sp = json_decode($_GET["sp"]);
    //寫入紀錄
    $sql="INSERT INTO sprecord (mNo,spCalTal,spTime) values(?,?,?)";

    $member=$pdo->prepare($sql);
    $member->bindValue(1,$_GET["mNo"]);
    $member->bindValue(2,0);
    $member->bindValue(3,$_GET["spTime"]);

    $member->execute();
    $orderNo = $pdo->lastInsertId();

    //寫入紀錄明細
    $sql="INSERT INTO spritem  (spRNo,spNo,spTimeSpan,spItemCal) values($orderNo,:spNo,:spTimeSpan,
    (select spCalPer from sport where spNo=:spNo)*:spTimeSpan*
    (select wWeight from weigth where mNo=:mNo order by wDate DESC limit 1))";
    $Items=$pdo->prepare($sql);
    for($i=0;$i<count($sp);$i++){
        $Items->bindValue(":mNo",$_GET["mNo"]);
		$Items->bindValue(":spNo" , $sp[$i]->{'sport_id'});
		$Items->bindValue(":spTimeSpan" ,$sp[$i]->{'number'});
		$Items->execute();
	}

       
    $sql="UPDATE sprecord
    set spCalTal=(select SUM(spItemCal) from spritem where spRNo=:spRNo)
    where spRNo=:spRNo";

   $member =  $pdo->prepare($sql);
   $member->bindValue(":spRNo",$orderNo);
   $member->execute();

}catch(PDOException $e){
    echo "error";
}
?>