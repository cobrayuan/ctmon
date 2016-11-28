<?php
	$num = $_GET["num"];
	$mysql = new mysqli("localhost","root","","ctmon");
  if ($mysql->connect_errno) {
    die($mysql->connect_errno);
  }
  $mysql->query('set names utf8');
	$sqlstr = 'select * from about limit '.$num.',10';
$result=$mysql->query($sqlstr);
$myArray = array();
//fetch_assoc：查询出每一条在result中的数据
while ($record = $result->fetch_assoc()) {
    array_push($myArray,$record);

}
$a = json_encode($myArray);
echo $a;
?>