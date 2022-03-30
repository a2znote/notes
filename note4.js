function fhari() {

    var hhhh = aesCrypto.decrypt(convertstr($.urlParam('o')), convertstr('root'));
    document.getElementById("phari").innerHTML = hhhh;
}

function aaa() {
    var realurl = aesCrypto.decrypt(convertstr($.urlParam('o')), convertstr('root'));
    window.open(realurl, '_blank');
}

window.onload = function () {
    document.getElementById("btn").click();
    document.getElementById("btnhari").click();
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

var suburl = ["Ag23M", "eWdsA", "Bfskl39g", "EPP3zsE4", "vPh4h1qW", "H4PY", "cwK6", "jnBY6", "ANpO0", "FOfu",
    "1tabg6", "nj8DOh", "vMVG8Nmq", "VqcJR6", "P9vNDOb", "7dWpeU", "tN70q7", "gBWe2", "DlCJScB", "7vPYj",
    "P7ItSm1",
    "smDkzZ", "7GDC", "lbzo", "Njatq", "gN0mGWDK", "yznXht", "GD32gQ", "oZE8", "PTVN6N", "83xUb", "n3VTiQ",
    "9TDOpI", "JKCNS", "ruM4dT", "FGoE", "n0k0en", "xVoVap", "gBrRU", "7iaaVc", "2OHUB", "A8RRU1", "cpC2",
    "DffS",
    "XmBV4gr", "bE6tXzA", "UwMF", "wMI0XO0", "Jbb0", "21gIG2gy", "PxXw3O", "5lCIx", "ug6C1kZ8", "mcd0Yz",
    "PzWpICW",
    "mCgQzUnX", "iYEOAaEW", "gPGBEf", "DodDHd", "WVjtm6R", "3VplN", "oMjec7u", "jtRJ0p", "u4ecK1", "XB4rfl",
    "hT77AAPz", "VS5xBN", "yZL6E", "ScUJh1", "vp6Ws", "SO9vIC", "oN74B4", "SBSnLD2m", "eYwV", "f4ngg",
    "aPcmGYK",
    "R1REQ", "1K5l", "HoTg8kHM", "aA9yMo", "qoDa", "Wfjdd", "UNVGL", "YA1ON", "952o", "yZ7x9", "fO9u",
    "iNyqKwk",
    "JvDDU", "vtFAB2", "atOjpFm1", "pWrB0", "w0fIVT", "9bDF9", "V9pU7y", "KrIwd", "uRXRbzO", "bu2tzp",
    "afy9rQV",
    "Wj5kHy7M", "ko2Dom", "GMlTXkXR", "1R1r", "6Iv0jPFi", "B0UbeZh", "I1oHp4qo", "uVv0y", "lwMrZEL",
    "5OU2i8",
    "9lM7nND9", "0krme", "thdF", "ZtT5", "PgMIqJie", "D1j5u", "xFWaSK1I", "EmC4", "BkrQHxQ", "ac8IEtja",
    "wNddMaCE",
    "uCg2d4p", "Y5Gbg", "7J5oZgi", "kwZ7GKQa", "Abd3De7p", "Dot4", "5e5HVA", "Jc35cm", "47i0et", "hqgfTLG",
    "95U9J15", "iz1z", "sI6ezw", "SaG1x7t", "tPvhnbB", "I0tJI", "c070YMmU", "83MyjL", "dCB0Q", "2Fdo",
    "CpFTW8",
    "ZbECINa", "Ejmyx", "QdrdJL", "0NIr", "1kjGGB", "tLXPGlS", "VQ3fFAh", "FExscPP", "AQRYjnTQ", "bSgvArU",
    "uhFUVJsG", "W40qMm", "xicbEX", "5UV0N", "zOwzU0", "G0bkCP", "jk1Zt1f", "uLh9Vms", "JEid", "lUkLK7",
    "pz1K",
    "UnZnyUc", "5dW1", "anIMUyj", "MJUDWd", "pQ70JEdL", "vmjOc8UY", "QhLP", "A11fzz", "mNrf9a", "t1Mjokyx",
    "hix5",
    "WJwrmegc", "VtQAiO5", "FQjFMuA4", "jFrms", "FtxQ6qgz", "Mz2WT3Rx", "0psyYLiX", "jd8nGI", "gKvD1qt",
    "KUBNDl38",
    "KfXYMZGI", "2Hzt8r7", "UvRWqG", "lwgMaY", "vasC9", "o504", "XrI6MY0E", "5tz0p", "bl2yoElR", "sRuEK",
    "3sD5j",
    "HPpk5cXC", "d73FA", "duczd", "TJJOw", "96Joaa86", "8WHN5SA", "l28f", "fTGy", "d2g5", "PW6ZdV",
    "VlYwNF",
    "kIqvu", "F9rW", "dJgM", "hc1Q2ST", "eNMKF"
];

var urls = shuffle(suburl)
var random = Math.floor(Math.random() * urls.length);
var final = ("https://www.gplinks.co/" + urls[random]);
