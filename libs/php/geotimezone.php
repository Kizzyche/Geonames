<?php
$executionStartTime = microtime(true) / 1000;


$url = 'http://api.geonames.org/timezoneJSON?lat=' . $_REQUEST['lat'] . '&lng=' . $_REQUEST['lng'] . '&username=kizito.nzeka';


$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);

$result = curl_exec($ch);

curl_close($ch);

$decode = json_decode($result,true);

$output['status']['code'] = "200";
$output['status']['name'] = "ok";
$output['status']['desciption'] = "mission saved";
$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) /1000 . "ms";

$output['countryName'] = $decode['countryName'];
$output['timezoneId'] = $decode['timezoneId'];
$output['datetime'] = $decode['time'];
$output['sunrise'] = $decode['sunrise'];
$output['sunset'] = $decode['sunset'];

header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);

?>