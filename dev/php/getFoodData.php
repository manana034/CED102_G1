<?php 
try {
	require_once("../../connectVarData.php");
	$sql = "SELECT * FROM `food`";
	$foods = $pdo->query($sql);
	$foodRows = $foods->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($foodRows);
} catch (PDOException $e) {
	echo $e->getMessage();
}
?>