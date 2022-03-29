document.write('<a id="aaa1" href="' + final + '"></a>');
<br/>
var day = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var year = ["2020","2021","2022"];
var pub = ("Published on :: " + day[Math.floor(Math.random()*day.length)] + " "+ month[Math.floor(Math.random()*month.length)] +  " "+  year[Math.floor(Math.random()*year.length)]);

