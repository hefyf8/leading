//菜单弹窗
document.getElementById('zhezhao').style.display="none";
function dianwo(){
    document.getElementById('zhezhao').style.display="";
}
function hidder(){
    document.getElementById('zhezhao').style.display="none";
}

//背景音乐控制
function bf(){
var audio = document.getElementById('music1'); 
if(audio.paused){                 
    audio.play();// 这个就是播放  
    // alert("hello");
}else{
    audio.pause();// 这个就是暂停
    // alert("stop");
}
}

// 开国大典关闭
function click_a(divDisplay){ 
    if(document.getElementById(divDisplay).style.display != "block")
        {document.getElementById(divDisplay).style.display = "block";} 
    else
        {document.getElementById(divDisplay).style.display = "none";} 
}