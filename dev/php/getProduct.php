<?php
try {
    
    require_once("../../connect_ced102g1.php");
    $sql = "select p.prodNo, p.fdNo, p.price, p.des, p.prodpic1, p.prodpic2, p.prodpic3, p.prodType, f.fdName, f.fdCalPer, f.calRate
            from product p join food f on p.fdNo = f.fdNo
            where p.prodNo = :prodNo";
    $productAll = $pdo->prepare($sql);

    $productAll->bindValue(":prodNo", $_GET["pNo"]);
    $productAll->execute();


    if( $productAll->rowCount() == 0 ){
        echo "{}";
    }else{
        $productRow = $productAll->fetch(PDO::FETCH_ASSOC);
        echo json_encode($productRow);
    }

}catch (PDOException $e) {

    echo $e->getMessage(), "<br>";
    echo $e->getLine(), "<br>";

}
?>