<?php
    try {
        require_once "../../connect_ced102g1.php";
        // 建立SQL
        $sql = "SELECT infoNo, infoType, infoTitle, infoPhoto1, infoPhoto2, infoPhoto3, infoContent1, infoContent2, infoContent3, infoState, DATE(infoTime) as 'infoTime', CONCAT(SUBSTR(infoContent1,1,40),'...') as 'reductinfo'
                FROM information
                ORDER BY infoNo desc
                ";
        // 執行
        $per_info_data = $pdo->prepare($sql);
        // 給值
        $per_info_data->execute();

        if( $per_info_data->rowCount() == 0) { //找不到
            // echo "{}";
        } else { //找得到
            //取回一筆資料
            $per_info_datarow = $per_info_data->fetchAll(PDO::FETCH_ASSOC);

            for($i=0; $i<count($per_info_datarow); $i++){
                if($per_info_datarow[$i]["infoState"] == 0){
                    $per_info_datarow[$i]["ischecked"] = false;
                }else{
                    $per_info_datarow[$i]["ischecked"] = true;
                }
            };

            //送出json字串
            echo json_encode($per_info_datarow);
        }

    } catch (PDOException $e) {
        echo $e->getLine();
        echo $e->getMessage();
    }
?>