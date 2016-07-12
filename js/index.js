//顶部导航下拉菜单
var topright=$(".topnav-right")[0]
var yiji=$(".yiji",topright);
var erji=$(".erji");
for (var i = 0; i < yiji.length; i++) {
  yiji[i].index=i;
  hover(yiji[i],function(){
       erji[this.index].style.display="block";
       //animate(erji[this.index],{display:block})
  },function(){
       erji[this.index].style.display="none";
       //animate(erji[this.index],{display:none})
  })
};

//搜索框部分
var kuang1=$(".kuang1")[0];
kuang1.onfocus=function(){
  if(kuang1.value=="88包邮，轻松逛“超市”"){
    kuang1.value="";
  }
}
kuang1.onblur=function(){
  if(kuang1.value==""){
   kuang1.value="88包邮，轻松逛“超市”";
  }
}


//购物车下拉菜单

var mainright=$(".main-right")[0];
//alert(mainright.length)
var xiala=$(".xiala",mainright)[0];
hover(mainright,function(){
  animate(mainright,{width:290})
  animate(xiala,{display:"block"})
},function(){ 
  animate(xiala,{display:"none"})
  animate(mainright,{width:225})
})


//banner动画的实现
var bannertop=getClass("bannertop")[0];
var imgs=getClass("imgs",bannertop);
var datu=getClass("datu")[0];
var yuanse=getClass("yuanse",datu);
var bl=getClass("banleft")[0];
var br=getClass("banright")[0];

for (var i = 1; i < imgs.length; i++) {
  imgs[i].style.left="750px";
}
 var now=0;
 var next=0;
function move(){
  next++;
  if(next>=imgs.length){
    next=0;
  }
   imgs[next].style.left="750px";
   animate(imgs[now],{left:-750});
   animate(imgs[next],{left:0});    
     for (var i = 0; i < yuanse.length; i++) {
       yuanse[i].style.background="#000";

     }
   yuanse[next].style.background="#c40000";
    now=next;
 }
 var t=setInterval(move,2000);


hover(bannertop,function(){
  clearInterval(t);
    br.style.display="block";
    bl.style.display="block";
  },function(){
    t=setInterval(move,2000);
    br.style.display="none";
    bl.style.display="none";
  })

br.onclick=function(){
  move();
}
bl.onclick=function(){
  next--;
  if(next<=-1){
    next=imgs.length-1
  }
   imgs[next].style.left="-750px";
   animate(imgs[now],{left:750});
   animate(imgs[next],{left:0});   
     for (var i = 0; i < yuanse.length; i++) {
         yuanse[i].style.background="#000";
       }
   yuanse[next].style.background="#c40000";
    now=next;
}


for (var i = 0; i < yuanse.length; i++) {
  yuanse[i].index=i;
  yuanse[i].onmouseover=function(){
      if(now==this.index){
        return;       
      }
    imgs[this.index].style.left="750px";
    yuanse[now].style.background="#000";
    yuanse[this.index].style.background="#c40000";
    animate(imgs[now],{left:-750});  
    animate(imgs[this.index],{left:0});
    now=this.index;  
    next=this.index;  
  }
}

//左边楼层跳转导航的动效
/**********************************************************************************/
var mainbox=$(".mainbox")[0];
var mainnav=$(".mainnav")[0];
var main=$(".main");
var jump=$(".jump")[0];
//alert(jump)
var btn=$(".btn");
var now=0;
//横向导航的动效
document.body.scrollTop=1;
document.onscroll=function(){
var tops=document.body.scrollTop||document.documentElement.scrollTop;
  //document.title=tops;
  if(tops>=245){
    mainbox.id="fixed";
    mainnav.style.borderBottom=0;
  }else{
    mainbox.id="";
  }
//左边导航的固定
  if(tops>=245){
    jump.style.display="block";
  }else{
    jump.style.display="none";
  }  

for (var i=0; i<main.length; i++) {
    if(main[i].offsetTop<=tops+60){
      for(var j=0;j<main.length;j++){
        btn[j].style.background="#fff"
      }
      btn[i].style.background="#e5374d";
      now=i;
    }
  }

  //图片按需加载
  var ch=document.documentElement.clientHeight;
  for (var i = 0; i < main.length; i++) {
       if(main[i].offsetTop<=ch+tops){
        var imgs=$("img",main[i]);
        for (var j = 0; j < imgs.length; j++) {
            var src=imgs[j].getAttribute("data-src")
            imgs[j].src=src;
        };
       }
        
  };
}
 var obj=document.body.scrollTop?document.body:document.documentElement;
for (var i=0; i<btn.length;i++){
    btn[i].index=i;
    btn[i].onclick=function(){
      //obj.scrollTop=main[this.index].offsetTop-60;
      animate(obj,{scrollTop:main[this.index].offsetTop-60},200)
      for(var j=0;j<btn.length;j++){
      btn[j].style.background="#fff";
      }
    btn[this.index].style.background="#e5374d" ; 
    };
    btn[i].onmouseover=function(){
      for (var j=0;j<btn.length;j++) {
        if(j!=now){
        btn[j].style.background="#fff";
       }
      }
       this.style.background="#e5374d";
    }
    btn[i].onmouseout=function(){
      if(this.index!=now){
       this.style.background="#fff";   
      }

    }
}


//选项卡部分
var leftSidebar=$(".left-sidebar")[0];
var jinkou=$(".jinkou");
var jimg=$(".j-img");
var jksp=$(".jksp");
var jiantou=$(".jiantou");
var submenu=$(".submenu");
for (var i = 0; i < jinkou.length; i++) {
  jinkou[i].index=i;
  jinkou[i].onmouseover=function(){
       submenu[this.index].style.display="block";
       jimg[this.index].src="./images/nbannerleft"+(this.index+1)+".png";
       jksp[this.index].style.color="white";
       jiantou[this.index].style.color="white";
       jinkou[this.index].style.background="#e22a40";

  }
  jinkou[i].onmouseout=function(){
       submenu[this.index].style.display="none";
       jimg[this.index].src="./images/bannerleft"+(this.index+1)+".png";
     jksp[this.index].style.color="black";
     jiantou[this.index].style.color="black";
       jinkou[this.index].style.background="#fff";
  } 

}



//右侧导航固定定位
var rightbox=$(".rightfixedbox")[0];
var rightcenter=$("..rightfixed_center")[0];
var rcone=$(".rightfixed_center_one",rightcenter);
var rctwo=$(".rightfixed_bottom_two",rightcenter)[0];
var rconeimg=$(".rightfixed_center_one_tu");
var rconeimgtwo=$(".rightfixed_center_one_tu1")[0];


//alert(rcone.length);
//alert(rconeimg.length);

window.onscroll=function(){
var topss=document.body.scrollTop||document.documentElement.scrollTop;
  if(topss>=245){
    rightbox.style.display="block";
  }else{
    rightbox.style.display="none";
  }
}
for (var i = 0; i < rcone.length; i++) {
  rcone[i].index=i;
  hover(rcone[i],function(){
       rconeimg[this.index].style.display="block";
       for (var j = 0; j < rconeimg.length; j++) {
         rconeimg[j].style.left=-110+"px";
       };
       animate(rconeimg[this.index],{left:-90},600)
  },function(){
       rconeimg[this.index].style.display="none";
       rconeimg[this.index].style.left=-110+"px";
  })
}
hover(rctwo,function(){
     rconeimgtwo.style.display="block";
     animate(rconeimgtwo,{left:-154},600)
},function(){
     rconeimgtwo.style.display="none";
     rconeimgtwo.style.left=-180+"px";
})


//点击缓慢返回顶部
var rtop=$(".backtop")[0];
rtop.onclick=function(){
  var tops=document.body.scrollTop?document.body:document.documentElement;
  animate(tops,{scrollTop:0})
}
