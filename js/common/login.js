function Login(ele){
    this.content = ele;
    this.init()
}
Login.template =`<!-- 登录-模态框 -->
<div class="modal fade" id="myModal-login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog" role="document">
<div class="modal-content">
    <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title" id="myModalLabel">已注册用户,请登录<br/><span>如果您已是本站会员,请登录</span></h4>
    </div>
    <div class="modal-body">
        <form>
            <div class="form-group">
            <label for="exampleInput"></label>用户名&nbsp;:&nbsp;</label>
            <input type="text" class="form-control" id="exampleInput" placeholder="Email">
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">密码&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword2">验证码&nbsp;:&nbsp;</label>
                <input type="text" class="form-control" id="exampleInputPassword2" placeholder="Password">
            </div>
            <div class="checkbox">
            <label>
                <input type="checkbox"> 记住密码
            </label>
            </div>
            <button type="submit" class="btn btn-default" data-dismiss="modal" id="log_btn">立刻登录</button>
        </form>
    </div>
</div>
</div>
</div> `
$.extend(Login.prototype,{
    init:function(){
        this.createDom()
        this.login()
    },
    createDom:function(){
        this.element = $("<div></div>").append(Login.template);
        this.content.append(this.element)

    },
    login:function(){
        
        var logbtn = this.element.find("#log_btn");
        console.log(logbtn)
        logbtn.on("click",$.proxy(this.click,this))
    },
    click:function(){
        // console.log(1)
        var username = this.element.find("#exampleInput").val();
        var Password = this.element.find("#exampleInputPassword1").val();
        // console.log(username, Password)
        $.ajax({
            type:"post",
            url:"http://localhost/yonlongpu/php/login.php",
            // url:"js/register.jspn",
            dataType:"json",
            data:{
                userId:username,
                password:Password,
            },
         
            success:function(data){
                if(data == 6){
                    alert("登陆成功")
                }else {
                    alert(data)
                }
            },
            error:function(){
                alert("接口异常")
            }
        })
    }
    // success:function(data){
    //     //    if()
    // }
})

