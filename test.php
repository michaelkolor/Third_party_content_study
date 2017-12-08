<?php
echo "Hello World!";
?>

<?php
require 'index.html';
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test_db";

$con=mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
//test_table
$comfort=5;
echo $_SERVER['PHP_SELF'];
if(isset($_POST['submit'])) {
  $comfort = 8;

}
// Perform queries
//mysqli_query($con,"SELECT * FROM test_table");
mysqli_query($con,"INSERT INTO test_table
VALUES ($comfort)");

mysqli_close($con);

//Creatomg SQL Database
/*$sql = "CREATE DATABASE test_db";
$conn->exec($sql);
echo "Table test_db was created";*/

/*Creating Test Table
$sql2 = "CREATE TABLE test_table (
  comfort INT(1),
  reg_date TIMESTAMP
)";

if($conn->query($sql2)===TRUE) {
  echo "Hooray table made";
  }
else {
  echo "Nope";
}*/



/*Sending values from test form to test tablee
if (isset($_POST['submit'])) {
  $comfort = $_POST["comfort"];
  echo $comfort;
  //INsert Data Test
  // Attempt insert query execution
  $sql = "INSERT INTO test_table (comfort) VALUES (1)";
  if(mysqli_query($link, $sql)){
      echo "Records inserted successfully.";
  } else{
      echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
  }

  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }
}


$conn->close();*/
?>
