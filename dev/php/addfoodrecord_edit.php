<?php 
try{
    require_once("../../connect_ced102g1.php");
    $fd = json_decode($_GET["fd"]);
  
    //寫入紀錄明細
    $sql="INSERT INTO dtritem (dtRNo,fdNo,fdQty,dtItemCal) 
          values((select dtRNo from  dietrecord where mNo=:mNo and dtTime=:dtTime and dtPd=:dtPd)
          ,:fdNo,:fdQty,
          (select fdCalPer from food where fdNo=:fdNo)*:fdQty)";
    $Items=$pdo->prepare($sql);
    for($i=0;$i<count($fd);$i++){
        $Items->bindValue(":mNo",$_GET['mNo']);
        $Items->bindValue(":dtTime",$_GET['dtTime']);
        $Items->bindValue(":dtPd",$_GET['dtPd']);
		$Items->bindValue(":fdNo" , $fd[$i]->{'food_id'});
		$Items->bindValue(":fdQty" ,$fd[$i]->{'number'});
		$Items->execute();
	}
  
    
    $sql="UPDATE dietrecord
    set dtCalTal=(select SUM(dtItemCal) from dtritem where dtRNo=:dtRNo)
    where dtRNo=:dtRNo";

    $member =  $pdo->prepare($sql);
    $member->bindValue(":dtRNo",$_GET['dtRNo']);

    $member->execute();

}catch(PDOException $e){
    echo "error";
}
?>