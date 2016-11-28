<?php
$id = $_GET["a"];
     
 
$mysql = new mysqli("localhost","root","","ctmon");
if ($mysql->connect_errno) {
    die($mysql->connect_errno);
};
$mysql->query("set names utf8");
$sqlstr = "select * from inanli where inanli_id=\"$id\"";
$result = $mysql->query($sqlstr);
$myArray = array();
while ($record = $result->fetch_assoc()) {
    array_push($myArray,$record);
};
echo json_encode($myArray);
?>