! function($) {
    $(function() {
        // 努比亚账号登录| 手机验证码登录 的 tabs 切换
        $('.login .tab-btn').first().click(function() {
            $(this).addClass("cur").siblings().removeClass("cur");
            $('.reg-id').css('display', 'block').siblings('.reg-phone').css('display', 'none')
        });
        $('.login .tab-btn').last().click(function() {
            $(this).addClass("cur").siblings().removeClass("cur");
            $('.reg-phone').css('display', 'block').siblings('.reg-id').css('display', 'none')
        });


        // 登录与注册的tabs 切换
        $('.register-now a').first().click(function() {
            $('.register').css('display', 'block').siblings('.login').css('display', 'none')
            return false;
        });
        $('.gotoregister').click(function() {
            $('.login').css('display', 'block').siblings('.register').css('display', 'none')
            return false;
        });



        // 登录验证正则
        var registerRE = {
            'mobile': /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/,
            'passwordMobile': /^.{6,}$/,
            'email': /^\w{6,}@[A-z0-9]{2,}\.[A-z]{2,}\.?[A-z]*$/,
            'username': /^\w{6,}$/
        }

        var phone_error = $('#phone_error');
        // 手机号码验证
        $('.register').find('#mobile').keyup(function() {
                if (registerRE['mobile'].test($(this).val())) {
                    phone_error.html('验证通过');
                    phone_error.css({
                        color: 'green'
                    }).attr('data-pass', true);
                } else {
                    phone_error.html('手机号码格式错误');
                    phone_error.css({
                        color: 'red'
                    }).attr('data-pass', false);
                }
                check();
            })
            // 密码验证
        var password_error = $('#password_error')
        $('.register').find('#passwordMobile').keyup(function() {
            if (registerRE['passwordMobile'].test($(this).val())) {
                password_error.html('验证通过');
                password_error.css({
                    color: 'green'
                }).attr('data-pass', true);
            } else {
                password_error.html("密码为6-16个（数字、字母、符号至少包含 <br/>两种）");
                password_error.css({
                    color: 'red'
                }).attr('data-pass', false);
            }
            check();
        })


        function check() {
            let pass = $('[data-pass =  true]')
            if (pass.length == 2) {
                $('#regButton').removeAttr('disabled').removeClass("disabled");
            } else {
                $('#regButton').attr('disabled', 'disabled').addClass("disabled");
            }
        }







        // 登录验证正则
        var username_error = $('#username_error');
        // 手机号码验证
        $('.login').find('#username').keyup(function() {
                if (registerRE['mobile'].test($(this).val()) || registerRE['email'].test($(this).val()) || registerRE['username'].test($(this).val())) {
                    username_error.html('验证通过');
                    username_error.css({
                        color: 'green'
                    }).attr('data-login', true);
                } else {
                    username_error.html('手机号码格式错误');
                    username_error.css({
                        color: 'red'
                    }).attr('data-login', false);
                }
                check0();
            })
            //手机验证码登录  密码验证
        var phone_error0 = $('#phone_error0');
        $('.login').find('#mobile1').keyup(function() {
                if (registerRE['mobile'].test($(this).val()) || registerRE['email'].test($(this).val()) || registerRE['username'].test($(this).val())) {
                    phone_error0.html('验证通过');
                    phone_error0.css({
                        color: 'green'
                    }).attr('data-login', true);
                } else {
                    phone_error0.html('手机号码格式错误');
                    phone_error0.css({
                        color: 'red'
                    }).attr('data-login', false);
                }
                check0();
            })
            // 密码验证
        var password_error0 = $('#password_error0')
        $('.login').find('#password0').keyup(function() {
            if (registerRE['passwordMobile'].test($(this).val())) {
                password_error0.html('验证通过');
                password_error0.css({
                    color: 'green'
                }).attr('data-login', true);
            } else {
                password_error0.html("密码为6-16个（数字、字母、符号至少包含 <br/>两种）");
                password_error0.css({
                    color: 'red'
                }).attr('data-login', false);
            }
            check0();
        })


        function check0() {
            let pass = $('[data-login =  true]')
            if (pass.length == 2) {
                $('#login_btn_id').removeAttr('disabled').removeClass("disabled");
            } else {
                $('#login_btn_id').attr('disabled', 'disabled').addClass("disabled");
            }
        }




    })
}(jQuery);