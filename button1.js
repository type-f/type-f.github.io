// JavaScript Document
window.onload = fu1;
function fu1() {
    //获取图片ID images
    var images = document.getElementById("image");
    var path = ["image/1.png","image/2.png","image/3.png","image/4.png","image/5.png","image/6.png","image/7.png","image/8.png","image/9.png","image/10.png","image/11.png","image/12.png","image/1(2).png","image/2(2).png","image/3(2).png","image/4(2).png","image/5(2).png","image/6(2).png","image/7(2).png","image/8(2).png","image/9(2).png","image/10(2).png","image/11(2).png","image/12(2).png"];
 
    //定义图片索引
    var index = 0;
 
    //获取单击按钮标签 button
    var bt = document.getElementsByTagName("button");
 
    
    //生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 
	  //按钮功能实现
function buttoncli() {
	index=randomNum(1,10);
	images.src = path[index];
    };