<?php
    try {
        require_once "../../connect_ced102g1.php";

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $postRevState = $decoded["postRevState"];
        $postNo = $decoded["postNo"];

        $sql = "UPDATE postreport
                SET postRevState = :postRevState
                WHERE postNo = :postNo
                ";
        $per_info_data = $pdo->prepare($sql);
        $per_info_data->bindValue(":postNo", $postNo);
        $per_info_data->bindValue(":postRevState", $postRevState);
        $per_info_data->execute();

        echo "Modified successfully";
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>