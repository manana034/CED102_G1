<?php
session_start();
try{
    require_once("../../connect_ced102g1.php");
    // select * from weigth w join  member m on w.mNo = m.mNo where m.mNo = 1 order by w.wDate desc limit 1;
    $sql = "SELECT * FROM member
    WHERE mId=:memid 
    AND mPsw=:memPsw"; 
    
    $member = $pdo->prepare($sql);

    $member->bindValue(":memid", $_POST["memid"]);
    $member->bindValue(":memPsw",$_POST["memPsw"]); 

    // $val = $_GET["memid"]

    $member->execute();

    if( $member->rowCount() == 0 ){
        echo "{}";
    }else{
        $memRow = $member->fetch(PDO::FETCH_ASSOC);

        //寫入session 並且命名為'mNo'
        $_SESSION["mNo"] = $memRow["mNo"];
        $_SESSION["mId"] = $memRow["mId"];
        $_SESSION["mPsw"] = $memRow["mPsw"];
        $_SESSION["mMail"] = $memRow["mMail"];  

        echo json_encode($memRow);
    }

} catch(PDOException $e){
    echo $e->getMessage();
}

?>