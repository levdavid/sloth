/*SLOTHES! SLOTHES EVERYWHERE*/
var active = !0;
chrome.storage.sync.get({
    activate: !0
}, function(a) {
    if (active = a.activate) {
        var b = {
        	/*here go the pics we will randomly pick for substitution*/
            slothPic: ["http://assets.worldwildlife.org/photos/6520/images/story_full_width/iStock_000016816803XLarge_mini.jpg?1394631384","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90EJz3yZ0WEev3yutk60o0byKgyRlvNUaGIP8sESruG1jCLJX","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRk0HCKmC5obliNQuKVfziqYtccsG2reuq82Xh87g9geIT1Qfmf","http://media-cache-ec0.pinimg.com/736x/a9/cd/3b/a9cd3be8f0f74b0e963c725d8c68a992.jpg","http://i.huffpost.com/gen/1164733/thumbs/o-PHOTOS-OF-SLOTHS-facebook.jpg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWb296YMNRkUrD2TZrI-dGvsc34ZYw4xW8D__nmjpD_TOgtB1fMj8zYYmr","http://i.huffpost.com/gen/1167900/thumbs/o-SLOTH-IMAGES-facebook.jpg","http://www.rainforest-alliance.org/sites/default/files/species/sloth_F._Arteaga.jpg","http://upload.wikimedia.org/wikipedia/commons/e/e5/2_toed_sloth.jpg"],
            
            /*we need to adjust pics to length and hight etc.*/
            handleImages: function(a, c) {
                for (var d = document.getElementsByTagName("img"), e = d.length, f = 0; e > f; f++) {
                    var g = d[f],
                        h = g.src;
                    b.replaceImages(a, g, h)
                }
                c > 0 && setTimeout(function() {
                    b.handleImages(a, c)
                }, c)
            },
            replaceImages: function(a, c, d) {
                if (-1 == a.indexOf(d)) {
                    var e = c.clientHeight,
                        f = c.clientWidth;
                    e > 0 && f > 0 && b.handleImg(c, a)
                } else c.onload = function() {
                    -1 == a.indexOf(d) && b.handleImg(c, a)
                }
            },
            handleImg: function(a, c) {
                a.onerror = function() {
                    b.handleBrokenImg(a, c)
                }, b.setRandomImg(a, c)
            },
            setRandomImg: function(a, b) {
                var c = a.clientWidth,
                    d = a.clientHeight;
                a.style.width = c + "px", a.style.height = d + "px", a.src = b[Math.floor(Math.random() * b.length)]
            },
            handleBrokenImg: function(a, c) {
                var d = a.src,
                    e = c.indexOf(d);
                e > -1 && c.splice(e, 1), _gaq.push(["_trackEvent", d, "broken-image"]), b.setRandomImg(a, c)
            }
        };
        document.addEventListener("DOMContentLoaded", b.handleImages(b.slothPic, 3e3))
    }
});

var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-15665299-28"]), _gaq.push(["_trackPageview"]),
function() {
    var a = document.createElement("script");
    a.type = "text/javascript", a.async = !0, a.src = "https://ssl.google-analytics.com/ga.js";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b)
}();