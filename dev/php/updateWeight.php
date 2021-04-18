<?php

try{

    require_once("../../connect_ced102g1.php");
    
    $sql = "UPDATE weigth
    set wWeight = :wWeight ,wDate = current_date()
    where mNo =:mNo"; 

    //更新-->生日/性別/身高/手機/照片/介紹
    
    $member = $pdo->prepare($sql);
    $member->bindValue(":wWeight", $_GET["wWeight"]);

    //要在誰身上修改
    $member->bindValue(":mNo",$_GET["mNo"]);

    $member->execute();
    

    if($member->rowCount() != 0){
		echo "異動成功";
	}
    // if( $member->rowCount() == 0 ){
    //     echo "{}";
    // }else{
    //     $memRow = $member->fetch(PDO::FETCH_ASSOC);

    //     echo json_encode($memRow);
    // }

} catch(PDOException $e){
    echo $e->getMessage();
}

?>