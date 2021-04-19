<?php
$moreproduct = intval(rand(1,3)); 
try {
    require_once("../../connect_ced102g1.php");
    $sql = "select p.prodNo, p.fdNo, p.price, p.des, p.prodpic1, p.prodpic2, p.prodpic3, p.prodType, f.fdName, f.fdCalPer, f.calRate
            from product p join food f on p.fdNo = f.fdNo
            where p.prodType = $moreproduct
            order by rand() limit 4";
    $productAll = $pdo->query($sql);
    $products = $productAll->fetchALL(PDO::FETCH_ASSOC);
    echo json_encode($products);
}catch (PDOException $e) {
    echo $e->getMessage();
}
?>