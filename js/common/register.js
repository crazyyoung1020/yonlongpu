function Register(ele){
    this.content = ele;
    this.init();
}
Register.template = ` <!-- 注册 模态框 -->
<div class="modal fade" id="myModal-register" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog" role="document">
<div class="modal-content">
    <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title" id="myModalLabel">用户注册
            <br/><span>欢迎来到永隆铺，如果您是新用户，请填写下面的表单进行注册</span></h4>
    </div>
    <div class="modal-body">
        <form>
            <div class="form-group">
            <label for="exampleInputEmail1">用户名</label>
            <input type="text" class="form-control  name" id="exampleInputEmail1" placeholder="Email">
            </div>
            <div class="form-group">
            <label for="exampleInputPassword6">密码</label>
            <input type="text" class="form-control  pass" id="exampleInputPassword6" placeholder="Password">
            </div>
            <div class="form-group">
                    <label for="exampleInputPassword3">确认密码</label>
                    <input type="text" class="form-control" id="exampleInputPassword3" placeholder="Password">
            </div>
            <div class="form-group">
                    <label for="exampleInputPassword4">电子邮箱</label>
                    <input type="text" class="form-control" id="exampleInputPassword4" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword5">验证码</label>
                <input type="text" class="form-control" id="exampleInputPassword5" placeholder="Password">
            </div>
            <div class="checkbox">
            <label>
                <input type="checkbox"> 我已阅读并同意 会员注册协议和隐私保护政策。
            </label>
            </div>
            <button type="submit" class="btn btn-default" data-toggle="modal" data-target="#myModal-login" id="js-regBtn">确认注册</button>
        </form>
    </div>
</div>
</div>
</div> `
$.extend(Register.prototype,{
    init:function(){
        this.createDom();
        this.regBtn();
    },
    createDom:function(){
        this.element = $("<div></div>").append(Register.template);
        this.content.append(this.element)
    },
    regBtn:function(){
        var js_btn = this.element.find("#js-regBtn");
        js_btn.on("click",$.proxy(this.handleRegister,this))
    },
    handleRegister:function(){
        var username = this.element.find(".name").val();
        var password = this.element.find(".pass").val();
        console.log(username,password)
        $.ajax({
            type:"post",
            url:"http://localhost/yonglongpu/php/register.php",
            // url:"http://localhost/yonglongpu/json/register.json",
            dataType:"json",
            data:{
                userId:username,
                password:password
            },
            success:$.proxy(this.handleSuccess,this),
            error:function(){
               alert('接口异常') 
            }
        })
    },
    handleSuccess:function(data){
        console.log(data)
        if(data == 1){
            alert("注册成功")
        }else{
            alert("注册失败")
        }
    }

})