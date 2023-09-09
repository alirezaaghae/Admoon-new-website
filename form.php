<?php
ini_set("soap.wsdl_cache_enabled", "0");
error_reporting(0);
if($_POST['ajax']=='true'){
//include_once('../../db_config.php');

$browser = $_SERVER['HTTP_USER_AGENT'];
if(!empty($_SERVER['HTTP_CLIENT_IP'])){$ip = $_SERVER['HTTP_CLIENT_IP'];}elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];}else{$ip = $_SERVER['REMOTE_ADDR'];}

// database details
    $host = "localhost";
    $username = "admoonagency_website";
    $password = "wL(QZQS}j^{S";
    $dbname = "admoonagency_website";

    // creating a connection
    $db_connection = mysqli_connect($host, $username, $password, $dbname);
    // to ensure that the connection is made
    if (!$db_connection)
    {
        die("Connection failed!" . mysqli_connect_error());
    }
    
    mysqli_set_charset($db_connection,'utf8');
    date_default_timezone_set('Asia/Tehran');
    $datetime=date('Y-m-d H:i:s');

    $page = $_POST['page'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $website = $_POST['website'];
    $phone = $_POST['phone'];
    $TotalFee = $_POST['TotalFee']; 
    $WageFee = $_POST['WageFee'];
    $price = $_POST['price'];
    if ($price != '') {
        $priceInfo ='price: '.$price.PHP_EOL.'WageFee: '.$WageFee.PHP_EOL.'TotalFee: '.$TotalFee ;
    } else {
        $priceInfo ='' ;
    }
    mysqli_query($db_connection,"INSERT INTO customer (page, name, email, website, phone, priceInfo, date) VALUES ('$page', '$name', '$email','$website', '$phone', '$priceInfo', '$datetime')");


// send to Telegram
$apiToken = "6137683138:AAFH4uhLrnFpb10luekk4qftSZIiyYaJEyY";
$data = [
    'chat_id' => '@admoon_agency_form', 
    // 'text' => $_POST['message']
    'text' => $page.PHP_EOL.'Name: '.$name.PHP_EOL.'Email: '.$email.PHP_EOL.'Website: '.$website.PHP_EOL.'Phone: '.$phone.PHP_EOL.$priceInfo.PHP_EOL.'ip: '.$ip.PHP_EOL.'Browser: '.$browser.PHP_EOL.'Time: '.$datetime
];
$response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) );

//sms config
$smsconfigsql=mysqli_query($db_connection,"SELECT * FROM `variable` WHERE `type`='sms'");
while($smsconfigrow=mysqli_fetch_assoc($smsconfigsql)){$smsconfig[$smsconfigrow['name']]=$smsconfigrow['value'];}
             
//$message2Send='شماره جدید : '.$phone.'';
//$url='https://digital-lead.ir/engine/novin/'.urlencode($message2Send).'/false';
//$url=rtrim($url,'/');
//echo file_get_contents($url);
function sendMessage($smsuser,$smspass,$smsfrom,$smsphone,$smstext){
$sms_client = new SoapClient('http://api.payamak-panel.com/post/send.asmx?wsdl', array('encoding'=>'UTF-8'));
$parameters['username'] = $smsuser;
$parameters['password'] = $smspass;
$parameters['to'] = $smsphone;
$parameters['from'] = $smsfrom;
$parameters['text'] =$smstext;
$parameters['isflash'] =false;
echo $sms_client->SendSimpleSMS2($parameters)->SendSimpleSMS2Result;
}
function smscompiler($string){
global $page,$name,$email,$website,$phone,$TotalFee,$WageFee,$price,$priceInfo,$datetime;
$string=str_replace('{page}',$page,$string);
$string=str_replace('{name}',$name,$string);
$string=str_replace('{email}',$email,$string);
$string=str_replace('{website}',$website,$string);
$string=str_replace('{phone}',$phone,$string);
$string=str_replace('{TotalFee}',$TotalFee,$string);
$string=str_replace('{WageFee}',$WageFee,$string);
$string=str_replace('{price}',$price,$string);
$string=str_replace('{priceInfo}',$priceInfo,$string);
$string=str_replace('{datetime}',$datetime,$string);
return $string;
}
    
// sendMessage($smsconfig['smsuser'],$smsconfig['smspass'],$smsconfig['smsfrom'],$smsconfig['smsadminphone'],smscompiler($smsconfig['smsadmintext']));
// sendMessage($smsconfig['smsuser'],$smsconfig['smspass'],$smsconfig['smsfrom'],$phone,smscompiler($smsconfig['smstext']));    
}
?>
