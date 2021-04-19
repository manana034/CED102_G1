<?php
    try {
        require_once "../../connect_ced102g1.php";

        $content = trim(file_get_contents("php://input")); 
        $decoded = json_decode($content, true);

        $keyNo = $decoded["keyNo"]; 
    
        $sql = "DELETE FROM chatbot
                WHERE keyNo = :keyNo
                ";

        $per_info_data = $pdo->prepare($sql);
        $per_info_data->bindValue(":keyNo", $keyNo);
        
        $per_info_data->execute();

        echo "Successfully deleted";
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>