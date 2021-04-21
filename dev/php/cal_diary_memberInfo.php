<?php 
try {
  require_once("../../connect_ced102g1.php");
  $sql = "select * from member where mNo=:mNo";
  $member = $pdo->prepare($sql);
  $member->bindValue(":mNo", $_GET["mNo"]);

  $member->execute();

  $prodRows =  $member->fetchAll(PDO::FETCH_ASSOC);
  $result = $prodRows;
  echo json_encode($result);

} catch (PDOException $e) {
    echo "error";
}
?>