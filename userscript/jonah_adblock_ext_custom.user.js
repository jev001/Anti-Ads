// ==UserScript==
// @name         Jonah_个人用_去广告
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       Jonah
// @match        *://www.dilidili.wang/*
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    //BEGIN---D站去广告---//
    $('.ad-middle').html('');
    $('#bkm').html('');
    $('#bkm').attr('style', '');
    var ads = $('[href*=toGame] img');
    $.each(ads, function(index, row) {
        row.remove();
    });
    //END---D站去广告---//

    if (closePop != null || closePop != undefined) {
        closePop.onclick();
    }
})();