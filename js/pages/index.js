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
// banner.init()

layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
    elem: '#test1'
    ,width: '100%' //设置容器宽度
    ,height:"402"
    ,arrow: 'always' //始终显示箭头
    //,anim: 'updown' //切换动画方式
    });
});
// jquery list列表
var obj=[{
    "id":1,
    "img":"images/img/a.jpg",
    "title":"智利车厘子&nbsp;樱桃两斤装",
    "price":"￥99.00"
},
{
    "id":2,
    "img":"images/img/b.jpg",
    "title":"新西兰佳沛经典绿奇异果6个装",
    "price":"￥30.00"
},
{
    "id":3,
    "img":"images/img/1 (23).jpg",
    "title":"日本陆奥苹果1个装",
    "price":"￥78.00"
},
{
    "id":4,
    "img":"images/img/d.jpg",
    "title":"特级智利加力果 姬纳果加纳果",
    "price":"￥39.00"
}
]
var obox = $("#box")
var str="";
for(var i=0;i<obj.length;i++){
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
// f1 ------------------------->
var obj1=[{
    "id":1,
    "img":"images/img/c.jpg",
    "title":"赣南脐橙",
    "price":"￥59.00"
},
{
    "id":2,
    "img":"images/img/1 (12).jpg",
    "title":"德庆皇帝柑",
    "price":"￥36.00"
},
{
    "id":3,
    "img":"images/img/1 (35).jpg",
    "title":"新鲜红霞草莓1斤装",
    "price":"￥39.00"
},
{
    "id":4,
    "img":"images/img/1 (39).jpg",
    "title":"广西桂林金桔 金桔4斤装",
    "price":"￥99.00"
},
{
    "id":5,
    "img":"images/img/1 (23).jpg",
    "title":"阿克苏冰糖心苹果",
    "price":"￥99.00"
},
{
    "id":6,
    "img":"images/img/1 (36).jpg",
    "title":'新疆库尔勒香梨 "奶西姆提"',
    "price":"￥28.00"
},
{
    "id":7,
    "img":"images/img/1 (21).jpg",
    "title":"新鲜水果百香果",
    "price":"￥29.00"
},
{
    "id":8,
    "img":"images/img/1 (6).jpg",
    "title":"山东富士苹果8斤装",
    "price":"￥99.00"
}
]
var box = $("#img-box")
var str="";
for(var i=0;i<obj1.length;i++){
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
var obj2=[{
    "id":1,
    "img":"images/img/c.jpg",
    "title":"赣南脐橙",
    "price":"￥59.00"
},
{
    "id":2,
    "img":"images/img/1 (12).jpg",
    "title":"德庆皇帝柑",
    "price":"￥36.00"
},
{
    "id":3,
    "img":"images/img/1 (35).jpg",
    "title":"新鲜红霞草莓1斤装",
    "price":"￥39.00"
},
{
    "id":4,
    "img":"images/img/1 (39).jpg",
    "title":"广西桂林金桔 金桔4斤装",
    "price":"￥99.00"
},
{
    "id":5,
    "img":"images/img/1 (23).jpg",
    "title":"阿克苏冰糖心苹果",
    "price":"￥99.00"
},
{
    "id":6,
    "img":"images/img/1 (36).jpg",
    "title":'新疆库尔勒香梨 "奶西姆提"',
    "price":"￥28.00"
},
{
    "id":7,
    "img":"images/img/1 (21).jpg",
    "title":"新鲜水果百香果",
    "price":"￥29.00"
},
{
    "id":8,
    "img":"images/img/1 (6).jpg",
    "title":"山东富士苹果8斤装",
    "price":"￥99.00"
}
]
var box2 = $("#img-box2")
var str="";
for(var i=0;i<obj2.length;i++){
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











































// var banner = {
//     ali: $("#banner>ul>li"),
//     next : 0,
//     inow : 0,
//     init : function(){
//         this.autoPlay()
//     },
//     autoPlay : function(){
//         setInterval($.proxy(this.handelAuto,this),1000)
//     },
//     toImg : function(){
//         this.ali.eq(this.next).fadeTo(500,1);
//         this.ali.eq(this.inow).fadeTo(500,0);
//         this.inow = this.next;
//     },
//     handelAuto : function(){
//         if(this.next > this.ali.length-1){
//             this.next = 0;
//         }else{
//             this.next ++;
//         }
//         this.toImg();
//     }

// }

// banner.init()