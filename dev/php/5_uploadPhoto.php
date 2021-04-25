<?php 
try{
if( $_FILES["productImg"]["error"] == UPLOAD_ERR_OK){
		//1.主檔名 決定檔案名稱
        $uniqid= uniqid(); 		

		//2.副檔名-
		$pathinfoArr = pathinfo($_FILES["protraitImg"]["name"]);

		//將特殊的檔案名稱 與 副檔名結合
		$fileName = "{$uniqid}.{$pathinfoArr["extension"]}";

		//先檢查images資料夾存不存在
		if(file_exists("../productImg")=== false){
			mkdir("../productImg");
		}

		//將檔案copy到要放的路徑
		$from = $_FILES["protraitImg"]["tmp_name"];

		// 到自己資料夾的 的位置
		$to = "../productImg/$fileName";


		if(copy( $from, $to) === true) { 
			$sql = "SET SQL_SAFE_UPDATES=0;
			UPDATE member
			set mImg =:mImg 
			where mNo =:mNo"; 

			$member = $pdo->prepare( $sql );
			$member->bindValue(":mImg", "./memberImg/$fileName");
            //確保 路徑與其他的一致↑↑↑↑↑↑↑↑↑

            $member->bindValue(":mNo",$_POST["mNo"]);
			$member -> execute();

			echo "照片更新成功";
		}else{
			echo "沒有更新";
		}

	}else{
		echo "{$_FILES["protraitImg"]["error"]}";
	}

}catch(PDOException $e){
    echo "error";
}
?>
