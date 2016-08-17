$(function(){
	$('.sideMenu li').click(function(){
		if($(this).hasClass('secmenu'))
		{
			$(this).addClass('active').siblings().removeClass('active');
		}
	})
})