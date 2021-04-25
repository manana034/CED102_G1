
<?php
try {
    require_once("../../connect_ced102g1.php");
    $sql = "select p.prodNo, f.fdNo, f.fdName,o.*
            from product p join food f on p.fdNo = f.fdNo 
            join orderlist o on p.prodNo = o.prodNo";

    $productAll = $pdo->prepare($sql);

    $productAll->execute();


    if( $productAll->rowCount() == 0 ){
        echo "{}";
    }else{
        $productRow = $productAll->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($productRow);
    }

}catch (PDOException $e) {

    echo $e->getMessage(), "<br>";
    echo $e->getLine(), "<br>";

}
?>
