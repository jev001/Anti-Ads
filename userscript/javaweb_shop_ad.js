// ==UserScript==
// @name         javaweb download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       You
// @match        *://*.javaweb.shop/article/*
// ==/UserScript==

(function() {
    var p = /article\/(?<id>.*?).html/
    var requestUrl = window.location.href
    var groups = p.exec(requestUrl).groups
    if(groups.id){
        var downloadCacheStr = localStorage.getItem("_ARTICLE_DOWNLOAD_INFO_CACHE_")
        localStorage.setItem("_ARTICLE_DOWNLOAD_INFO_CACHE_","{\""+groups.id+"\":true}")
    }else{
        console.warn("error get article id from ["+requestUrl+"]")
    }
})();