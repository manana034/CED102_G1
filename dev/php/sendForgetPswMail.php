
 <?php
require('./PHPMailer/class.phpmailer.php');

$mId = $_GET['mId'];
$mMail = $_GET['mMail'];
$mName = $_GET['mName'];
$mNo = $_GET['mNo'];

//Send mail using gmail
$mail = new PHPMailer(true);
    $mail->IsSMTP(); // telling the class to use SMTP
    $mail->SMTPAuth = true; // enable SMTP authentication
    $mail->SMTPSecure = "ssl"; // sets the prefix to the servier
    $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
    $mail->Port = 465; // set the SMTP port for the GMAIL server
    $mail->Username = "ftg12021@gmail.com"; // =====GMAIL username
    $mail->Password = "AAAA1111"; // =====GMAIL password

//Typical mail data
$mail->AddAddress($mMail);//寄給誰========
$mail->SetFrom("ftg12021@gmail.com");//從誰寄的========
$mail->Subject = "FT. 會員重設密碼";//========
$mail->Body = "您好!$mName 先生/女士  請前往 https://tibamef2e.com/ced102/g1/dist/resetPsw.html?mId=$mId 重設密碼";//========

try{
    $mail->Send();
    echo "Success!";
} catch(Exception $e){
    //Something went bad
    echo "Fail - " . $mail->ErrorInfo;
}

?>