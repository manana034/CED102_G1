<?php 
try {
	require_once("../../connect_ced102g1.php");

	$sql = "SELECT  ol.* , o.* , f.fdName from 
    product p join orderlist ol on p.prodNo = ol.prodNo
    join orders o on o.orderNo = ol.orderNo 
    join member m on o.mNo = m.mNo
    join food f on f.fdNo = p.fdNo
    where mId=:memid 
    AND mPsw=:memPsw
    order by o.orderDate desc
	";

    $member = $pdo->prepare($sql);

    $member->bindValue(":memid", $_POST["memid"]);
    $member->bindValue(":memPsw",$_POST["memPsw"]); 


    $member->execute();

    if( $member->rowCount() == 0 ){
        echo "{}";
    }else{
        $memRow = $member->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memRow);
    }

} catch (PDOException $e) {
	echo $e->getMessage();
}
?>