var hhhh = aesCrypto.decrypt(convertstr($.urlParam('o')), convertstr('root'));


function fhari() {
      document.getElementById("phari").innerHTML = hhhh;
}

function aaa() {
    var realurl = aesCrypto.decrypt(convertstr($.urlParam('o')), convertstr('root'));
    window.open(realurl, '_blank');
}
