<?php
    try {
        require_once "../../connect_ced102g1.php";

        $infoNo = $_POST["infoNo"];
        $infoType = $_POST["infoType"];
        $infoTitle = $_POST["infoTitle"];
        $infoContent1 = $_POST["infoContent1"];
        $infoContent2 = $_POST["infoContent2"];
        $infoContent3 = $_POST["infoContent3"];

        $sql = "UPDATE information
                SET infoType = :infoType,
                    infoTitle = :infoTitle,
                    infoContent1 = :infoContent1,
                    infoContent2 = :infoContent2,
                    infoContent3 = :infoContent3
                WHERE infoNo = :infoNo
                ";
        $per_info_data = $pdo->prepare($sql);
        $per_info_data->bindValue(":infoNo", $infoNo);
        $per_info_data->bindValue(":infoType", $infoType);
        $per_info_data->bindValue(":infoTitle", $infoTitle);
        $per_info_data->bindValue(":infoContent1", $infoContent1);
        $per_info_data->bindValue(":infoContent2", $infoContent2);
        $per_info_data->bindValue(":infoContent3", $infoContent3);
        $per_info_data->execute();

        foreach ($_FILES["upFile"]["error"] as $i => $data) {
            if ($_FILES['upFile']['error'][$i] == UPLOAD_ERR_OK) {
                $dir = "../infoImg";
                $fileName = "info{$i+1}_{$infoNo}.{$fileInfoArr["extension"]}"; //1.gif
                if(file_exists($dir) == false){ //若資料夾不存在就創建它
                    mkdir($dir, 0777, true);//創建資料夾
                }
                $from = $_FILES["upFile"]["tmp_name"][$i];
                $to = "{$dir}/$fileName";
                if (copy($from, $to) === true){
                    $sql = "UPDATE information
                    SET infoPhoto($i+1) = :infoPhoto($i+1)
                    WHERE infoNo = :infoNo";
                    $products = $pdo->prepare($sql);
                    $products->bindValue(":infoNo", $infoNo);
                    $products->bindValue(":infoPhoto($i+1)", "./infoImg/{$fileName}");
                    $products->execute();
                } else {
                    echo "FailQQ";
                }
            }
        }
        echo "Modified successfully";
    } catch (PDOException $e) {
        echo $e->getMessage(), "<br>";
        echo $e->getLine(), "<br>";
        echo "Internal system error. Please contact administrator if the problem persists.<br>";
    }
?>