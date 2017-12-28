// ==UserScript==
// @name         清除页面不喜欢的内容（自用工具）
// @namespace    http://doracoin.me/2017/09/09/hide-baidu-toplist/
// @version      1.0.0
// @description  破J8百度
// @author       Doracoin
// @match        http*://www.baidu.com/s?wd=*
// @match        http*://www.baidu.com/s?*wd=*
// @match        http*://www.baidu.com/baidu?wd=*
// @match        http*://jiecaobao.com/*
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
        console.log("已替换不好看的配图");
    }
}
)();
