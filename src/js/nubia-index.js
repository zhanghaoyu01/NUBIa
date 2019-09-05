//get all product data
$(function() {
    $.ajax({
        type: "post",
        url: "../lib/getall.php",
        dataType: "json",
        success: function(response) {
            var template = '';
            response.forEach((elm, i) => {
                let imgurl = elm.imgurl.slice(1, -1);
                imgurl = JSON.parse(imgurl);
                template += `
                        <li style="margin-bottom:13px" class="goods-hover-shows col-lg-3">
                            <a href="descript.html?id=${elm.id}" onclick="nubiabee('trackStructEvent','shop_index_hot','count',1,{})">
                                <div class="nbc-pro-cont">
                                    <div class="figure"><img src="${imgurl[0]}" data-x2="//oss.static.nubia.cn/blockimage/156194721773.png" width="290" height="248">
                                        <div class="figure-info">
                                            <h2>${elm.title.split(' ')[0]}</h2><span><span style="color:#FF4D4D">骁龙855</span></span>
                                        </div>
                                    </div>
                                    <div class="price"><span> <sup>￥</sup> <label>${elm.price}</label> </span><span class="price_old">3499</span></div>
                                </div>
                            </a>
                            <div class="nbc-pro-btn"><a class="btn-info" href="descript.html?id=${elm.id}">查看详情</a><a class="btn-sell" href="descript.html?id=${elm.id}">立即购买</a></div>
                        </li>
                        `;
            });
            $('#hotBlock').append(template);
        }
    });

})