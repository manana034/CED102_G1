<?php 
    try {
        require_once("../../connect_ced102g1.php");

        $sql = "SELECT * FROM member";

        $member = $pdo->prepare($sql);
        $member->execute();
        
        if( $member->rowCount() == 0 ){
            echo "{}";
        }else{
            $memRow = $member->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($memRow);
        }
        
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>