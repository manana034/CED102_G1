
 <?php
 
//  require 'PHPMailer/PHPMailerAutoload.php';

// //Send mail using gmail
// $mail = new PHPMailer;

// $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
// $mail->Port = 587; // set the SMTP port for the GMAIL server
// $mail->SMTPAuth = true; // enable SMTP authentication
// $mail->SMTPSecure = "tls"; // sets the prefix to the servier

// $mail->Username = "ftg12021@gmail.com"; // =====GMAIL username
// $mail->Password = "AAAA1111"; // =====GMAIL password
    

// // $mail->IsSMTP(); // telling the class to use SMTP

// // $mail->SMTPOptions = array(
// //     'ssl' => array(
// //     'verify_peer' => false,
// //     'verify_peer_name' => false,
// //     'allow_self_signed' => true
// //     )
// // );    

// $memberMail = $_GET['mail'];
// //Typical mail data
// $mail->AddAddress($memberMail);//寄給誰========
// $mail->SetFrom("ftg12021@gmail.com");//從誰寄的========
// $mail->Subject = "您好!! 歡迎加入FT.";//========
// $mail->Body = "歡迎加入FT. 讓我們成為更健康的自己 http://localhost/G1_FT_web/dist/index.html";//========


// // if($mail->Send()){
// //     echo "Success!";
// // } else {
// //     echo "Fail - ";
// // }

// try{
//     $mail->Send();
//     echo "Success!";
// } catch(Exception $e){
//     //Something went bad
//     echo "Fail - " . $mail->ErrorInfo;
// }






$memberMail = $_GET['mail'];

include('PHPMailer/PHPMailerAutoload.php');
$html="歡迎加入FT. 讓我們成為更健康的自己 http://localhost/G1_FT_web/dist/index.html";
echo smtp_mailer($memberMail,"您好!! 歡迎加入FT.",$html);

function smtp_mailer($to,$subject, $msg){
	$mail = new PHPMailer(); 
	$mail->SMTPDebug  = 3;
	$mail->IsSMTP(); 
	$mail->SMTPAuth = true; 
	$mail->SMTPSecure = 'tls'; 
	$mail->Host = "smtp.gmail.com";
	$mail->Port = 587; 
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	$mail->Username = "ftg12021@gmail.com";
	$mail->Password = "AAAA1111";
	$mail->SetFrom("ftg12021@gmail.com");
	$mail->Subject = $subject;
	$mail->Body =$msg;
	$mail->AddAddress($to);
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
	if(!$mail->Send()){
		echo $mail->ErrorInfo;
	}else{
		return 'Sent';
	}
}


?>

