/*
* @Author: howtosay111
* @Date:   2016-05-05 12:18:09
* @Last Modified by:   howtosay111
* @Last Modified time: 2016-05-05 14:10:47
*/

'use strict';
//传过来的时间 - timeDate
var timeDate = 55555555;
function parseTime(data) {
    //将毫秒转换为小时，在转换为整数
    var hours = parseInt(data/(1000*60*60));
    //将毫秒过滤掉小时的毫秒，再转换成分钟整数，
    var minutes = parseInt((data%(1000*60*60))/(1000*60));
    //过滤掉 转换成分钟
    var seconds = parseInt((data%(1000*60)/1000));
    return {hours,minutes,seconds};
}
//定义一个函数为timer--计时器
function timer(data) {
    //声明temp是为了setTimeout调用该函数后，将data的作用域一直放在timer里面
    function temp() {
        var rightTime = parseTime(data);
        console.log('倒计时  ',rightTime.hours,':',rightTime.minutes,':',rightTime.seconds);
        data = data -1000;
        if(data<0){
            return console.log('结束');
        }
        //每个1秒调用一次这个函数--自身
        //不要在setTimeout调用函数如timer(data)
        //setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式
        setTimeout(temp,1000);
    }
    temp();
}
//调用timer
timer(timeDate);
