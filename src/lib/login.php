<?php
    // 登陆逻辑
    
    // 1. 连接数据库
    include('../lib/_connect.php');
    
    // 2. 接收前端数据
    $username = $_POST['username'];
    $password = $_POST['password0'];
    
    // 3. 在数据库中查询数据
    $sql = "select * from users where user_name='$username' and pass_word='$password'";
    
    $res = $mysqli->query($sql);
    
    
    // 4. 如果用户存在  那么判断 密码是否正确
    // 如果用户名不存在  直接登陆失败
    // 密码正确 登陆成功  否则 登陆失败
    if($res->num_rows == 1){
        echo "<script>alert('登陆成功');location.href='../html/nubia-index.html';</script>";
        echo "<script>cook.set('username',$username,10)</script>";
    }else{
        echo "<script>alert('登陆失败');</script>";
    }
?>