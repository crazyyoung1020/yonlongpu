var gouwucheObj = {
    init:function(){
        this.query();
        this.domEvent();
    },
    domEvent:function(){
        $('#shop tbody .remove').on('click',function(){
            id = $(this).siblings('input').val()
            $(this).parent().remove()
        })
    },
    query:function(){
        var shopList = window.localStorage.getItem('shopList')
        shopList = JSON.parse(shopList)
        this.render(shopList)
    },
    render:function(shopList){
        var str = ''
        var obj = this.objList
        for(var i=0;i<shopList.length;i++){
            var id = shopList[i].id
            var totle = obj[id-1].price*shopList[i].num
            str += `
            <tr>
                <td><img src="${obj[id-1].img}"/></td>
                <td>${obj[id-1].title}</td>
                <td>${obj[id-1].scores}</td>
                <td>${obj[id-1].price}</td>
                <td>${obj[id-1].discount}</td>
                <td>${shopList[i].num}</td>
                <td>${totle}</td>
                <td class="remove"></td>
                <input type="hidden value="${id}"/>
            </tr>
            `
        }
        $('#tbody').html(str)
    },
    objList:[{
        "id": 1,
        "img": "images/img/a.jpg",
        "title": "智利车厘子 樱桃2斤装",
        "price": "￥99.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 2,
        "img": "images/img/b.jpg",
        "title": "新西兰佳沛经典绿奇异果6个装",
        "price": "￥30.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 3,
        "img": "images/img/1 (23).jpg",
        "title": "日本陆奥苹果1个装",
        "price": "￥78.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 4,
        "img": "images/img/d.jpg",
        "title": "特级智利加力果 姬纳果加纳果",
        "price": "￥39.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 5,
        "img": "images/img/c.jpg",
        "title": "赣南脐橙",
        "price": "￥59.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 6,
        "img": "images/img/1 (12).jpg",
        "title": "德庆皇帝柑",
        "price": "￥36.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 7,
        "img": "images/img/1 (35).jpg",
        "title": "新鲜红霞草莓1斤装",
        "price": "￥39.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 8,
        "img": "images/img/1 (39).jpg",
        "title": "广西桂林金桔 金桔4斤装",
        "price": "￥99.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 9,
        "img": "images/img/1 (23).jpg",
        "title": "阿克苏冰糖心苹果",
        "price": "￥99.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 10,
        "img": "images/img/1 (36).jpg",
        "title": "新疆库尔勒香梨 奶西姆提",
        "price": "￥28.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 11,
        "img": "images/img/1 (21).jpg",
        "title": "新鲜水果百香果",
        "price": "￥29.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 12,
        "img": "images/img/1 (6).jpg",
        "title": "山东富士苹果8斤装",
        "price": "￥99.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 13,
        "img": "images/img/c.jpg",
        "title": "赣南脐橙",
        "price": "￥59.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 14,
        "img": "images/img/1 (12).jpg",
        "title": "德庆皇帝柑",
        "price": "￥36.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 15,
        "img": "images/img/1 (35).jpg",
        "title": "新鲜红霞草莓1斤装",
        "price": "￥39.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 16,
        "img": "images/img/1 (39).jpg",
        "title": "广西桂林金桔 金桔4斤装",
        "price": "￥99.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 17,
        "img": "images/img/1 (23).jpg",
        "title": "阿克苏冰糖心苹果",
        "price": "￥99.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 18,
        "img": "images/img/1 (36).jpg",
        "title": "新疆库尔勒香梨 奶西姆提",
        "price": "￥28.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 19,
        "img": "images/img/1 (21).jpg",
        "title": "新鲜水果百香果",
        "price": "￥29.00",
        "scores": '9',
        "discount":'￥9.00'
    },
    {
        "id": 20,
        "img": "images/img/1 (6).jpg",
        "title": "山东富士苹果8斤装",
        "price": "￥99.00",
        "scores": '9',
        "discount":'￥9.00'
    }
]
}
gouwucheObj.init()