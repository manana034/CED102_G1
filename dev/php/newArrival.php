<?php
try {
    require_once("../../connect_ced102g1.php");
    $sql = "SELECT o.prodNo, SUM(o.quantity) as qty, postTime
            FROM orderlist o JOIN product p ON o.prodNo = p.prodNo
            GROUP BY o.prodNo
            ORDER BY p.postTime;";
    $productAll = $pdo->query($sql);
    $products = $productAll->fetchALL(PDO::FETCH_ASSOC);
    echo json_encode($products);
}catch (PDOException $e) {
    echo $e->getMessage();
}
?>