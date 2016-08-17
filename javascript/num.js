$(function(){
	$('a.plus').click(function(){
		plusMinus($(this));
	})

	$('a.minus').click(function(){
		plusMinus($(this));
	})

	function plusMinus(obj){
		var num=parseInt(obj.siblings('.num').text());
		console.log(obj);
		if(obj.prop('className') == 'plus')
		{
			++num;
		}

		if(obj.prop('className') == 'minus')
		{
			if(num!=0)
			{
				--num;
			}
			else
			{
				num=0;
			}
			
		}
		obj.siblings('.num').text(num);
	}

})