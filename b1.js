var hhhh = aesCrypto.decrypt(convertstr($.urlParam('o')), convertstr('root'));


window.onload = function () {
    document.getElementById("btnhari").click();
}

function fhari() {
    var hhhh = aesCrypto.decrypt(convertstr($.urlParam('o')), convertstr('root'));
    document.getElementById("phari").innerHTML = hhhh;
}

function aaa() {
    var realurl = aesCrypto.decrypt(convertstr($.urlParam('o')), convertstr('root'));
    window.open(realurl, '_blank');
}
