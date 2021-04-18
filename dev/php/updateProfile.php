<?php

try{
    require_once("../../connect_ced102g1.php");


    $uniqfileName= uniqid();
    // $pathinfoArr = pathinfo($_FILES["upFile"]["name"]);
    $imgExt = $_GET["mImgExt"]; //取得副檔名
    $fileName = "{$uniqfileName}.{$imgExt}";

    //先檢查images資料夾存不存在
    if(file_exists("./memberImg")=== false){
    //如果不存在就 建立一個
        mkdir("./memberImg");
    }

    //將檔案copy到要放的路徑 暫存區的 圖片 
    // $from = $_FILES["upFile"]["tmp_name"];
    $from = $_GET["mImgPath"];
    $to = "./memberImg/$fileName";
    // 到自己資料夾的 的位置


    if(copy( $from, $to) === true){
        $sql = "UPDATE member 
        set mBday =:mBday , mSex =:mSex , mHeight =:mHeight , 
        mPhone =:mPhone , mImg =:mImg , mIntro =:mIntro 
        where mNo =:mNo"; 
        //更新-->生日/性別/身高/手機/照片/介紹
        $member = $pdo->prepare($sql);

        $member->bindValue(":mBday", $_GET["memid"]);
        $member->bindValue(":mSex",$_GET["mSex"]); 
        $member->bindValue(":mHeight",$_GET["mHeight"]); 
        $member->bindValue(":mPhone",$_GET["mPhone"]); 
        $member->bindValue(":mIntro",$_GET["mIntro"]);
        $member->bindValue(":mImg",$to);

        $member->bindValue(":mNo",$_GET["mNo"]);
        $member->execute();
    }


    if($member->rowCount() != 0){
		echo "異動成功";
	}

} catch(PDOException $e){
    echo $e->getMessage();
}

?>