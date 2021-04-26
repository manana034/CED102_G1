<?php
    require_once("../../connect_ced102g1.php");
    try{
        $sql = "update orders set orderState = :state where orderNo = :no";
        echo $_GET['state'];
        echo $_GET['No'];

        
        $state = $pdo->prepare($sql);
        $state->bindValue(":state", $_GET['state']);
        $state->bindValue(":no", $_GET['No']);

        $state->execute();
        echo 'work';
        
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>