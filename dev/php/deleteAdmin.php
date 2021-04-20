<?php 
    try {
        require_once("../../connect_ced102g1.php");

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $aNo = $decoded['aNo'];


        $sql = "DELETE from admin
                where aNo = :aNo
                ";

        $member = $pdo->prepare($sql);
        $member->bindValue(":aNo", $aNo);
        $member->execute();
        
        
        echo '異動成功';
        
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>