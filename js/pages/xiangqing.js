function Magnify(ele) {
    this.box = ele.find("#box");
    this.middle = ele.find(".middle");
    this.filter = ele.find("#filter");
    this.maximg = ele.find("#maximg");
    this.max = ele.find(".max")
}
$.extend(Magnify.prototype, {
    init: function () {
        var _this = this;
        this.box.on("mouseover", $.proxy(_this.over, _this))
    },
    over: function () {
        var _this = this;
        this.filter.css("display", "block")
        this.maximg.css("display", "block")
        this.box.on("mousemove", $.proxy(_this.move, _this))
    },
    move: function (e) {
        var e = e || event;
        this.boxMarginLeft = this.box.offset().left - $(document).scrollLeft();
        this.boxMarginTop = this.box.offset().top - $(document).scrollTop();
        this.l = e.clientX - this.filter[0].offsetWidth / 2 - this.boxMarginLeft;
        this.t = e.clientY - this.filter[0].offsetHeight / 2 - this.boxMarginTop;

        if (this.l > this.box[0].offsetWidth - this.filter[0].offsetWidth) {
            this.l = this.box[0].offsetWidth - this.filter[0].offsetWidth;
        };
        if (this.t > this.box[0].offsetHeight - this.filter[0].offsetHeight) {
            this.t = this.box[0].offsetHeight - this.filter[0].offsetHeight
        };

        if (this.l < 0) {
            this.l = 0;
        };
        if (this.t < 0) {
            this.t = 0;
        };

        this.filter.css("left", this.l + 'px')
        this.filter.css("top", this.t + 'px')

        this.max.css("left", -2 * this.l + 'px')
        this.max.css("top", -2 * this.t + 'px')

        var _this = this;
        this.box.on("mouseout", $.proxy(_this.out, _this))
    },
    out: function () {
        this.filter.css("display", "none");
        this.maximg.css("display", "none");
    }
})

var xiangqing = {
    init: function () {
        var id = window.location.search.slice(4);
        this.query(id);
        this.domEvent(id)
    },
    domEvent: function (id) {
        var number = Number($('#quantity').val())
        $('#add').on('click',function(){
            number += 1
            $('#quantity').val(number)
        })
        $('#minus').on('click',function(){
            if(number>1){
              number -= 1
              $('#quantity').val(number)
            }
        })
        $('#addCart').on('click',function(){
            var shopList = window.localStorage.getItem('shopList')?window.localStorage.getItem('shopList'):[];
            shopList = JSON.parse(shopList)
            var num = $('#quantity').val()
            shopList.push({id:id,num:num})
            shopList = JSON.stringify(shopList)
            window.localStorage.setItem('shopList',shopList)
        })
    },
    query: function (id) {
        var objList = this.objList;
        var obj = objList[id - 1] //此处模拟后台处理前端的详情请求
        this.render(obj)
        new Magnify($("#content")).init();
    },
    render: function (obj) {
        var str = `
        <div id="content">
            <div id="box">
                <img class="middle" src="${obj.img}">
                <div id="filter"></div>
            </div>
            <div id="small">
                <img class="small" src="${obj.smallImg}">
            </div>
            <div id="maximg">
                <img class="max" src="${obj.maxImg}">
            </div>
        </div>
        <div id="details">
              <h2>${obj.title}</h2>
              <p>${obj.detail}</p>
              <span>商品编号：${obj.goodsNo}</span>
              <span>商品重量：${obj.weight}</span><br/>
              <span>货　　号：${obj.productCode}</span>
              <span>计量单位：${obj.unit}</span><br/>
              <span>所得积分：${obj.scores}</span><br/>
              <span>市场价：</span><br/>
              <span>销售价： ${obj.price}</span><br/>
              <span>优惠：34.0%</span>
              <div id="cart">
                  <p>您已选择："斤"</p>
                  <p>斤：</p>
                  <div class="numbox">
                      <span>购买数量：	</span>
                      <input id="quantity" type="text" value="1"/>
                      <button id="add"><img src="images/1.jpg"></button>
                      <button id="minus"><img src="images/2.jpg"></button>
                      <div id="buyNow">立即购买</div>
                      <div id="addCart">加入购物车</div>
                  </div>
              </div>
        </div>
        `
        $('#left').html(str)
    },
    objList: [{
            "id": 1,
            "img": "images/img/a.jpg",
            "title": "智利车厘子 樱桃2斤装",
            "price": "￥99.00",
            "smallImg": 'images/img/a.jpg',
            "maxImg": 'images/img/a.jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'

        },
        {
            "id": 2,
            "img": "images/img/b.jpg",
            "title": "新西兰佳沛经典绿奇异果6个装",
            "price": "￥30.00",
            "smallImg": 'images/img/b.jpg',
            "maxImg": 'images/img/b.jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 3,
            "img": "images/img/1 (23).jpg",
            "title": "日本陆奥苹果1个装",
            "price": "￥78.00",
            "smallImg": 'images/img/1 (23).jpg',
            "maxImg": 'images/img/1 (23).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 4,
            "img": "images/img/d.jpg",
            "title": "特级智利加力果 姬纳果加纳果",
            "price": "￥39.00",
            "smallImg": 'images/img/d.jpg',
            "maxImg": 'images/img/d.jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 5,
            "img": "images/img/c.jpg",
            "title": "赣南脐橙",
            "price": "￥59.00",
            "smallImg": 'images/img/c.jpg',
            "maxImg": 'images/img/c.jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 6,
            "img": "images/img/1 (12).jpg",
            "title": "德庆皇帝柑",
            "price": "￥36.00",
            "smallImg": 'images/img/1 (12).jpg',
            "maxImg": 'images/img/1 (12).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 7,
            "img": "images/img/1 (35).jpg",
            "title": "新鲜红霞草莓1斤装",
            "price": "￥39.00",
            "smallImg": 'images/img/1 (35).jpg',
            "maxImg": 'images/img/1 (35).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 8,
            "img": "images/img/1 (39).jpg",
            "title": "广西桂林金桔 金桔4斤装",
            "price": "￥99.00",
            "smallImg": 'images/img/1 (39).jpg',
            "maxImg": 'images/img/1 (39).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 9,
            "img": "images/img/1 (23).jpg",
            "title": "阿克苏冰糖心苹果",
            "price": "￥99.00",
            "smallImg": 'images/img/1 (23).jpg',
            "maxImg": 'images/img/1 (23).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 10,
            "img": "images/img/1 (36).jpg",
            "title": "新疆库尔勒香梨 奶西姆提",
            "price": "￥28.00",
            "smallImg": 'images/img/1 (36).jpg',
            "maxImg": 'images/img/1 (36).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 11,
            "img": "images/img/1 (21).jpg",
            "title": "新鲜水果百香果",
            "price": "￥29.00",
            "smallImg": 'images/img/1 (21).jpg',
            "maxImg": 'images/img/1 (21).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 12,
            "img": "images/img/1 (6).jpg",
            "title": "山东富士苹果8斤装",
            "price": "￥99.00",
            "smallImg": 'images/img/1 (6).jpg',
            "maxImg": 'images/img/1 (6).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 13,
            "img": "images/img/c.jpg",
            "title": "赣南脐橙",
            "price": "￥59.00",
            "smallImg": 'images/img/c.jpg',
            "maxImg": 'images/img/c.jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 14,
            "img": "images/img/1 (12).jpg",
            "title": "德庆皇帝柑",
            "price": "￥36.00",
            "smallImg": 'images/img/1 (12).jpg',
            "maxImg": 'images/img/1 (12).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 15,
            "img": "images/img/1 (35).jpg",
            "title": "新鲜红霞草莓1斤装",
            "price": "￥39.00",
            "smallImg": 'images/img/1 (35).jpg',
            "maxImg": 'images/img/1 (35).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 16,
            "img": "images/img/1 (39).jpg",
            "title": "广西桂林金桔 金桔4斤装",
            "price": "￥99.00",
            "smallImg": 'images/img/1 (39).jpg',
            "maxImg": 'images/img/1 (39).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 17,
            "img": "images/img/1 (23).jpg",
            "title": "阿克苏冰糖心苹果",
            "price": "￥99.00",
            "smallImg": 'images/img/1 (23).jpg',
            "maxImg": 'images/img/1 (23).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 18,
            "img": "images/img/1 (36).jpg",
            "title": "新疆库尔勒香梨 奶西姆提",
            "price": "￥28.00",
            "smallImg": 'images/img/1 (36).jpg',
            "maxImg": 'images/img/1 (36).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 19,
            "img": "images/img/1 (21).jpg",
            "title": "新鲜水果百香果",
            "price": "￥29.00",
            "smallImg": 'images/img/1 (21).jpg',
            "maxImg": 'images/img/1 (21).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        },
        {
            "id": 20,
            "img": "images/img/1 (6).jpg",
            "title": "山东富士苹果8斤装",
            "price": "￥99.00",
            "smallImg": 'images/img/1 (6).jpg',
            "maxImg": 'images/img/1 (6).jpg',
            "detail": '永隆铺—深圳高品质水果网上超市，我们只挑有来头的水果，智利樱桃火爆来袭，产地直供，全程冷链，美味新鲜上市。本批樱桃表皮光洁，色泽鲜亮，果肉坚实而脆，香甜沁心，口感甜蜜，是冬日里不可多得的上品樱桃。',
            "goodsNo": 'G549D38A57F5C7',
            "weight": '1000.000克(g)',
            "productCode": 'G549D38A57F5C7',
            "unit": '2斤装',
            "scores": '9'
        }
    ]
}
xiangqing.init()