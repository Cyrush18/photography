var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo(){
    videoPlayer.style.display = "none";
    myVideo.pause();
}
function playVideo(file){
    // store file over the source
    myVideo.src = file;  
    videoPlayer.style.display = 'block';
    myVideo.play(); // Manually trigger video playback
}