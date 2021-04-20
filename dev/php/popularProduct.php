<?php
try {
    require_once("../../connect_ced102g1.php");
    $sql = "SELECT prodNo, COUNT(*) as qty
            FROM orderlist
            GROUP BY prodNo;";
    $productAll = $pdo->query($sql);
    $products = $productAll->fetchALL(PDO::FETCH_ASSOC);
    echo json_encode($products);
}catch (PDOException $e) {
    echo $e->getMessage();
}
?>