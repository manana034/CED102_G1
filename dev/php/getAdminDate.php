<?php 
    try {
        require_once("../../connect_ced102g1.php");

        $sql = "SELECT * FROM ft.admin ";

        $member = $pdo->prepare($sql);
        $member->execute();
        
        $memberRow = $member->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memberRow);

    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>