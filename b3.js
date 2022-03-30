var hhhh = aesCrypto.decrypt(convertstr($.urlParam('o')), convertstr('root'));


function fhari() {
document.write('<a id="aaa3" href="' + hhhh + '"></a>');
}

function aaa() {
    var realurl = aesCrypto.decrypt(convertstr($.urlParam('o')), convertstr('root'));
    window.open(realurl, '_blank');
}
