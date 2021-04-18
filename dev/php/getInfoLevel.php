<?php
try{
    require_once("../../connect_ced102g1.php");
 
    $sql = "SELECT information 
                FROM information WHERE mNo = :mNo";
    $member = $pdo->prepare($sql);

    $member->bindValue(":infoNo", $infoNo);
    $member->execute();

    if( $member->rowCount() == 0 ){
        echo "{}";
    }else{
        $memRow = $member->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memRow);
    }

} catch(PDOException $e){
    echo $e->getMessage();
}
?>