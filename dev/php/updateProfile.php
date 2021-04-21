<?php

try{
    require_once("../../connect_ced102g1.php");

    $sql = "UPDATE member 
    set mBday =:mBday , mSex =:mSex , mHeight =:mHeight , 
    mPhone =:mPhone , mIntro =:mIntro , mMail = :mMail
    where mNo =:mNo"; 

    $member = $pdo->prepare( $sql );
    $member->bindValue(":mBday", $_POST["birthday"]);
    $member->bindValue(":mSex",$_POST["gender"]); 
    $member->bindValue(":mHeight",$_POST["height"]); 
    $member->bindValue(":mPhone",$_POST["phone"]); 
    $member->bindValue(":mIntro",$_POST["intro"]);
    $member->bindValue(":mMail",$_POST["email"]);
    //確保 路徑與其他的一致↑↑↑↑↑↑↑↑↑

    $member->bindValue(":mNo",$_POST["mNo"]);
    $member -> execute();

    echo '個人資訊修改成功';

} catch(PDOException $e){
    echo $e->getMessage(), "<br>";
    echo $e->getLine(), "<br>";
}

?>