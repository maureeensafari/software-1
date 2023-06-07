<?php
$dbname = 'reminder'; // Replace with your actual database name
$pass="";
$user="root";
$host="localhost";
$connection = mysqli_connect($host,$user,$pass,$dbname);


$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$date = $data['date'];
$time = $data['time'];
$description = $data['description'];

// Escape the values or use prepared statements to prevent SQL injection
$name = mysqli_real_escape_string($connection, $name); // Assuming you have an active database connection ($connection)
$date = mysqli_real_escape_string($connection, $date);
$time = mysqli_real_escape_string($connection, $time);
$description = mysqli_real_escape_string($connection, $description);

// Store the data in a database or file
$sql = "INSERT INTO `reminder` (`id`, `name`, `date`, `time`, `description`) VALUES (NULL, '$name', '$date', '$time', '$description')";

// Execute the query
if (mysqli_query($connection, $sql)) {
    $message = "Reminder set for $name on $date at $time";
    echo $message;
} else {
    echo "Error: " . mysqli_error($connection);
}


// Close the database connection
mysqli_close($connection);



?>
