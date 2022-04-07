<?php
// 接收post提交的用户名和密码
$username = $_POST['username'];
$password = $_POST['password'];

// 判断用户名和密码是否为空
if(empty($username) || empty($password)){
    echo '用户名或密码不能为空';
    exit;
}

// 查询数据库中是否有该用户名
$sql = "select * from user where username='$username'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);


// 查询学生表中，语文和数学成绩大于90分的学生
$sql = "select * from student where chinese>90 and math>90";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);





