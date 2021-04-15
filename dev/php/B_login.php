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
            echo "Can't find this admin.";
        }else{
            // 取得管理員資料
            $adminRow = $admin->fetch(PDO::FETCH_ASSOC);
            // 將資料寫進session
            session_start();
            $_SESSION["aNo"] = $adminRow["aNo"]; 
            $_SESSION["aId"] = $adminRow["aId"]; 
            $_SESSION["aPsw"] = $adminRow["aPsw"];
            $_SESSION["aName"] = $adminRow["aName"];
            // 傳回資料
            echo json_encode($adminRow);
            header("Location: ../1_admin.html");
        }
    } 
    catch (PDOException $e){
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>