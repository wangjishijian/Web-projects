$(function(){
	var _index=0;
		window_width=1950;
		timer=null;
		image_count=4;

	function nextPlay(){
		if (_index>image_count-1) {
			_index=0;
			$("#box .menu").animate({left:-window_width*_index}, 500);
			
		}else{
			$("#box .menu").animate({left:-window_width*_index}, 500);
		}

		if (_index>image_count-1) {
			
			$("#box .pave-ul ul li").eq(0).addClass('act').siblings().removeClass('act');
			
		}else{
			$("#box .pave-ul ul li").eq(_index).addClass('act').siblings().removeClass('act');
		}
		_index++;
	}
	timer=setInterval(nextPlay, 2000);

})