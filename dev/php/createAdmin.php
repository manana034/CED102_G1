<?php 
    try {
        require_once("../../connect_ced102g1.php");

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $aName = $decoded['aName'];
        $aId = $decoded['aId'];
        $aPsw = $decoded['aPsw'];


        $sql = "INSERT into admin(aName , aId , aPsw)
                value (:aName,:aId,:aPsw)
                ";

        $member = $pdo->prepare($sql);
        $member->bindValue(":aName", $aName);
        $member->bindValue(":aId", $aId);
        $member->bindValue(":aPsw", $aPsw);
        $member->execute();
        
        
        echo '新增成功';
        
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>