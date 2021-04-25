<?php 
try {
	require_once("../../connect_ced102g1.php");
	$sql = "select a.*,b.fdName,b.fdCalPer,b.calRate
    from product a JOIN food b on a.fdNo=b.fdNo;";

	$pro = $pdo->prepare($sql);

	$pro->execute();

    $prodRows = $pro->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($prodRows);
	
} catch (PDOException $e) {
	echo $e->getMessage();
}
?>