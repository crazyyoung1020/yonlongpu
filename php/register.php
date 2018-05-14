<?php
    header("content-type:text/html;charset=utf8");
    $servername = "localhost";
    $db_username = "root";
    $db_password = "root";
    $db_name = "yonglongpu";

    $conn = new mysqli($servername,$db_username,$db_password,$db_name);

    if($conn->connect_error){
        die("连接失败:".$conn->connect_error);
    };

    $conn->query("set names utf8");


    $uname = $_POST["userId"];
    $upwd = $_POST["password"];

    // 编写sql语句
    $sql = "insert into `register`( `uname`, `upwd`) values ('$uname','$upwd')";
    // $sql = "INSERT INTO `register`(`uname`, `upwd`) VALUES ('$uname','$upwd')";

    //执行sql语句
    $row = mysqli_query($conn,$sql);

    if($row){
        echo "1";
    }else{
        echo "2";
    }

?>

