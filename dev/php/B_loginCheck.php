<?php 
    try {
        session_start();
        require_once("../../connect_ced102g1.php");
        if (isset($_SESSION["aId"])) {
            echo json_encode ($_SESSION);
        } else {
            echo "{}";

        };
    } 
    catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>