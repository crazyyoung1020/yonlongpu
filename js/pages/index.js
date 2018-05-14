var indexObj = {
    init: function () {
        layui.use('carousel', function () {
            var carousel = layui.carousel;
            //建造实例
            carousel.render({
                elem: '#test1',
                width: '100%' //设置容器宽度
                    ,
                height: "402",
                arrow: 'always' //始终显示箭头
                //,anim: 'updown' //切换动画方式
            });
        });
        this.query();
        this.domEvent();
    },
    domEvent: function () {
        $('#box,#img-box,#img-box2').on('click','li>div',function(){//此处不用回调函数，无法获取到当前点击对象
            var id = $(this).data('id')
            location.href="xiangqing.html?id="+id
        })
        // $('#box,#img-box,#img-box2').on('click','li>div', $.proxy(this.clickfunction,this))
    },
    // clickfunction:function(){
    //     var id = $(this).data('id')
    //     location.href="xiangqing.html?id="+id
    // },
    query: function () {
        $.ajax({
            url: 'http://localhost/yonlongpu/json/index.json',
            data: {},
            dataType: 'json',
            type: 'post',
            success: $.proxy(this.render, this),
            error: $.proxy(this.ajaxError)
        })
    },
    ajaxError: function (e) {
        console.log(e)
        alert('网络异常')
    },
    render: function (data) {
        if(data.status == '1'){
        var obj = data.data.current
        // jquery list列表
        var obox = $("#box")
        var str = "";
        for (var i = 0; i < obj.length; i++) {
            str += `<li>
                <div id="obox" data-id="${obj[i].id}">
                  <div class="imgbox">
                    <img class="img" src="${obj[i].img}">
                  </div>
                    <a class="title">${obj[i].title}</a>
                    <h4>热卖价&nbsp;:&nbsp;<span class="price">${obj[i].price}</span></h4>
                </div>

             </li>`

        }
        obox.html(str);

        // f1 ------------------------->
        var obj1 = data.data.f1
        var box = $("#img-box")
        var str = "";
        for (var i = 0; i < obj1.length; i++) {
            str += `<li>
                <div id="box" data-id="${obj1[i].id}">
                  <div class="imgbox2">
                    <img class="img" src="${obj1[i].img}">
                  </div>
                    <a class="title">${obj1[i].title}</a>
                    <h4>热卖价&nbsp;:&nbsp;<span class="price">${obj1[i].price}</span></h4>
                </div>

             </li>`

        }
        box.html(str);

        // f2 ------------------------->
        var obj2 = data.data.f2
        var box2 = $("#img-box2")
        var str = "";
        for (var i = 0; i < obj2.length; i++) {
            str += `<li>
                <div id="box2" data-id="${obj2[i].id}">
                  <div class="imgbox3">
                    <img class="img" src="${obj2[i].img}">
                  </div>
                    <a class="title">${obj2[i].title}</a>
                    <h4>热卖价&nbsp;:&nbsp;<span class="price">${obj2[i].price}</span></h4>
                </div>

             </li>`

        }
        box2.html(str);
        }
    }
}


indexObj.init()





// 用面向对象写鼠标放上去,图片放大
// function oimg(){
//     $(".imgs").width(230);
//     $(".imgs").height(220);
//     var bstop = false;
//     this.init()
// }
// $.extend(oimg.prototype,{
//     init:function(){
//         this.onmouseover();
//     },
//    onmouseover:function(){
//         $(".imgs").on("mouseover",function(){
//             if(!bstop){
//                 $(".imgs").width(400);
//                 $(".imgs").height(400);
//             }else{
//                 $(".imgs").width(230);
//                 $(".imgs").height(220);
//             }

//             })
//         } 
// })
// new oimg()




// var banner={
//     ali : $("#banner>ul>li"),
//     next:0,
//     inow :0,
//     init:function(){
//         this.autoplay()
//     },
//     autoplay:function(){
//         setInterval($.proxy(this.handelauto,this),1000)
//     },
//     toimg:function(){
//         this.ali.eq(this.inow).fadeTo(500,0);
//         this.ali.eq(this.next).fadeTo(500,1);
//         this.inow = this.next;
//     },
//     handelauto:function(){
//         console.log(this.ali)
//         if(this.next > this.ali.length-2){
//             this.next = 0;
//         }else{
//             this.next ++;
//         }
//         this.toimg()
//     }
// }