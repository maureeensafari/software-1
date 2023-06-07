<?php
$dbname = 'reminder'; // Replace with your actual database name
$pass="";
$user="root";
$host="localhost";
$connection = mysqli_connect($host,$user,$pass,$dbname);


$sql = "SELECT * FROM `reminder`";
// $result = $connection -> query($sql);
// $obj = $result -> fetch_array();
// $data = json_encode($obj);
// print_r($data);


$all =[];




if ($result = $connection -> query($sql)) {
    while ($obj = $result -> fetch_array()) {
       $data = json_encode($obj);
       
        array_push($all,$data);

    }
    $result -> free_result();
  }
header('Content-Type: application/json');
echo json_encode($all);

  $connection -> close();