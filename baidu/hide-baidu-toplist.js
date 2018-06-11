// ==UserScript==
// @name         Doracoin的自用工具
// @namespace    https://greasyfork.org/scripts/36797-doracoin%E7%9A%84%E8%87%AA%E7%94%A8%E5%B7%A5%E5%85%B7
// @version      1.4.6
// @description  清除某些页面自己不喜欢的内容，或更改某些网站的样式
// @author       Doracoin
// @match        *://www.baidu.com/s?wd=*
// @match        *://www.baidu.com/s?*wd=*
// @match        *://www.baidu.com/baidu?wd=*
// @match        *://baike.baidu.com/*
// @match        *://www.sohu.com/a/*
// @match        *://jiecaobao.com/*
// @match        *://wuzhi.me/*
// @match        *://rule34.xxx/*
// @match        *://mp.weixin.qq.com/s?*
// @match        *://blog.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("current host is : " + window.location.host);
    // Baidu
    if (window.location.host == "www.baidu.com"){
        var ht=document.getElementsByClassName("cr-content ");
        console.log('baidu-hotlist: ' + ht);
        if (ht != null && ht.length > 0) {
            ht[ht.length-1].style.display="none";
            console.log("已关闭百度的搜索热点，过滤垃圾信息，维护上网环境");
        }
    }

    // BaiduBaike
    else if (window.location.host == "baike.baidu.com") {
        var baidu_baike_right_v = document.getElementsByClassName("lemmaWgt-promotion-vbaike");
        console.log('V-百科滚动窗: ' + baidu_baike_right_v.length);
        if (baidu_baike_right_v != null && baidu_baike_right_v.length > 0){
            setTimeout(function(){
                baidu_baike_right_v[baidu_baike_right_v.length-1].style.display="none";
                console.log("已关闭百度百科右侧垃圾信息，过滤垃圾信息，维护上网环境");
            }, 500);
        }
    }

    // jiecaobao.com
    else if (window.location.host == "jiacaobao.com") {
        var unlikeImg=document.getElementsByClassName("alignnone");
        console.log('unlikeImg: ' + unlikeImg);
        if (unlikeImg.length > 0){
            unlikeImg[unlikeImg.length-1].src="http://wx4.sinaimg.cn/mw690/7eb932c3ly1fmwb9f12zlj205k05k750.jpg";
            console.log("已替换该网页上自己讨厌的插图");
        }
    }

    // 吾志-日记网站
	else if (window.location.host == "wuzhi.me"){
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
            //
        }
    }

    // 屏蔽搜狐右边的垃圾推荐
    else if (window.location.host == "www.sohu.com"){
       var sohuRightBar = document.getElementsByClassName("sidebar right");
       if(sohuRightBar!=null && sohuRightBar.length > 0){
          sohuRightBar[0].style.display="none";
       }
    }

    // 屏蔽某网站广告
    else if (window.location.host == "rule34.xxx") {
        var paginator = document.getElementById("paginator");
        if(paginator!=null){
            console.log(paginator);
            var inners = document.getElementsByTagName("center");
            if(inners!=null && inners.length > 0){
                console.log(inners);
                for (var k=0;k< inners.length;k++) {
                    inners[k].style.display="none";
                }
            }
        }
    }

    // 尝试显示微信文章封面图片
    else if (window.location.host == "mp.weixin.qq.com") {
        console.log("doracoin");
        var weixinPageTitleContent = document.getElementById("img-content");
        if(weixinPageTitleContent!=null){
           console.log("doracoin");
           console.log("msg_cdn_url");//封面地址变量
        }
    }

    // 清除CSDN学院广告
    else if (window.location.host == "blog.csdn.net") {
        var csdn_edu = document.getElementsByClassName("edu-promotion");
        if (csdn_edu != null && csdn_edu.length > 0) {
            csdn_edu[0].style.display="none";
        }
	var loginDiv = document.getElementsByClassName("pulllog-box");
        if (loginDiv != null && loginDiv.length > 0) {
            loginDiv[0].style.display="none";
        }
        var btnReadMore = document.getElementById("btn-readmore");
        if (btnReadMore !=null){
            btnReadMore.click();
        }
    }
})();
