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


    $sql = "select * from register where uname='$uname'";

    $res = mysqli_query($conn,$sql);

    $n = mysqli_num_rows($res);

    if(!$n){
		echo "<script>alert('用户名不存在')</script>";
	}else{
		while($arr = mysqli_fetch_assoc($res)){
			if($arr["upwd"] == $upwd){
				echo "<script>alert('登录成功');</script>";
				$bStop = false;
				break;
			}
		}

		if($bStop){
			echo "<script>alert('密码错误');location.href='login.html'</script>";
		}
	}

?>