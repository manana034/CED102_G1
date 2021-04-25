<?php 
try {
	require_once("../../connect_ced102g1.php");
	$sql = "SELECT * FROM food
		WHERE !(fdType = 9 ) OR mNo=:mNo
	";

	$foods = $pdo->prepare($sql);

    $foods->bindValue(":mNo", $_GET["mNo"]);

	$foods->execute();

	$foodRows = $foods->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($foodRows);
} catch (PDOException $e) {
	echo $e->getMessage();
}
?>