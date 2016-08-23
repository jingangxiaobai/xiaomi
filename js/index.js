/**
 * Created by hxsd on 2016/8/13.
 */
$(function () {
//            banner区轮播图
    $("#preBtn").click(function () {
        var ul = $("#slide");
        var first = ul.find("li:first");
        first.animate({"margin-left": "-1228px"}, "slow", function () {
            ul.append(first);
            first.css("margin-left", "0px")
        })
    });
    $("#nextBtn").click(function () {
        var ul = $("#slide");
        var last = ul.find("li:last");
        ul.find("li:animated").stop().css("margin-left", "0px");
        ul.prepend(last);
        last.css("margin-left", "-620px");
        last.animate({"margin-left": "0px"}, "slow");
    });
    //rainbow轮播图
    /*    setInterval(function(){
     $(".btnLeft").click();
     },1000);
     setInterval(function(){
     $(".btnRight").click();
     },2000);*/
    $(".btnLeft").css("color", "#ff6709");
    $(".btnRight").click(function () {
        $(".rainbow").animate({"margin-left": "-1240px"}, "slow");
        $(".btnRight").css("color", "#ff6709");
        $(".btnLeft").css("color", "#454c55");
    });
    $(".btnLeft").click(function () {
        $(".rainbow").animate({"margin-left": "-0px"}, "slow");

        $(".btnLeft").css("color", "#ff6709");
        $(".btnRight").css("color", "#454c55");
    });
    //选项卡组件
    function tab(id,className,ul){
        var oTab = document.getElementById(id);
        var ul = $('.'+ul);
      var aLi = ul.find("li");
        var aDiv = oTab.getElementsByClassName(className);
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            aLi[i].onmouseover = function () {
                for (var i = 0; i < aLi.length; i++) {
                    aLi[i].className='';
                    aDiv[i].style.display = "none";
                }
                this.className='ac';
                aDiv[this.index].style.display = "block";
            };
        }
    }
    tab("tab1","tabPartRight","nav1");
    tab("tab2","tabPartRight","nav2");
    tab("tab3","tabPartRight","nav3");
    //选项卡淘宝菜单组件
    function menu(menu,menuCont){
        var oMenu=document.getElementById(menu);
        var aLi=oMenu.getElementsByTagName('li');
        var oMenuCont=document.getElementById(menuCont);
        var aItem=oMenuCont.getElementsByTagName('div');

        var show_t;//显示弹框计算器
        var hide_t;//隐藏弹框计算器
        var move_t;//鼠标从弹框移入菜单延迟用计时器
        //删除所有li上的ac
        function del_li_ac(){
            for(var i=0; i<aLi.length; i++){
                aLi[i].className="";
            }
        }
        //触发什么行为（事件）
        for(var i=0; i<aLi.length; i++){
            aLi[i].index=i;//发牌照
            aLi[i].onmouseover=function(){ //为每一个li标签绑定onmouseover事件
                clearTimeout(hide_t);//清除关闭
                clearTimeout(move_t);//清除鼠标移动
                var _this=this; //计时器中的this是window，所以要先声明一个_this变量，用这个变量传入计时器
                show_t=setTimeout(function(){
                    oMenuCont.style.display="block";//oMenuCont弹框 显示
                    //显示相对应的内容(就是选项卡的原理)
                    for(var i=0; i<aItem.length; i++){
                        aItem[i].style.display="none";
                    }
                    aItem[_this.index].style.display="block";
                    del_li_ac();//删除所有li上的ac
                    _this.className="ac";//自己增加ac
                },100);
            };
            aLi[i].onmouseout=function(){  //为每一个li标签绑定onmouseout 事件
                clearTimeout(show_t);
                clearTimeout(hide_t);
                var _this=this;
                hide_t=setTimeout(function(){
                    oMenuCont.style.display="none"; //oMenuCont弹框 隐藏
                    del_li_ac();//删除所有li上的ac
                },100);
            };
//-------------------------------------------------------------------------------------
            //oMenuCont绑定两个事件
            oMenuCont.onmouseover=function(){
                clearTimeout(hide_t);
                clearTimeout(move_t);
                this.style.display="block"; //让自己显示
            };

            oMenuCont.onmouseout=function(){
                var _this=this;
                move_t=setTimeout(function(){//延时隐藏
                    _this.style.display="none";
                    del_li_ac();//删除所有li上的ac

                },100);
            }
        }

    }
    menu("mainTopMenu","menuCont");
   menu("headerMenu","headerMenuCon")



});
