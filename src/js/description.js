(function($) {
    $(function() {


        // goto purchase where top fixed when scrollTop gt some value
        $(window).scroll(() => {
            if ($('html,body').scrollTop() > $('.detail-tab').offset().top) {
                $('#top_div').stop(true).animate({
                    top: "66px"
                }, 300)
            } else {
                $('#top_div').stop(true).animate({
                    top: "-75px"
                }, 100)
            }
        })

        $('.productOptions').find('li').click(function() {
            $(this).addClass("cur").siblings().removeClass("cur");
        })

        // purchase number plus and reduce
        $('.minus').click(function(e) {
            e.preventDefault();
            var num = $('.totle').text();
            if (num == 1) {
                num = 1;
            } else {
                num--;
            }
            $('.totle').text(num)
        });

        $('.add').click(function(e) {
            e.preventDefault();
            var num = $('.totle').text();
            num++;
            $('.totle').text(num)
        });
        $('.totle').contextmenu(function() {
            $(this).attr('contenteditable', true);
        });
        $('.totle').click(function() {
            $(this).attr('contenteditable', false);
        })



        // 获取数据
        $(function() {
            var id = location.search.split('=')[1]; // 从地址栏获得ID

            $.ajax({
                type: "get",
                url: "../lib/getitem.php",
                data: {
                    "id": id
                },
                dataType: "json",
                error: function(e) { //请求超时回调
                    if (e.statusText == "timeout") {
                        alert("请求超时");
                    }
                },
                success: function(res) {
                    const mainscale = $('.main-scale');
                    mainscale.find('.main_right_p span').html(res.title);
                    mainscale.find('.sellPoint span').html(res.subtitle);
                    mainscale.find('.PriceContent span').first().text(res.price);
                    mainscale.find('#spic img').attr('src', res.imgurl[0]);
                    mainscale.find('#bpic').attr('src', res.imgurl[0]);

                    // mainscale.find('#list li img').each(function(index,elm){
                    //     $(elm).attr('src',res.imgurl[index])
                    // });
                    $.each(res.imgurl, function(index, value) {
                        $listli += `
                                    <li>
                                        <img src="${value}" />
                                    </li>
                                    `;
                    })
                    $('#list ul').html($listli);



                    // 向cookie添加从数据库获得的ID PRICE 库存量
                    mainscale.find('a.addShopCar').on('click', function() {
                        additem(res.id, $('.totle').text());
                        let flag = confirm('点击确定，立即跳转自动跳转到购物车！');
                        if (flag) {
                            location.href = 'cart.html';
                        }
                    });
                }
            });
            //将id和商品数量保存至cookie中
            function additem(id, num) {
                var shop = cookie.get('shop'); //获取cookie
                var product = {
                    "id": id,
                    "num": num
                };

                if (shop) {
                    shop = JSON.parse(shop);
                    // console.log(shop);

                    if (shop.some(elm => elm.id == id)) {
                        shop.forEach((elm, i) => {
                            elm.id == id ? elm.num = num : null;
                        });
                    } else {
                        shop.push(product);
                    }
                    cookie.set('shop', JSON.stringify(shop), 10);
                } else {
                    shop = [];
                    shop.push(product);
                    cookie.set('shop', JSON.stringify(shop), 10);
                }

                // var str = JSON.stringify(product);
                // cookie.set('shop', str, 1);
            }
        })
    })
})(jQuery);