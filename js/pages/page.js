function Nav(){
    this.content = $("#header");
    this.init();
}
$.extend(Nav.prototype,{
    init:function(){
        this.createDom()
    },
    createDom:function(){
 
        this.element = new Header(this.content)
    }
})
var nav = new Nav();
