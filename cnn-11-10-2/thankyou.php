<?php

require 'connection.php';
require 'CNN - Breaking News, Latest News and Videos.html';
$conn    = Connect();
$div1    = $conn->real_escape_string($_POST['div_1']);
$div2   = $conn->real_escape_string($_POST['div_2']);
$div3    = $conn->real_escape_string($_POST['div_3']);
$div4 = $conn->real_escape_string($_POST['div_4']);
$div5 = $conn->real_escape_string($_POST['div_5']);
$div6 = $conn->real_escape_string($_POST['div_6']);
$comfort = $conn->real_escape_string($_POST['comfort']);
$query   = "INSERT into tb_cform (div1, div2, div3, div4, div5, comfort) VALUES('" . $div1 . "','" . $div2 . "','" . $div3 . "','" . $div4 . "','" . $div5 . "','" . $comfort . "')";
$success = $conn->query($query);

if (!$success) {
    die("Couldn't enter data: ".$conn->error);

}

echo '<script language="javascript">';
echo 'alert("Thank you!")';
echo '</script>';

$conn->close();

?>
