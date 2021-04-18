<?php 
    try {
        require_once("../../connect_ced102g1.php");

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $infoNo = $decoded['infoNo'];
        $mNo = $decoded['mNo'];

        $sql = "DELETE from favoritea
                where mNo =:mNo and infoNo =:infoNo
                ";

        $member = $pdo->prepare($sql);
        $member->bindValue(":mNo", $mNo);
        $member->bindValue(":infoNo", $infoNo);
        $member->execute();
        
        
        echo '異動成功';

        // $sql = "DELETE from favoritea
        //         where mNo =?and infoNo =?
        //         ";

        // $member = $pdo->prepare($sql);
        // $member->bindValue(1,$_GET["mNo"]);
        // $member->bindValue(2,$_GET["infoNo"]);
        // $member->execute();

        
        
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>