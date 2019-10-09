// ==UserScript==
// @name         Google Contacts Hangout to Tel: Link
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Tampermonkey Script to Replace the Google Hangouts Link in Google Contacts and instead use tel: link for use with eg. MicroSIP
// @author       fsperath
// @match        https://contacts.google.com/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $(document).bind('DOMSubtreeModified',function(){
        $("a").each(
            (i, v) => {
                //console.log(i + ' /  ' + v.href)
                var regexres = v.href.match(/https?:\/\/hangouts\.google\.com\/\?action=chat&pn=(%?2?B?\+?[0-9]+)&hl=de&authuser=0/i);
                if(regexres !== null) {
                    console.log(regexres);
                    var phonenumber = regexres[1];
                    phonenumber = phonenumber.replace("%2B","+");

                    v.href="tel:"+phonenumber;
                }
            }
        )
    })
})();