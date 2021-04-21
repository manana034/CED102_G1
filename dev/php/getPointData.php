<?php
    try {
        require_once "../../connect_ced102g1.php";
        $sql = "SELECT *
                    FROM point";
        
        $per_info_data = $pdo->prepare($sql);
        $per_info_data->execute();

        if( $per_info_data->rowCount() == 0) { //找不到
            // echo "{}";
        } else { //找得到
            //取回一筆資料
            $per_info_datarow = $per_info_data->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($per_info_datarow);
        }

    } catch (PDOException $e) {
        echo $e->getLine();
        echo $e->getMessage();
    }
?>