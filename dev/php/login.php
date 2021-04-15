<?php
try{
    require_once("../../connect_ced102g1.php");
    // select * from weigth w join  member m on w.mNo = m.mNo where m.mNo = 1 order by w.wDate desc limit 1;
    $sql = "SELECT * FROM 
    `weigth` w JOIN `member` m on w.mNo=m.mNo 
    WHERE mId=:memid 
    AND mPsw=:memPsw 
    ORDER BY w.wDate 
    DESC LIMIT 1";
    $member = $pdo->prepare($sql);

    $member->bindValue(":memid", $_POST["memid"]);
    $member->bindValue(":memPsw",$_POST["memPsw"]); 

    // $val = $_GET["memid"]

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