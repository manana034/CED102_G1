<?php 
try {
	require_once("../../connect_ced102g1.php");
	$sql = "SELECT * FROM `sport`";
	$sports = $pdo->query($sql);
	$sportRows = $sports->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($sportRows);
} catch (PDOException $e) {
	echo $e->getMessage();
}
?>