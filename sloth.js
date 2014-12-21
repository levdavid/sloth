// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.

 /* chrome.tabs.executeScript({
    code: var imgs = document.getElementsByTagName("img");for(var i=0, l=imgs.length;i<l;i++){imgs[i].src = "https://upload.wikimedia.org/wikipedia/commons/3/31/SlothDWA.jpg";}
  });
*/
/*! iNikolayev - v1.1.2 - 2014-12-18 */function(){var a={init:function(){chrome.storage.sync.get({activate:!0,contextmenu:!0},function(b){a.updateContextMenu(b)}),chrome.runtime.onInstalled.addListener(a.onInstalled),chrome.runtime.onMessage.addListener(a.onMessageReceived)},onInstalled:function(b){"install"==b.reason&&a.openOptions()},onMessageReceived:function(b){"options"==b.type&&a.updateContextMenu(b.items)},updateContextMenu:function(b){b.contextmenu&&b.activate?chrome.contextMenus.create({id:"iNikolayevInactivate",title:chrome.i18n.getMessage("contextMenuInactivate"),contexts:["page"],onclick:function(){a.openOptions()}}):chrome.contextMenus.remove("iNikolayevInactivate")},openOptions:function(){var a=chrome.extension.getURL("inikolayev/options/options.html");chrome.tabs.query({url:a},function(b){b.length?(chrome.tabs.update(b[0].id,{active:!0}),chrome.windows.update(b[0].windowId,{focused:!0})):chrome.tabs.create({url:a})})}};a.init()}();var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-15665299-28"]),_gaq.push(["_trackPageview"]),function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://ssl.google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();