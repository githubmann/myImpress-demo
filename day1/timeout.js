/*
* @Author: howtosay111
* @Date:   2016-05-05 12:18:09
* @Last Modified by:   howtosay111
* @Last Modified time: 2016-05-05 12:27:33
*/



'use strict';
var timeDate = 10000;
//定义一个函数为timer--计时器
function timer(data) {
    console.log('倒计时  ',data);
    data--;
    //每个1秒调用一次这个函数--自身
    setTimeout(timer(data), 1000);
}
timer(timeDate);