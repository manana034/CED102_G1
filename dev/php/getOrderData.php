<?php 
    try {
    require_once("../../connect_ced102g1.php");

    $sql = "SELECT o.orderNo , o.orderDate ,
    f.fdName ,o.total, o.orderState ,sum(ol.quantity) 'qty' from 
    orders o join member m on o.mNo = m.mno
    join orderlist ol on o.orderNo = ol.orderNo
    join product p on p.prodNo = ol.prodNo
    join food f on f.fdNo = p.fdNo
    where mId=:memid 
    AND mPsw=:memPsw
    group by o.orderNo
    order by o.orderDate desc
    ";

    $member = $pdo->prepare($sql);

    $member->bindValue(":memid", $_POST["memid"]);
    $member->bindValue(":memPsw",$_POST["memPsw"]); 


    $member->execute();

    if( $member->rowCount() == 0 ){
        echo "{}";
    }else{
        $memRow = $member->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memRow);
    }

    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>