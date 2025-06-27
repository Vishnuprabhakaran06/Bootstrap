<?php
$n=$_POST['Name'];
$e=$_POST['Email'];
$m=$_POST['Message'];

$connect=mysqli_connect("localhost","root"," ","Contactform");
$sql="INSERT INTO Contact(Name,Email,Message) values($n,$e,$m)";

$r=mysqli_query($con,$sql);

if($r){
    echo "Message send Successfully";
}
else{
    echo " Please Enter Details";
}
?>