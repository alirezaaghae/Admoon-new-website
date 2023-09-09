<?php
error_reporting(0);
$data = json_decode(file_get_contents('php://input'), true);
if(isset($data['action'])){
    echo 'c';
    $type=$data['type'];
    $fullname=$data['fullname'];
    $email=$data['email'];
    $website=str_replace('https://','',str_replace('http://','',$data['website']));
    $meeting=$data['meeting'];
    if($data['action']=='audit'){
    $message2send='sarnakh.net LANDING
    Type: Free Audit
    Fullname: '.$fullname.'
    Email: '.$email.'
    ';
    }elseif($data['action']=='contact'){
    $message2send='sarnakh.net LANDING
    Type: Contact
    Fullname: '.$fullname.'
    Email: '.$email.'
    Website: '.$website.'
    ';
    }elseif($data['action']=='videocontact'){
    $message2send='sarnakh.net LANDING
    Type: Contact [video call request]
    Meeting Time: '.$meeting.'
    Fullname: '.$fullname.'
    Email: '.$email.'
    Website: '.$website.'
    ';
    }
    $operator='admoon';
    $url='https://digital-lead.ir/engine/'.$operator.'/'.urlencode($message2send).'/false';
    $url=rtrim($url,'/');
    echo file_get_contents($url);
}
?>