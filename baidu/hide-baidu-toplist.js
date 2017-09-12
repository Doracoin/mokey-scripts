// ==UserScript==
// @name         隐藏Baidu垃圾搜索热点
// @namespace    http://doracoin.me/2017/09/09/hide-baidu-toplist/
// @version      1.0.0
// @description  破J8百度
// @author       Doracoin
// @match        http*://www.baidu.com/s?wd=*
// @match        http*://www.baidu.com/s?*wd=*
// @match        http*://www.baidu.com/baidu?wd=*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    // Your code here...
    var ht=document.getElementsByClassName("cr-content ");
    console.log(ht);
    ht[ht.length-1].style.display="none";
    console.log("已关闭百度的搜索热点，过滤垃圾信息，维护上网环境");
}
)();