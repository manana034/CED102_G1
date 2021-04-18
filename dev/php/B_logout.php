<?php
    try{
        require_once("../../connect_ced102g1.php");
        session_start();
        session_unset();

        echo 'Logout Successfully';
        header("Location: ../B_index.html");

    }catch(PDOException $e){
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>