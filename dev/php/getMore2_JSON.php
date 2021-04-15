<?php 
try {
  require_once("../../connect_ced102g1.php");
  $sql = "select * from food_test";
	$products = $pdo->query($sql);
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
} catch (PDOException $e) {
	
}
?>