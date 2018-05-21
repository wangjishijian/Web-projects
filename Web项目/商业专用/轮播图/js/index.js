$(function(){
	var _index=0;
		window_width=720;
		timer=null;
		image_count=5;

	function nextPlay(){
		if (_index>image_count-1) {
			_index=0;
			$("#box .menu").animate({left:-window_width*_index}, 1000);
			
		}else{
			$("#box .menu").animate({left:-window_width*_index}, 1000);
		}

		if (_index>image_count-1) {
			
			$("#box .pave-ul ul li").eq(0).addClass('act').siblings().removeClass('act');
			
		}else{
			$("#box .pave-ul ul li").eq(_index).addClass('act').siblings().removeClass('act');
		}
		_index++;
	}
	timer=setInterval(nextPlay, 4000);

})