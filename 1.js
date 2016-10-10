;(function($){
	$.fn.margin=function(obj){
		var a={
			even:'click',
			margin:'marginTop',
			lefts:"#left",
			rights:"#right",
			ol:'#ols',
			light:'light'
		}
		var b=$.extend({},a,obj)
		var liw=$('ul li').width();
		var lih=$('ul li').height();
		var lis=$('ul li').length;
		var i=0;
			 $('ul').width(liw*lis)
			 $('ul').height(lih)
		var ool=$(b.ol).find('li')
		var uls=$('ul')
		var ulLi=$('ul li')
		var objMargin={}
			$(b.rights).on(b.even,function(){
				i++;
				if(i>lis-1){i=0;}
				auto()
			})
			$(b.lefts).on(b.even,function(){
				i--;
				if(i<0){i=lis-1;}
				auto()
			})
			$(ool).click(function(){
				var index=$(this).index();
				i=index;
				auto()
			})
			function auto(){
				if(b.margin=='marginLeft'){
					objMargin[b.margin]=-liw*i;
					uls.animate(objMargin)
				}else if(b.margin=='marginTop'){
					uls.width(liw)
					uls.height(lih*lis)
					uls.animate({[b.margin]:-lih*i})
				}else if(b.margin=='opacity'){
					uls.width(liw)
					uls.height(lih)
					uls.css({'position':'relative'})
					ulLi.css({'position':'absolute'})
					ulLi.eq(0).css('z-index',1).siblings().css('z-index',0)
					//$('ul li').eq(i).animate({'opacity':1},1000).siblings('li').stop().animate({'opacity':0},1000)
					ulLi.eq(i).fadeIn(2000).siblings('li').fadeOut(2000)
				}
				ool.eq(i).addClass(b.light).siblings().removeClass(b.light)
			}
	}
})(jQuery)