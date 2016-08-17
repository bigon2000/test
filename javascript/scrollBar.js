
var scrollSimu={
	// win: $('#scrollWin'),
	// con: $('#scrollCon'),
	// scroll: $('#scroll'),
	// scrollBar: $('#scrollBar'),
	// barPosi: parseInt($('#scrollBar').css('top')),
	// scrollPrev: $('#scrollPrev'),
	// scrollNex: $('#scrollNex'),
	init: function () {
		var iStopBar = false,
		 	iStopPrev = false,
			startY= 0,
			originY= 0,
			posiY = $('#scrollBar').offset().top,
			pro   = 0,
			leftDif=$('#scrollCon').height()-$('#scrollWin').height(),
			maxH = $('#scroll').height()-$('#scrollBar').height();
		//滚动条的高度控制
		if(leftDif <= maxH){
			var nowH=$('#scroll').height()-leftDif;
			$('#scrollBar').height($('#scroll').height()-leftDif);
			maxH =$('#scroll').height()- nowH;
		}
		//滚动条控制主题内容的拖动
		$('#scrollBar').mousedown(function (e){
			originY = startY = e.pageY;
			iStopBar = true;
		});
		function move( x ) {
			x= $('#scrollBar').offset().top - posiY + x;
			x= x < 0 ? 0: x;
			x= x > maxH ? maxH : x;
			$('#scrollBar').css('top' , x +'px');
			pro = x / maxH;
			conPosi = leftDif * pro;
			$('#scrollCon').css('top' , -conPosi + 'px');
		}
		$(document).mousemove(function (e) {
			if(iStopBar){
				var nowY = e.pageY -startY;
				move(nowY);
				startY+= nowY;
				return false;
			}
		});
		var prevTime,
			prevNum=0,
			prevStart=true,
			nexTime,
			nexNum=0,
			nexStart=true,
			y=Math.ceil(leftDif*0.001);
		// 上角标按动
		$('#scrollPrev').mousedown(function () {
			if(prevStart){
				prevTime=setInterval(function () {
					prevNum+=1;
					move(-y);
				},4);
				prevStart=false;
			}
			
		});
		

		// 下角标按动
		$('#scrollNex').mousedown(function () {
			if(nexStart){
				nexTime=setInterval(function () {
					nexNum+=1;
					move(y);
				},4);
				nexStart=false;
			}
		});

		$(document).mouseup(function () {
			iStopBar = false;
			clearInterval(prevTime);
			prevStart=true;
			prevNum=0;
			clearInterval(nexTime);
			nexStart=true;
			nexNum=0;
		});
	}
};
window.onload=function(){
	scrollSimu.init();
};