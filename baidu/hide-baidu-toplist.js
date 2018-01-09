// ==UserScript==
// @name         Doracoin的自用工具
// @namespace    http://doracoin.me/2017/09/09/hide-baidu-toplist/
// @version      1.1
// @description  清除某些页面自己不喜欢的内容，或更改某些网站的样式
// @author       Doracoin
// @match        http*://www.baidu.com/s?wd=*
// @match        http*://www.baidu.com/s?*wd=*
// @match        http*://www.baidu.com/baidu?wd=*
// @match        http*://jiecaobao.com/*
// @match        https://wuzhi.me/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Baidu
    var ht=document.getElementsByClassName("cr-content ");
    console.log('baidu-hotlist: ' + ht);
    if (ht.length > 0) {
        ht[ht.length-1].style.display="none";
        console.log("已关闭百度的搜索热点，过滤垃圾信息，维护上网环境");
    }

    // jiecaobao.com
    var unlikeImg=document.getElementsByClassName("alignnone");
    console.log('unlikeImg: ' + unlikeImg);
    if (unlikeImg.length > 0){
        unlikeImg[unlikeImg.length-1].src="http://wx4.sinaimg.cn/mw690/7eb932c3ly1fmwb9f12zlj205k05k750.jpg";
        console.log("已替换该网页上自己讨厌的插图");
    }

    // 吾志-日记网站
	var header = document.getElementsByClassName("header");
	if(header!=null && header.length > 0 ){
		header[0].style.background="#0097A7";
	}
    var header_w = document.getElementsByClassName("header_w");
	if(header_w != null && header_w.length > 0){
        for (var i=0;i< header_w.length;i++) {
        	header_w[i].style.color="#FFFFFF";
        }
    }
    var header_reg = document.getElementsByClassName("header_reg");
    if (header_reg!=null && header_reg.length > 0) {
        for(var j=0;j<header_reg.length;j++){
            header_reg[j].style.color="#FFFFFF";
        }
    }
    var footer_container = document.getElementsByClassName("footer container");
    if(footer_container!=null && footer_container.length > 0){
        // footer_container[0].
    }

})();
