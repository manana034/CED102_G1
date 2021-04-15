<?php 
try {
	require_once("../../connect_ced102g1.php");
	$sql = "SELECT * FROM `food`";
	$foods = $pdo->query($sql);
	$foodRows = $foods->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($foodRows);
} catch (PDOException $e) {
	echo $e->getMessage();
}
?>