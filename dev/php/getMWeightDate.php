<?php
try{
    require_once("../../connectVarData.php");
 
    $sql = "SELECT  wDate , wWeight , mName FROM weigth w JOIN  member m ON w.mNo = m.mNo WHERE mId=:memid AND mPsw=:memPsw AND ( now() - interval 8 week) < w.wDate ORDER BY w.wDate DESC";
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

} catch(PDOException $e){
    echo $e->getMessage();
}

?>