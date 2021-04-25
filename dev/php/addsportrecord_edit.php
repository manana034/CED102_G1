<?php 
try{
    require_once("../../connect_ced102g1.php");
    $sp = json_decode($_GET["sp"]);
  
    //寫入紀錄明細
    $sql="INSERT INTO spritem (spRNo,spNo,spTimeSpan,spItemCal)  
          values((select spRNo from  sprecord where mNo=:mNo and spTime=:spTime)
          ,:spNo,:spTimeSpan,
          (select spCalPer from sport where spNo=:spNo)*:spTimeSpan*
          (select wWeight from weigth where mNo=(select mNo from sprecord where spRNo=:spRNo) order by wDate DESC limit 1))";
    $Items=$pdo->prepare($sql);
    for($i=0;$i<count($sp);$i++){
        $Items->bindValue(":mNo",$_GET['mNo']);
        $Items->bindValue(":spTime",$_GET['spTime']);
		$Items->bindValue(":spNo" , $sp[$i]->{'sport_id'});
		$Items->bindValue(":spTimeSpan" ,$sp[$i]->{'number'});
        $Items->bindValue(":spRNo",$_GET['spRNo']);
		$Items->execute();
	}
  
    
    $sql="UPDATE sprecord
    set spCalTal=(select SUM(spItemCal) from spritem where spRNo=:spRNo)
    where spRNo=:spRNo";

    $member =  $pdo->prepare($sql);
    $member->bindValue(":spRNo",$_GET['spRNo']);

    $member->execute();

}catch(PDOException $e){
    echo "error";
}
?>