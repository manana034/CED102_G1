<?php
try{
    require_once("../../connect_ced102g1.php");
 
    $sql = " SELECT * FROM member
    where mId=:memberid
    ";

    $member = $pdo->prepare($sql);
    $member->bindValue(":memberid", $_GET["memid"]);

    $member->execute();

    if( $member->rowCount() == 0 ){
        echo "{}";
    }else{
        $memRow = $member->fetch(PDO::FETCH_ASSOC);
        echo json_encode($memRow);
    }

} catch(PDOException $e){
    echo $e->getMessage();
}

?>