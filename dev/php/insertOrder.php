<?php
    require_once("../../connect_ced102g1.php");
    try{
        $receive_data = json_decode(trim(file_get_contents("php://input")));
        // print_r($receive_data);
        $mNo = $receive_data->mNo;
        $orderState = $receive_data->orderState;
        $usePoints = $receive_data->usePoints;
        $total = $receive_data->total;
        $address= $receive_data->address;
        $tel= $receive_data->tel;
        $orderer= $receive_data->orderer;
        $orderDate = $receive_data->orderDate;
        $detail = $receive_data->detail;

        $query = "INSERT INTO orders (`orderNo`, `mNo`, `orderState`, `usePoints`, `total`, `orderer`, `address`, `tel`, `orderDate`)
        VALUES (null, '$mNo', '$orderState', '$usePoints', '$total', '$orderer', '$address', '$tel', '$orderDate')";


        $statement = $pdo->prepare($query);
        $statement->execute();

        $lastId = $pdo->lastInsertId();

        //定單明細新增
        foreach($detail as $v1){
            $sql = "INSERT INTO orderlist (`orderNo`, `prodNo`, `quantity`, `price`)
            VALUES ('$lastId', '$v1->no', '$v1->value', '$v1->price')";

            $prod_detail = $pdo->prepare($sql);
            $prod_detail->execute();
        }

        $sql = 'select o.orderNo, o.usePoints, o.total, ol.prodNo, ol.quantity, ol.price, p.prodPic1
                from orderlist ol join orders o on ol.orderNo = o.orderNo
                                    join product p on ol.prodNo = p.prodNo
                                    where o.orderNo > $o.orderNo';
        
        $order = $pdo->query($sql);
        $orderRow = $order->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($orderRow);

        $output = array(
            "message" => "data inserted"
        );
        echo json_encode($output);

        }catch(PDOException $e){
            echo $e->getMessage();
        }
?>