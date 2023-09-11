<?php
// {
//   "update_id": 6918xxxx,
//   "message": {
//     "message_id": 28,
//     "from": {
//       "id": 1200xxxx,
//       "is_bot": false,
//       "first_name": "Deepak",
//       "username": "deepak",
//       "language_code": "en-UK"
//     },
//     "chat": {
//       "id": 1200xxxx,
//       "first_name": "Deepak",
//       "username": "deepak", 
//       "type": "private"
//     },
//     "date": 1509641174,
//     "text": "Tell me a joke please"
//   }
// }

$update = json_decode(file_get_contents("php://input"), TRUE); 
$chatId = $update["message"]["chat"]["id"]; 
$userName = $update["message"]["chat"]["username"]; 
$message = $update["message"]["text"]; 
$e = $update["message"];
$token = '6137683138:AAFH4uhLrnFpb10luekk4qftSZIiyYaJEyY';
 
$hello = ['hello','Hello','hallo','Hallo','slm','Slm','salam','Salam'];
if (in_array($message, $hello)) {
    $tg_api='https://api.telegram.org/bot'.$token.'/sendMessage?chat_id='.$chatId.'&text= '.$message;
    file_get_contents($tg_api);
} else if (strpos($message, "info") !== false || strpos($message, "Info") !== false) {
    $info = 'Your id: @'.$e["from"]["username"].PHP_EOL.' your language: '.$e["from"]["language_code"].PHP_EOL.' your Date: '.$e["date"];
    $tg_api='https://api.telegram.org/bot'.$token.'/sendMessage?chat_id='.$chatId.'&text= '.$info;
    file_get_contents($tg_api);
} else if(strpos($message, "joke") !== false || strpos($message, "Joke") !== false) { 
  $url = 'https://icanhazdadjoke.com/'; 
  $ch = curl_init(); 
  curl_setopt($ch, CURLOPT_URL, $url); 
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE); 
  curl_setopt($ch, CURLOPT_USERAGENT, 'TellMeAJokeBot/1.0 (http://www.mysite.com/)'); 
  curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json")); 
  $result = curl_exec($ch); 
  $joke = json_decode($result, TRUE)["joke"];                
  $tg_api='https://api.telegram.org/bot'.$token.'/sendMessage?chat_id='.$chatId.'&text='.$joke.":)"; 
  file_get_contents($tg_api);  
} else {
  $help = "Hi ".$userName."! I have infinite jokes with me 😎 Type \"𝙏𝙚𝙡𝙡 𝙢𝙚 𝙖 𝙟𝙤𝙠𝙚\" or just type \"𝙅𝙤𝙠𝙚\", and i'll send you a random joke";   
  $tg_api='https://api.telegram.org/bot'.$token.'/sendMessage?chat_id='.$chatId.'&text='.$help; 
  file_get_contents($tg_api); 
}
?>