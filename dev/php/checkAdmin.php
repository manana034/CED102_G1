<?php 
    try {
        require_once("../../connect_ced102g1.php");

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $aId = $decoded['aId'];


        $sql = "SELECT * FROM  admin
                where aId = :aId
                ";

        $member = $pdo->prepare($sql);
        $member->bindValue(":aId", $aId);
        $member->execute();
        
        if( $member->rowCount() == 0 ){
            echo "{}";
        }else{
            $memRow = $member->fetch(PDO::FETCH_ASSOC);
            echo json_encode($memRow);
        }
        
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>