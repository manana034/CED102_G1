<?php
    session_start();
    try{
        if(
            isset($_SESSION["aNo"]) === true ||
            isset($_SESSION["aId"]) === true ||
            isset($_SESSION["aPsw"]) === true ||
            isset($_SESSION["aName"]) === true
            ){
            //檢查是否有 aNo 的session
            $result = [
                "aNo"=>$_SESSION["aNo"], 
                "aId"=>$_SESSION["aId"],
                "aPsw"=>$_SESSION["aPsw"],
                "aName"=>$_SESSION["aName"]
            ];
    
            //將陣列 轉成 json
            echo json_encode($result);
        } else {
            echo "{}";
        }
    } catch(PDOException $e){
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }

?>