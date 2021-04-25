
 <?php
require('./PHPMailer/class.phpmailer.php');

$memberMail = $_GET['mail'];

//Send mail using gmail
$mail = new PHPMailer(true);
    $mail->IsSMTP(); // telling the class to use SMTP
    $mail->SMTPAuth = true; // enable SMTP authentication
    $mail->SMTPSecure = "ssl"; // sets the prefix to the servier
    $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
    $mail->Port = 465; // set the SMTP port for the GMAIL server
    $mail->Username = "fly795624abc@gmail.com"; // =====GMAIL username
    $mail->Password = "yihuanre0221ar"; // =====GMAIL password

//Typical mail data
$mail->AddAddress($memberMail);//寄給誰========
$mail->SetFrom("fly795624abc@gmail.com");//從誰寄的========
$mail->Subject = "您好!! 歡迎加入FT.";//========
$mail->Body = "歡迎加入FT. 讓我們成為更健康的自己 http://localhost/G1_FT_web/dist/index.html";//========

try{
    $mail->Send();
    echo "Success!";
} catch(Exception $e){
    //Something went bad
    echo "Fail - " . $mail->ErrorInfo;
}



// try{
//     require_once("../../connect_ced102g1.php");
 
//     $sql = "SELECT  dtCalTal , dtTime , dtPd , mName 
//     FROM dietrecord d JOIN  member m  ON d.mNo = m.mNo 
//     WHERE mId=:memid 
//     AND mPsw=:memPsw 
//     AND   (now() - interval 8 week) < d.dtTime 
//     and  (now() - interval 4 week) > d.dtTime 
//     group by d.dtPd order by dtPd asc";
//     $member = $pdo->prepare($sql);

//     $member->bindValue(":memid", $_POST["memid"]);
//     $member->bindValue(":memPsw",$_POST["memPsw"]); 


//     $member->execute();

//     if( $member->rowCount() == 0 ){
//         echo "{}";
//     }else{
//         $memRow = $member->fetchAll(PDO::FETCH_ASSOC);
//         echo json_encode($memRow);
//     }

// } catch(PDOException $e){
//     echo $e->getMessage();
// }
?>