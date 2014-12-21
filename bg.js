/*Sloth comes.*/! function() {
/*declaring and initializing a variable for sloth js.*/
var a = {
        init: function() {
            chrome.storage.sync.get({
                activate: !0,
                contextmenu: !0
            }, function(b) {
                a.updateContextMenu(b)
            }), chrome.runtime.onInstalled.addListener(a.onInstalled), chrome.runtime.onMessage.addListener(a.onMessageReceived)
        }
    };
    a.init()
}();