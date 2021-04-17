<?php

try{

    require_once("../../connect_ced102g1.php");
    // select * from weigth w join  member m on w.mNo = m.mNo where m.mNo = 1 order by w.wDate desc limit 1;
    $sql = "SELECT * FROM 
    member m LEFT JOIN weigth w ON m.mNo = w.mNo
    WHERE mId=:memid 
    AND mPsw=:memPsw
    and mState= 1
    ORDER BY w.wDate 
    DESC LIMIT 1 "; 
    
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