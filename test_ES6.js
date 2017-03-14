import $ from 'jQuery';
import _ from 'underscore';


class config{
	constructor(){				//构造函数
		this.winW  = 0;
		this.winH  = 0;
		this.startx = 0;
		this.starty = 0;
		this.movex = 0;
		this.movey = 0;
		this.endx = 0；
		this.endy = 0;
		this.startT = 0;
		this.endT = 0;
		this.xx = 0;
		this.eles ={
			avtive: '.active',
			boxEle： '.slide_box'，
            img: '.img',//…………未完结
		}
        this.eventsMap ={      
            'touchstart .active':'moveStart',
            'touchmove .avtive':'moveDrag',
            'touchend .active':'moveStop',
        }
	}
}
export default config;






let base = (supperclass) =>class extends supperclass{
    constructor(){
        super();
        this.doc = $(document);
        this.initializeElements();
    }
    initializeElements(eles){
        for(var name in eles){//获得所有element
            if (eles.hasOwnProperty(name)) {
                this[name] = $(eles[name]);
            }
        }
   }
    bindEvent(){
        this._scanEventsMap(this.eventsMap,true);
    }
    unbindEvent(){
        this._scanEventsMap(this.eventsMap);
    }
    _scanEventsMap(maps.isOn){
        var delegateEventSplitter = /^(\S+)\s*(.*)$/;
        var bind = isOn?this._delegate:this._undelegate;
        for( var keys in maps){
            if (maps.hasOwnProperty(keys)) {
                var matchs = keys.match(delegateEventSplitter);
                bind(matchs[1], matchs[2],maps[keys].bind(this));
            }
        }
    }
    _delegate(name, selector, func){
        this.doc.on(name, selector, func);
    }
    _undelegate(name, selector, func){
        this.doc.off(name, selector, func);
    }
    destroy(){
        this.unbindEvent();
    }

 }
export default base;






class slide_css extends base(config){
    constructor(options){
        super(options);
        super.bindEvent();
        this.init();
    }
    init(ele){
        this.winW=parseFloat($(window).width());//获取浏览器宽
        this.winH=parseFloat($(window).height());//获取高
         var n=ele.find("a").size();//元素中a的个数
        ele.find(".slide_box").css("width",_this.winW*n+"px");//给slide_box适应屏宽
        ele.find("a").css("width",_this.winW+"px");//给a适应屏宽
        ele.find("a:eq(0)").addClass("active").css("opacity","1");//第一个a添加active属性,不透明度100%；
    }
    changePage(){
        if(!!active.next()[0]){//如果只找到一个（即没有第二个）
            active.addClass("slide_trans").css("opacity",".5");//添加slide_trans属性和半透明属性
            active.next().addClass("active slide_trans").css("opacity","1").siblings().removeClass("active");//下一张显示
            if (endx<0&&endy<50) {
                boxEle.addClass("slide_trans").css("transform","translateX("+(-_this.winW*(active.index()+1))+"px)");//横向动作，父元素像右移一屏      
            }else if (endx>0&&endy<50) {
                boxEle.addClass("slide_trans").css("transform","translateX("+(-_this.winW*(active.index()-1))+"px)");//横向动作，父元素像右移一屏
            }
        }
    }
    moveStart(){
        var touch=e.targetTouches[0];//获得初始触屏点
        this.startx=touch.pageX;
        this.starty=touch.pageY;
        this.startT=new Date().getTime();//获取初始触屏时间
        this.xx=_this.boxEle.css("transform").replace(/[^0-9\-,]/g,'').split(',')[4];//获取transform值
        this.xx=parseFloat(this.xx);
    }
    moveDrag(){
        boxEle.removeClass("slide_trans");
        var touch=e.changedTouches[0];//获取当前触屏点
        e.preventDefault();//打断继续触屏
        movex=touch.pageX-startx;
        movey=touch.pageY-starty;
        boxEle.css("transform","translateX("+(xx+movex)+"px)");//横向移动xx+movex单位

    }
    moveStop(){
        var touch=e.changedTouches[0];//获得当前点
        this.endx=touch.pageX-startx;//当前与开始的水平差
        this.endy=Math.abs(touch.pageY-starty);//当前与开始的垂直差
        this.changePage();
        this.endT=new Date().getTime();//获取当前结束接触时间
        }
    
    }
}
export default slide_css;

