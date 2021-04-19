<?php
try{
    require_once("../../connect_ced102g1.php");
 
    $sql = "SELECT  dtCalTal , dtTime , dtPd , mName FROM dietrecord d JOIN  member m  ON d.mNo = m.mNo WHERE mId=:memid AND mPsw=:memPsw AND  ( now() - interval 4 week) < d.dtTime  group by d.dtPd order by dtPd asc ";
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