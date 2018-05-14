
function Magnify(ele){
      this.box = ele.find("#box");
      this.middle = ele.find(".middle");
      this.filter = ele.find("#filter");
      this.maximg = ele.find("#maximg");
      this.max = ele.find(".max")
}
$.extend(Magnify.prototype,{
    init:function(){
        var _this =this; 
        this.box.on("mouseover",$.proxy(_this.over,_this))
    },
    over:function(){
        var _this = this;
        this.filter.css("display","block")
        this.maximg.css("display","block")
        this.box.on("mousemove",$.proxy(_this.move,_this))
    },
    move:function(e){
        var e = e || event;
        this.boxMarginLeft = this.box.offset().left-$(document).scrollLeft();
        this.boxMarginTop = this.box.offset().top-$(document).scrollTop();
        this.l = e.clientX - this.filter[0].offsetWidth/2-this.boxMarginLeft;
        this.t = e.clientY - this.filter[0].offsetHeight/2-this.boxMarginTop;

        if(this.l>this.box[0].offsetWidth - this.filter[0].offsetWidth){
            this.l=this.box[0].offsetWidth - this.filter[0].offsetWidth;
        };
        if(this.t>this.box[0].offsetHeight - this.filter[0].offsetHeight){
            this.t=this.box[0].offsetHeight - this.filter[0].offsetHeight
        };

        if(this.l<0){
            this.l = 0;
        };
        if(this.t<0){
            this.t=0;
        };

        this.filter.css("left",this.l+'px')
        this.filter.css("top",this.t+'px')  

        this.max.css("left",-2*this.l+'px')
        this.max.css("top",-2*this.t+'px')  

        var _this = this;
        this.box.on("mouseout",$.proxy(_this.out,_this))
   },
   out:function(){
       this.filter.css("display","none");
       this.maximg.css("display","none");
   }
})
    
new Magnify($("#content")).init();
