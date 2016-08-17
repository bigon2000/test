// JavaScript Document
$(function(){  
	
	var obj=$('#smallImg ul');
	var height= obj.find('li').height()+6;

	//上一页
	$('.btnprev').click(function(){
		slide(obj, -height);
	})

    //下一页
	$('.btnnext').click(function(){
		slide(obj, height);
	})

	//点击小图切换大图
	$('#smallImg ul li').click(function(){	
		var f=$(this).find('img').attr('src');	//3,2,1,4
		n=f.replace('small_pic','big_pic');
		//console.log(n)
		$('.imgSlide .bigImg img').attr('src',n);
	})

	function slide(obj, height)
	{
		if(height< 0){
			obj.animate({marginTop : height}, 500, function (){
            	$(this).css({marginTop : "0px"}).find("li:last").appendTo(this); 
			})
		}
		else
		{
			obj.animate({marginTop : height}, 500, function (){
            	$(this).css({marginTop : "0px"}).find("li:first").appendTo(this); 
			})
		}
		
	}
	
}) 