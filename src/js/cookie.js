(function() {
    // $(window).unload(function() {
    //     let flag = confirm('确定要退出当前页面么？');
    //     if (flag) {
    //         close();
    //     } else {
    //         location.reload();
    //     }
    // })
    // $(window).blur(function() {
    //     var blurTime = Date.now();
    // });
    // $(window).focus(function() {
    //     var focusTime = Date.now();
    //     if (focusTime - blurTime > 100 * 60 * 10) {
    //         alert(`欢迎回来，${cookie.get('username')}`)
    //     }
    // });
    var cookie = {
        get: function(key) {
            if (document.cookie) { //判断是否有cookie数据
                var str = document.cookie;
                var arr = str.split('; ');
                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i].split('=');
                    if (item[0] === key) {
                        return item[1];
                    }
                }
                return '';
            }
        },
        set: function(key, val, day) {
            if (day) {
                var d = new Date();
                d.setDate(d.getDate() + day);
                document.cookie = `${key}=${val};expires=${d};path=/`;
            } else {
                document.cookie = `${key}=${val};path=/`;
            }
        },
        remove: function(key) {
            this.set(key, "", -1);
        }
    };

    window.cookie = cookie;
})();

(function($) {
    $(function() {
        //处理fixed top 的用户头像问题
        if (cookie.get('username')) { //有username cookie 则欢迎您
            $('.unloginNav').html(`
                <a href="//www.nubia.com/order/member">欢迎您，
                    <span class="userName" style="font-weight: bold;">${cookie.get('username')}
                    </span>
                </a>
            `);
            // append 推出li行
            $('#memberLoginTitle').find('.icon-rentou').removeClass("icon-rentou").addClass("icon-rentou1").css({
                color: 'red'
            });
            $('#memberLoginTitle').hover(function() {
                // over
                $(this).css({
                    backgroundColor: '#282828'
                })
            }, function() {
                // out
                $(this).css({
                    backgroundColor: '#282828'
                })
            });
            $('#memberUnLogin .c-holder .nav').append(`
            <li role="presentation" class="exit">
                <a>
                    <i class="glyphicon iconfont icon-rentou" style="font-size:15px;color:#888;">
                    </i>
                    退出 
                </a>
            </li>
            `);
            // nav 人头变红

        } else { //用户没有登录，则删除退出li 并换成登录按钮
            $('.unloginNav').html(`
            <button type="button" style="font - size: 14 px; color: rgb(255, 255, 255);">立即登录</button> 
            <p > 没有账号？ 
                <a href = "../html/regest-login.html" > 立即注册 </a>
            </p >`);
            $('.exit').remove();
            $('#memberLoginTitle').find('.icon-rentou1').removeClass("icon-rentou1").addClass("icon-rentou").css({
                color: '#fff'
            });
            $('#memberLoginTitle').hover(function() {
                // over
                $(this).css({
                    backgroundColor: 'rgb(243, 93, 73)'
                })
            }, function() {
                // out
                $(this).css({
                    backgroundColor: '#282828'
                })
            });
        }

        // nav top .exit 的跳转
        $('.exit').click(function() {
            cookie.remove('username');
            location.reload();
        });
        // nav top 立即注册的跳转  .unloginNav
        $('.unloginNav').click(function() {
            location.href = '../html/regest-login.html';

        });

        //立即登录的跳转
        $('.unloginNav').find('.button').click(function(e) {
            e.stopPropagation();
            Location.href = '../html/regest-login.html'
        });


        // ajax获取数据
        let shop = cookie.get('shop');
        if (shop) {
            shop = JSON.parse(shop);
            var idList = shop.map(elm => elm.id).join();
            $.ajax({
                type: "get",
                url: "../lib/shop.php",
                data: {
                    "idList": idList
                },
                dataType: "json",
                success: function(res) {
                    var navcart = '';
                    var allprice = 0;
                    var allnum = 0;
                    res.forEach((elm, i) => {
                        var arr = shop.filter((val, i) => { //筛选cookie 中相匹配的数据对象
                            return val.id === elm.id;
                        });
                        let imgurl = elm.imgurl.slice(1, -1);
                        //nav fixtop cart
                        navcart += `
                            <li role="presentation" class="shop-card">
                                <div class="shop-img">
                                    <img src="${JSON.parse(imgurl)[0]}" alt="" class="shop-img"></div>
                                <div class="shop-detail">
                                    <p class="shop-name">
                                        <span>${elm.title}</span></p>
                                    <p class="shop-price shop-newPrice">¥${elm.price}<span class="shop-oldPrice">¥2699</span><i class="shop-count">×${arr[0].num}</i></p>
                                </div>
                            </li>
                            `;
                        allprice += (arr[0].num) * (elm.price);
                        allnum += Number(arr[0].num);
                    });
                    $('.nav.shopCarMenu').append(navcart);
                    $('.shop-totle-num').html('￥' + allprice.toFixed(2));
                    $('.shopCarTipNav').html(allnum)
                }
            });
        }
    })
})(jQuery);