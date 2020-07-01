// ==UserScript==
// @name         Doracoin的自用工具
// @namespace    https://greasyfork.org/scripts/36797-doracoin%E7%9A%84%E8%87%AA%E7%94%A8%E5%B7%A5%E5%85%B7
// @version      1.6.0
// @description  清除某些页面自己不喜欢的内容，或更改某些网站的样式
// @author       Doracoin
// @match        *://www.sohu.com/a/*
// @match        *://jiecaobao.com/*
// @match        *://wuzhi.me/*
// @match        *://rule34.xxx/*
// @match        *://mp.weixin.qq.com/s?*
// @match        *://blog.csdn.net/*
// @match        *://www.pixiv.net/search.php*
// @match        *://www.pixiv.net/*/artworks/*
// @match        *://996.icu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("doracoin's kit: current host is : " + window.location.host);

    // jiecaobao.com
    if (window.location.host == "jiacaobao.com") {
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
        console.log("已更改部分页面样式");
    }

    // 屏蔽搜狐右边的垃圾推荐
    else if (window.location.host == "www.sohu.com"){
        var sohuRightBar = document.getElementsByClassName("sidebar right");
        if(sohuRightBar!=null && sohuRightBar.length > 0){
            sohuRightBar[0].style.display="none";
            console.log("已屏蔽搜狐右侧垃圾推荐信息");
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
        }
    }

    // 清除CSDN学院广告
    else if (window.location.host == "blog.csdn.net") {
        // 展开全文按钮
        var btnReadMore = document.getElementById("btn-readmore-zk");
        if (btnReadMore !=null){
            btnReadMore.click();
        }
        // 去广告，但不一定生效
        var csdn_edu = document.getElementsByClassName("edu-promotion");
        if (csdn_edu != null && csdn_edu.length > 0) {
            csdn_edu[0].style.display="none";
        }
        var csdn_edu2 = document.getElementsByClassName("p4course_target");
        if (csdn_edu2 != null && csdn_edu2.length > 0) {
            csdn_edu2[0].style.display="none";
        }
        var csdn_edu3 = document.getElementsByClassName("fourth_column");
        if (csdn_edu3 != null && csdn_edu3.length > 0) {
            csdn_edu3[0].style.display="none";
        }
        var loginDiv = document.getElementsByClassName("pulllog-box");
        if (loginDiv != null && loginDiv.length > 0) {
            loginDiv[0].style.display="none";
        }
        console.log("已隐藏CSDN广告并自动展开全文");
    }

    // 去除 Pixiv搜索结果中提示“premium会员”的蒙板
    else if (window.location.host == "www.pixiv.net") {
        console.log("正在尝试去除会员广告的蒙板");
        var pxPreAD = document.getElementsByClassName("popular-introduction-overlay");
        if (pxPreAD != null && pxPreAD.length > 0) {
            pxPreAD[0].style.display="none";
        }
        // 去除Pixiv作品页右侧动图广告
        var gifAds = document.getElementById("ad_img");
        if (gifAds != null) {
            gifAds.src="https://www.pixiv.net/favicon.ico";
        }
        var frameAds = document.getElementById("imobile_adspotframe1");
        if (frameAds != null) {
            frameAds.style.display="none";
        }
    }

    // 996.ICU的背景色粉色太伤眼睛了，自行替换为深蓝色
    else if (window.location.host == "996.icu") {
        document.body.style.backgroundColor="#003873";
    }
})();
