// ==UserScript==
// @name         Doracoin的自用工具
// @namespace    https://greasyfork.org/scripts/36797-doracoin%E7%9A%84%E8%87%AA%E7%94%A8%E5%B7%A5%E5%85%B7
// @version      1.5.3
// @description  清除某些页面自己不喜欢的内容，或更改某些网站的样式
// @author       Doracoin
// @match        *://www.baidu.com/*
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
    console.log("doracoin's kit: current host is : " + window.location.host);
    // Baidu
    if (window.location.host == "www.baidu.com"){
        window.onhashchange = function () {
            console.log("onhaschange");
            var ht = document.getElementById("content_right");
            if (ht != null) {
                ht.style.display="none";
                console.log("已屏蔽百度搜索右侧信息，过滤垃圾信息，维护上网环境");
            }
        }
    }

    // BaiduBaike
    else if (window.location.host == "baike.baidu.com") {
        // 不要觉得这段代码冗余甚至无聊，毕竟它是用来应付百度的
        // 重试超时时间 / 间隔时间 = 总重试次数
        var total_time = 5000;
        var delayed_time = 200;
        var counts = 1;// 计数标识
        var checkVisible = function(){
            var i=0;
            // 右上角小广告
            var baike_right_topA = document.getElementsByClassName("topA");
            if (baike_right_topA != null && baike_right_topA.length > 0){
                for (i=0; i<baike_right_topA.length; i++) {
                    baike_right_topA[i].style.display="none";
                }
            }
            // 右侧V百科
            var baike_right_v = document.getElementsByClassName("lemmaWgt-promotion-vbaike");
            if (baike_right_v != null && baike_right_v.length > 0){
                for (i=0; i<baike_right_v.length; i++) {
                    baike_right_v[i].style.display="none";
                }
            }
            // 右侧秒懂百科
            var baike_right_s = document.getElementsByClassName("lemmaWgt-promotion-slide");
            if (baike_right_s != null && baike_right_s.length > 0){
                for (i=0; i<baike_right_s.length; i++) {
                    baike_right_s[i].style.display="none";
                }
            }
            // 右侧热点广告
            var bake_side_box_ad = document.getElementById("side_box_unionAd");
            if (bake_side_box_ad != null){
                bake_side_box_ad.style.display="none";
            }
            // 右下角小图标广告
            var bake_right_ad = document.getElementsByClassName("right-ad");
            if (bake_right_ad != null){
                for (i=0; i<bake_right_ad.length; i++) {
                    bake_right_ad[i].style.display="none";
                }
            }
            // 底部垃圾广告
            var bake_after_content_ad = document.getElementsByClassName("after-content");
            if (bake_after_content_ad != null){
                for (i=0; i<bake_after_content_ad.length; i++) {
                    bake_after_content_ad[i].style.display="none";
                }
            }
            // 可能会由于'懒加载'导致此次没有找到相应标签，使用定时任务多次尝试
            if (counts <= (total_time/delayed_time)) {
                // console.log("百科右侧垃圾信息没有全部屏蔽，正在重试：第" + counts + "次");
                setTimeout(checkVisible, delayed_time);
                counts++;
            } else {
                console.log("垃圾信息已全部屏蔽，共尝试了" + (total_time/delayed_time) + "次");
            }
        };
        // 立即执行
        setTimeout(checkVisible, 0);
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
        var btnReadMore = document.getElementById("btn-readmore");
        if (btnReadMore !=null){
            btnReadMore.click();
        }
        console.log("已隐藏CSDN广告并自动展开全文");
    }
})();
