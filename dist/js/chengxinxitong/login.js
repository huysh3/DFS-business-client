function checkMobile(e){return/^1[3|4|5|8][0-9]\d{8}$/.test(e)?!0:(alert("请填写正确电话号码"),!1)}$(document).ready(function(){$(".login_btn").on("tap",function(){var params={};return params.mobile=$('input[name="phone"]').val(),params.password=$('input[name="password"]').val(),checkMobile($('input[name="phone"]').val())?params.mobile&&params.password?void post("http://s.chengxinxitong.com/app1.0.0/checkUserLogin.action",params,function(resp){var res=eval("("+resp+")");if(console.log(res.errno),0==res.errno){var identify=res.identify;$.cookie("identify",identify,{path:"/"}),window.location.href="home.html"}else alert(res.error)}):(alert("请填写全部信息！"),!1):!1})});