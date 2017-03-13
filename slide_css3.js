var slide_css3={
    winW:0,
    winH:0,
    ele:null,//用来获取元素
    boxEle:null,//用来获取元素
    timer:null,//用来设置定时器
    init:function(select){//适应屏宽
        var _this=this,n;
        this.winW=parseFloat($(window).width());//获取浏览器宽
        this.winH=parseFloat($(window).height());//获取高
        this.ele=$(select);//获取元素
        this.boxEle=this.ele.find(".slide_box");//获取父元素
        n=this.ele.find("a").size();//元素中a的个数
        this.ele.find(".slide_box").css("width",_this.winW*n+"px");//给slide_box适应屏宽
        this.ele.find("a").css("width",_this.winW+"px");//给a适应屏宽
        this.ele.find("a:eq(0)").addClass("active").css("opacity","1");//第一个a添加active属性,不透明度100%；
        this.bindTouchEvent();
    },
    next:function(){//下一张
        var _this=this;
        var active=this.boxEle.find(".active");//获取active元素
        if(!!active.next()[0]){//如果只找到一个（即没有第二个）
            active.addClass("slide_trans").css("opacity",".5");//添加slide_trans属性和半透明属性
            active.next().addClass("active slide_trans").css("opacity","1").siblings().removeClass("active");//下一张显示
            this.boxEle.addClass("slide_trans")
                .css("transform","translateX("+(-_this.winW*(active.index()+1))+"px)");//横向动作，父元素像右移一屏
        }
    },
    prev:function(){//上一张
        var _this=this;
        var active=this.boxEle.find(".active");
        if(!!active.prev()[0]){
            active.addClass("slide_trans").css("opacity",".5");
            active.prev().addClass("active slide_trans").css("opacity","1").siblings().removeClass("active");
            this.boxEle.addClass("slide_trans")
                .css("transform","translateX("+(-_this.winW*(active.index()-1))+"px)");;//横向动作，父元素像左移一屏
        }
        console.log("上一张");
    },
    bindTouchEvent:function(){
        var _this=this;
        var startx,movex,starty,movey,endx,endy,startT,endT,xx;
        this.ele[0].addEventListener("touchstart",function(e){
            var touch=e.targetTouches[0];//获得初始触屏点
            startx=touch.pageX;
            starty=touch.pageY;
            startT=new Date().getTime();//获取初始触屏时间
            xx=_this.boxEle.css("transform").replace(/[^0-9\-,]/g,'').split(',')[4];//获取transform值
            if(!xx){xx=0;}//获取失败
            xx=parseFloat(xx);
    //        console.log(xx);
        });
        this.ele[0].addEventListener("touchmove",function(e){//拖动移动
            _this.boxEle.removeClass("slide_trans");
            var touch=e.changedTouches[0];//获取当前触屏点
            e.preventDefault();//打断继续触屏
            movex=touch.pageX-startx;
            movey=touch.pageY-starty;
            _this.boxEle.css("transform","translateX("+(xx+movex)+"px)");//横向移动xx+movex单位
  //          console.log(movex);
//            console.log(movey);
        });
        this.ele[0].addEventListener("touchend",function(e){//当end之后，要判断方向，速度，然后调用上一张还是下一张
            var touch=e.changedTouches[0];//获得当前点
            endx=touch.pageX-startx;//当前与开始的水平差
            endy=Math.abs(touch.pageY-starty);//当前与开始的垂直差
            if(endx<0&&endy<50){
                console.log("左边");
                _this.next();//左移
            }else if(endx>0&&endy<50){
                console.log("右边");
                _this.prev();//右移
            }
            endT=new Date().getTime();//获取当前结束接触时间
        });
    },
    speed:function(){
        
    }
}




//调用
//var cat1 = Object.create(Cat);
var slide_css =Object.create(slide_css3);
slide_css.init("#firstPage");
slide_css.next();
slide_css.prev();













