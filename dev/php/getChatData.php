<?php
    try {
        require_once "../../connect_ced102g1.php";
        // 建立SQL
        $sql = "SELECT *
                FROM chatbot
                ORDER BY keyNo desc
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
            //送出json字串
            echo json_encode($per_info_datarow);
        }

    } catch (PDOException $e) {
        echo $e->getLine();
        echo $e->getMessage();
    }
?>