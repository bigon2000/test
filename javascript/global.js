$(function(){
	//模拟下拉列表
	var num=0,
		zIndex=0;
	$('body').find('.select').each(function (){
		$(this).attr('num',num);
		num++;
		$(this).parent().css({'position':'relative','z-index':0});
	});
    $(".select").click(function(e){
    	var thisNum= $(this).attr('num');
    	$('.select').each(function (){
    		if($(this).attr('num') != thisNum){
    			$(this).removeClass('active');
				$(this).children(".rent_time").css("display","none");
    		}
    	});
    	if(!$(this).hasClass('active')){
    		$(this).addClass("active");
			$(this).children(".rent_time").css("display","block");
			
    	}else{
    		$(this).removeClass("active");
			$(this).children(".rent_time").css("display","none");
    	}
    	zIndex++;
    	$(this).parent().css({'position':'relative','z-index':zIndex});
		e.stopPropagation();
	});
	$(".select ul li").click(function(e){
		if($(this).parents().hasClass("citynum")){
			return false;
			}
		else{
			$(this).parents(".select").children("a").html($(this).html());
			$(this).parents(".select").removeClass("active");
			$(this).parents(".rent_time").css("display","none");
			e.stopPropagation();
			iTrue=false;
		}
	});
	
	// 打开弹出层
	$('.cancel, .openLayer').click(function () {
		$('#layerbox').css('display','block');
	});
	// 关闭弹出层
	$('#close, #layerbox .buttons input').click(function () {
		$('#layerbox').css('display','none');
	});
	// banner
	var iWidth=1280*$("#slide li").length;
	var time=setInterval(
		function() {
			$("#slide_control span").removeClass("active");
			iIndex=iIndex++<$("#slide li:last").index()?iIndex:0;
			$("#slide_control span").eq(iIndex).addClass("active");
			$("#slide").stop(true, true).animate({"left":-$("#slide li").width()*iIndex});
		}
		,3000);
	var iIndex=0;
	$("#slide").css("width",iWidth);
	$("#slide_control span").hover(function(){
		clearInterval(time);
		$("#slide_control span").removeClass("active");
		$(this).addClass("active");
		var iIndexHere=$(this).index();
		$("#slide").stop(true, true).animate({"left":-$("#slide li").width()*iIndexHere});
	},function(){
		time=setInterval(
		function() {
			$("#slide_control span").removeClass("active");
			iIndex=iIndex++<$("#slide li:last").index()?iIndex:0;
			$("#slide_control span").eq(iIndex).addClass("active");
			$("#slide").stop(true, true).animate({"left":-$("#slide li").width()*iIndex});
		}
		,3000);
	});
	//主菜单动画效果
	var $lis = $('#nav li'), $h = $('#buoy');
	var startIndex=0;
	$lis.each(function () {
		if($(this).hasClass('active')){
			startIndex=$(this).index();
			if(startIndex) {
				$h.stop().animate({
				    'left': $(this).offset().left-$('#nav').offset().left+25//读取父级位置，鼠标滑动时滑条移动过来
				}, 100);
			}
			else{
				$h.stop().animate({
				    'left': '0px'
				}, 100);
			}
		}
	});
	$lis.mouseover(function () {
		if($(this).index()!=startIndex) {
			if($(this).index()) {
				$h.stop().animate({
				    'left': $(this).offset().left-$('#nav').offset().left+25//读取父级位置，鼠标滑动时滑条移动过来
				}, 100);
			}
			else{
				$h.stop().animate({
				    'left': '0px'
				}, 100);
			}
		}
	}).mouseout( function () {
	    if(startIndex) {
			$h.stop().animate({
			    'left': $('#nav li:eq('+startIndex+')').offset().left-$('#nav').offset().left+25//读取父级位置，鼠标滑动时滑条移动过来
			}, 100);
		}
		else{
			$h.stop().animate({
			    'left': '0px'
			}, 100);
		}
	});//导航滑条效果end
	
	//复选框
	$(".checkbox").click(function(){
		if($(this).hasClass("seleted")){
		$(this).removeClass("seleted").find(":checkbox").attr("checked",false);	
		}else{
		$(this).addClass("seleted").find(":checkbox").attr("checked",true);	
		}
	});

	//tab标签切换
	$('.taTitle li').click(function () {
		$('.taTitle li').removeClass('active');
		$(this).addClass('active');
		var taBody=$(this).parents('div.taTitle').next('.taBody');
		if(taBody){
			taBody.children('.item').css('display','none');
			taBody.children('.item' + ':eq(' + $(this).index() +')').css('display','block');
		}
	});
	
	// radio開始
	$(".radio").click(function(){
		if($(this).children('input').attr("name")){
			var name=$(this).children('input').attr("name");
			$(document).find("input[name='"+name+"']").parent(".radio").removeClass("active");
			$(document).find("input[name='"+name+"']").attr("checked",false);
			$(this).addClass("active");
			$(this).children('input').attr("checked",true);
		}
		else{
			if($(this).hasClass("active")){
				$(this).removeClass("active");
				$(this).children('input').attr("checked",false);
			}
			else{
				$(this).addClass("active");
				$(this).children('input').attr("checked",true);
			}
		}
		
	});
	// radio結束
	
	//城市tab选项卡
	$("ul.city_abb li").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		var li_index=$(this).index();
		$(this).parent().siblings(".city_name").children().eq(li_index).addClass("selectcity").siblings().removeClass("selectcity");
		})
	 $(".city_li").click(function(){
		 var $city=$(".city_li").children("span").parent();
		 var name=$(".city_li").children("span").text();
		 $city.html(name);
		 $(this).wrapInner("<span id=''></span>");
		 $(this).parents(".select").children("a").html($(this).html());
		 $(this).parents(".select").removeClass("active");

 	 });
	 
	 //“不限”距离右侧距离
	 $(".brand dl").each(function(){
		 	$(this).children("dd").eq(0).css("width","80px");
		 });
	$(".brand dl dd").click(function(){
			$(this).children().addClass("choose");
			$(this).siblings().children().removeClass("choose");
		})
	//车列表点击排序
	$(".default").click(function(){
			$(this).addClass("choose");
			$(this).siblings().removeClass("choose");
		})
	$(".filter_car .price").click(function(){
		if($(this).hasClass("choose")){
			if($(this).hasClass("ascending")){
				$(this).removeClass("ascending").addClass("descending").text("价格从高到低");
				}else{
				$(this).removeClass("descending").addClass("ascending").text("价格从低到高");	
				}
			}else{
				$(this).addClass("choose");
				$(this).siblings().removeClass("choose");
				}
		})
		$(".price .total").click(function(){
			if($(this).siblings(".dayprice").hasClass("active")){
				$(this).siblings(".dayprice").removeClass("active");
				}else{
					$(this).parents(".pick_car").find(".dayprice").removeClass("active");
					$(this).siblings(".dayprice").addClass("active");
					}
			})
		$(document).click(function(){
		$(".select").removeClass("active");
		$(".rent_time").css("display","none");
		
		iTrue=false;
	});
	//最后一个车没有底部边框
	 $(".pick_car ul li:last-child").css("border-bottom","none");
	 $(".pick_car ul li").each(function(){
		 var li_index=223-$(this).index();
		 $(this).css("z-index",li_index);
		 });
	 //点击层级更高
	 $(".formselect .z_select").click(function(){
		 $(this).css("z-index","999").siblings().css("z-index","29");
		 })
});