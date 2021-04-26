<?php
try{
    require_once("../../connect_ced102g1.php");
 
    $sql = "INSERT into member(mName,mId,mPsw,mMail,loginDate)
    value (:mName,:mId,:mPsw,:mMail,current_date())
    ";

    $member = $pdo->prepare($sql);

    $member->bindValue(":mName", $_GET["mName"]);
    $member->bindValue(":mId", $_GET["mId"]);
    $member->bindValue(":mPsw", $_GET["mPsw"]);
    $member->bindValue(":mMail", $_GET["mMail"]);

    $member->execute();

    $last_id =$pdo->lastInsertId();
     


} catch(PDOException $e){
    echo $e->getMessage();
}

?>