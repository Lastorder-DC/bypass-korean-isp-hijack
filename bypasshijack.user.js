// ==UserScript==
// @name         ByPass Korean ISP Hijack
// @namespace    http://lastorder.xyz/
// @version      0.1
// @description  ByPass Korean ISP Hijack
// @author       Lastorder_DC
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var HijackIP = ["59.29.251.41","210.117.120.50"];

    for(var i = 0;i < document.getElementsByTagName("script").length; i++) {
        for(var j = 0;j < HijackIP.length; j++) {
            if(document.getElementsByTagName("script")[i].innerHTML.indexOf(HijackIP[j]) !== -1) {
                console.log("ISP Hijack detected. Reloading...");
                location.reload();
            }
        }
    }
})();
