$(function(){
	$('.register_btn').click(function(){
		if($('.register_success').css('display')=='none')
		{
			$('.register_success').show();
			$('.shadow').show();
		}
		else
		{
			$('.register_success').hide();
			$('.shadow').hide();
		}
	})
})