<?php
    try {
        require_once("../../connect_ced102g1.php");
        // 建立SQL
        $sql = "SELECT * FROM `admin` WHERE aId=:aId AND aPsw=:aPsw"; 
        // 執行
        $admin = $pdo->prepare($sql);
        // 給值
        $admin->bindValue(":aId", $_POST["aId"]);
        $admin->bindValue(":aPsw", $_POST["aPsw"]);
        $admin->execute();
    
        if( $admin->rowCount() == 0){  // 符合的資料數為0
            echo "{}";
        }else{
            // 取得管理員資料
            $adminRow = $admin->fetch(PDO::FETCH_ASSOC);            
            // 傳回資料
            echo json_encode($adminRow);
        }
    } 
    catch (PDOException $e){
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>
