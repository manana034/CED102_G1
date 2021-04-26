<?php
    session_start();
    try{
        if(
            isset($_SESSION["mNo"]) === true ||
            isset($_SESSION["mId"]) === true ||
            isset($_SESSION["mPsw"]) === true ||
            isset($_SESSION["mMail"]) === true
            ){
            //檢查是否有 mNo 的session
            $result = [
                "mNo"=>$_SESSION["mNo"], 
                "mId"=>$_SESSION["mId"],
                "mPsw"=>$_SESSION["mPsw"],
                "mMail"=>$_SESSION["mMail"]
            ];
    
            //將陣列 轉成 json
            echo json_encode($result);
        } else {
            echo "{}";
        }
    } catch(PDOException $e){
        echo $e->getMessage();
    }

?>