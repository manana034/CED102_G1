
 <?php
require('./PHPMailer/class.phpmailer.php');

$mMail = $_GET['mMail'];
$mName = $_GET['mName'];


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
$mail->AddAddress($mMail);//寄給誰========
$mail->SetFrom("fly795624abc@gmail.com");//從誰寄的========
$mail->Subject = "FT. 會員重設密碼";//========
$mail->Body = "您好!$mName 先生/女士  請前往 http://localhost/G1_FT_web/dist/resetPsw.html?mId=$mId 重設密碼";//========

try{
    $mail->Send();
    echo "Success!";
} catch(Exception $e){
    //Something went bad
    echo "Fail - " . $mail->ErrorInfo;
}

?>