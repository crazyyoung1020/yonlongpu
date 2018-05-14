function Header(ele){
    this.content = ele;
    this.init();
}
Header.template=`<div id="top-wrap">
                    <div class="top content">
                        <div class="left">可提供各种场合本地水果配送及水果礼盒定制服务!</div>
                        <div class="right">
                            <span>你好!&nbsp;</span>
                            <a  class="login" data-toggle="modal" data-target="#myModal-login">[请登录]&nbsp;</a>
                            <a  class="login" data-toggle="modal" data-target="#myModal-register">[免费注册]&nbsp;&nbsp;</a>
                            <span>官方论坛&nbsp;|&nbsp;充值有礼&nbsp;|&nbsp;留言反馈&nbsp;&nbsp;</span>
                            <i class="iconfont icon-dianhua"></i>&nbsp;18718574119
                        </div>
                        <div id="regModel"></div>
                        <div id="logModel"></div>
                    </div>
                    </div>
                                 
                    <!-- header-wrap -->
                    <div id="header-wrap">
                        <div class="header content">
                                    <div class="logo">
                                        <img src="images/img/1 (27).jpg">
                                    </div>
                                    <div class="search">
                                        <form name="" method="" action="" class="clearfix">
                                            <input type="text" placeholder=""  />
                                            <input type="submit" value="搜&nbsp;索"  />
                                        </form>
                                        <i class="iconfont icon-ai219"></i>
                                        <div class="fruit">
                                            <span>热门关键字&nbsp;&nbsp;:&nbsp;&nbsp;</span>
                                            <a href="#">樱桃&nbsp;</a>
                                            <a href="#">苹果&nbsp;</a>
                                            <a href="#">奇异果&nbsp;</a>
                                            <a href="#">火龙果</a>
                                        </div>
                                    </div>
                                    <div class="buy">
                                            <i class="iconfont icon-gouwuche"></i>
                                            <a href="#" class="aaa">我的购物车</a>
                                    </div>
                                    <div class="account">
                                            <i class="iconfont icon-ren"></i>
                                            <a href="#" class="aaa">我的账户</a>
                                        </div>
                        </div>
                    </div>
                    <!-- nav-wrap -->
                    <div id="nav-wrap">
                        <div class="nav content">
                            <div class="pull">
                                <a href="#">全部进口商品</a>
                            </div>
                            <div class="bu"></div>
                            <div id= "menudiv">
                                <ul>	     
                                    <li><a href="#">营养套餐</a></li>
                                    <li><a href="#">水果礼盒</a></li>
                                    <li><a href="#">箱装水果</a></li>
                                    <li><a href="#">国产水果</a></li>
                                    <li><a href="#">进口水果</a></li>
                                    <li><a href="#">干货食品</a></li>
                                </ul>
                            </div>
                            <div class="list">
                                <a href="#">首页</a>
                                <a href="#">进口水果</a>
                                <a href="#">国产水果</a>
                                <a href="#">免费送货专区</a>
                                <a href="#">水果礼盒</a>
                                <a href="#">干货专区</a>
                            </div>
                        </div>
                    </div>`

$.extend(Header.prototype,{
    init:function(){
        this.createDom();
    },
    createDom:function(){
        this.element = $("<div></div>").append(Header.template);
        this.register = new Register(this.element.find("#regModel"))
        this.login = new Login(this.element.find("#logModel"))
        this.content.append(this.element);
        
    }
})

