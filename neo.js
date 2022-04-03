window.onload = function () {
    document.getElementById("btn1").click();
}

function shuffle(url) {
    for (var i = url.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = url[i];
        url[i] = url[j];
        url[j] = temp;
    }
    return url;
}

var suburl = ["1yL8","TqToVj","lZfD","81UR5Lti","cga4","ve21TvGE","XAuI8","2e2cXbiv","3TW0pX3","bMQ3gXzP","4OGC","tH4jtr","MGBzY","Y99OeJa","dxbQ","XBLLrU","ybeg","bu8kp","qGEU9FU","B1irM","iGIyuP","KGhCs","spwdkh3","rh1fGFQ","c0JaYU","vi5a5","n6i3f","to4lSDDW","aCU5JZV","ZMR32t","aBOd","BCUDR","kn362xnG","sL9l3","67dZh","cHAHIq","FWQ9T","mxiLGkN","IDOQyT0","cvIZ","DkA3","XM9ay6i6","NQFRh","Bfy4","7c3QtxJ","lsrOj"];

var urls = shuffle(suburl)
var random = Math.floor(Math.random() * urls.length);
var final = ("https://www.gplinks.co/" + urls[random]);
