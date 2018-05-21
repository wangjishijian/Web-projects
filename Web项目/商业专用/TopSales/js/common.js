/**
 * 方便前台展示条用接口
 * @param time
 * @returns {String}
 */
function getsimpleTime(time) {  
	var res='-';
	if(time){
		res = (new Date(time)).format('yyyy-MM-dd');
	}
	return res;
}

/**
 * 星期的计算方法
 * @param time
 * @returns {String}
 */
function getweekDatethree(time) {  
	var zhanshi="";
	   var xingqi=[{id:false,name:"周一"},{id:false,name:"周二"},{id:false,name:"周三"},{id:false,name:"周四"},{id:false,name:"周五"},{id:false,name:"周六"},{id:false,name:"周七"}];
	   for(var i=0;i<7;i++){
		var k_01=(parseInt(time/(Math.pow(10,i))))%10;
        if(k_01==1){
     	   if(zhanshi.length==0){
     		   zhanshi=xingqi[i].name;
     	   }else{
     		   zhanshi=zhanshi+"、"+xingqi[i].name;
     	   }
        }
    }
   return zhanshi;
}

/**
 * 星期的计算方法
 * @param time
 * @returns {String}
 */
function getweekDate(time) {  
	var zhanshi="";
	   var xingqi=[{id:false,name:"一"},{id:false,name:"二"},{id:false,name:"三"},{id:false,name:"四"},{id:false,name:"五"},{id:false,name:"六"},{id:false,name:"七"}];
	   for(var i=0;i<7;i++){
		var k_01=(parseInt(time/(Math.pow(10,i))))%10;
        if(k_01==1){
     	   if(zhanshi.length==0){
     		   zhanshi=xingqi[i].name;
     	   }else{
     		   zhanshi=zhanshi+","+xingqi[i].name;
     	   }
        }
    }
   return zhanshi;
}

/**
 * 星期的计算方法
 * @param time
 * @returns {String}
 */
function getweekDatetwo(time) {  
	var zhanshi="";
	   var xingqi=[{id:false,name:"一"},{id:false,name:"二"},{id:false,name:"三"},{id:false,name:"四"},{id:false,name:"五"},{id:false,name:"六"},{id:false,name:"七"}];
	   for(var i=0;i<7;i++){
		var k_01=(parseInt(time/(Math.pow(10,i))))%10;
        if(k_01==1){
     	   if(zhanshi.length==0){
     		   zhanshi=xingqi[i].name;
     	   }else{
     		   zhanshi=zhanshi+xingqi[i].name;
     	   }
        }
    }
   return zhanshi;
}

/**
 * 方便前台展示条用接口
 * @param time
 * @returns {String}
 */
function getRandom() {  
	return (new Date()).format('yyyyMMddhhmmss');
}

/**
 * 方便前台展示条用接口
 * @param time
 * @returns {String}
 */
function getseconedTimethree(time) {  
	var res='-';
	if(time){
		res = (new Date(time)).format('MM-dd');
	}
	return res;
}

/**
 * 方便前台展示条用接口
 * @param time
 * @returns {String}
 */
function getseconedTime(time) {  
	var res='-';
	if(time){
		res = (new Date(time)).format('yyyy-MM-dd hh:mm');
	}
	return res;
}

/**
 * 方便前台展示条用接口
 * @param time
 * @returns {String}
 */
function getLocalTime(time) {  
	var res='-';
	if(time){
		res = (new Date(time)).format('yyyy-MM-dd hh:mm:ss');
	}
	return res;
}
/**
 * 将时间戳改成date时间格式
 * @param format
 * @returns
 */    
Date.prototype.format = function(format) {
	  var o = {
	    "M+" : this.getMonth() + 1, // 月
	    "d+" : this.getDate(), // 天
	    "h+" : this.getHours(), // 时
	    "m+" : this.getMinutes(), // 分
	    "s+" : this.getSeconds(), // 秒
	    "q+" : Math.floor((this.getMonth() + 3) / 3), // 刻
	    "S" : this.getMilliseconds() //毫秒
	  }
	  if (/(y+)/.test(format))
	    format = format.replace(RegExp.$1, (this.getFullYear() + "")
	        .substr(4 - RegExp.$1.length));
	  for ( var k in o)
	    if (new RegExp("(" + k + ")").test(format))
	      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
	          : ("00" + o[k]).substr(("" + o[k]).length));
	  return format;
	}

/**
 * 时间转换为汉字（刚刚，几小时，几个月）
 */
function getDateDiff(dateTimeStamp) {
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if (diffValue < 0) {
		return;
	}
	var monthC = diffValue / month;
	var weekC = diffValue / (7 * day);
	var dayC = diffValue / day;
	var hourC = diffValue / hour;
	var minC = diffValue / minute;
	if (monthC >= 1) {
		result = getLocalTime(dateTimeStamp);
	} else if (weekC >= 1) {
		//result = "" + parseInt(weekC) + "周前";
		result = getLocalTime(dateTimeStamp);
	} else if (dayC >= 1) {
		//result = "" + parseInt(dayC) + "天前";
		result = getLocalTime(dateTimeStamp);
	} else if (hourC >= 1) {
		result = "" + parseInt(hourC) + "小时前";
	} else if (minC >= 1) {
		result = "" + parseInt(minC) + "分钟前";
	} else
		result = "刚刚";
	return result;
}


/**
 * ============================================================ wizard ==================================
 */
//获取当前日期yy-mm-dd
//date 为时间对象
function getDateStr3(date) {
    var year = "";
    var month = "";
    var day = "";
    var now = date;
    year = ""+now.getFullYear();
    if((now.getMonth()+1)<10){
        month = "0"+(now.getMonth()+1);
    }else{
        month = ""+(now.getMonth()+1);
    }
    if((now.getDate())<10){
        day = "0"+(now.getDate());
    }else{
        day = ""+(now.getDate());
    }
    return year+"/"+month+"/"+day;
}
/**
 * 获得相对当前周AddWeekCount个周的起止日期
 * AddWeekCount为0代表当前周   为-1代表上一个周   为1代表下一个周以此类推
 * **/
function getWeekStartAndEnd(AddWeekCount) {
    //起止日期数组
    var startStop = new Array();
    //一天的毫秒数
    var millisecond = 1000 * 60 * 60 * 24;
    //获取当前时间
    var currentDate = new Date();
    //相对于当前日期AddWeekCount个周的日期
    currentDate = new Date(currentDate.getTime() + (millisecond * 7*AddWeekCount));
    //返回date是一周中的某一天
    var week = currentDate.getDay();
    //返回date是一个月中的某一天
    var month = currentDate.getDate();
    //减去的天数
    var minusDay = week != 0 ? week - 1 : 6;
    //获得当前周的第一天
    var currentWeekFirstDay = new Date(currentDate.getTime() - (millisecond * minusDay));
    //获得当前周的最后一天
    var currentWeekLastDay = new Date(currentWeekFirstDay.getTime() + (millisecond * 6));
    //添加至数组
    startStop.push(getDateStr3(currentWeekFirstDay));
    startStop.push(getDateStr3(currentWeekLastDay));

    return startStop;
}
/**
 * 获得相对当月AddMonthCount个月的起止日期
 * AddMonthCount为0 代表当月 为-1代表上一个月  为1代表下一个月 以此类推
 * ***/
function getMonthStartAndEnd(AddMonthCount) {
    //起止日期数组
    var startStop = new Array();
    //获取当前时间
    var currentDate = new Date();
    var month=currentDate.getMonth()+AddMonthCount;
    if(month<0){
        var n = parseInt((-month)/12);
        month += n*12;
        currentDate.setFullYear(currentDate.getFullYear()-n);
    }
    currentDate = new Date(currentDate.setMonth(month));
    //获得当前月份0-11
    var currentMonth = currentDate.getMonth();
    //获得当前年份4位年
    var currentYear = currentDate.getFullYear();
    //获得上一个月的第一天
    var currentMonthFirstDay = new Date(currentYear, currentMonth,1);
    //获得上一月的最后一天
    var currentMonthLastDay = new Date(currentYear, currentMonth+1, 0);
    //添加至数组
    startStop.push(getDateStr3(currentMonthFirstDay));
    startStop.push(getDateStr3(currentMonthLastDay));
    //返回
    return startStop;
}
/**
 * ============================================================ wizard ==================================
 */