<?php
    // 開啟Session
    session_start();
    try{
        require_once("../../connect_ced102g1.php");
        // 清除Session
        unset($_SESSION["aNo"]); 
        unset($_SESSION["aId"]); 
        unset($_SESSION["aPsw"]);
        unset($_SESSION["aName"]);

        echo 'Logout Successfully';
        header("Location: ../B_index.html");

    }catch(PDOException $e){
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>