<?php
    // 1. 连接数据库
    include('../lib/_connect.php');
    
    // 2. 接收前端传过来的数据
    $mobile = $_REQUEST['mobile'];
    $password = $_REQUEST['passwordMobile'];
    
    // 3. 在数据库中查询 用户名是否存在
    $sql = "select * from users where user_name='$mobile'";
    $result = $mysqli->query($sql);
    
    // 4. 存在 注册失败  
    if($result->num_rows>0){
        echo '用户名已存在';
        die;
    }
    
    
    // 4不存在 将数据写入数据库 注册成功
    $sql_ins = "insert into users(user_name,password)values('$mobile','$password')";

    $res = $mysqli->query($sql_ins);

    if($res){
        // echo '注册成功';
        echo "<script>alert('注册成功,点击确定进行跳转');location.reload();</script>";
    }
    // echo $sql_ins;
   
?>