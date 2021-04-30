const host = "http://localhost:5000/";
document.querySelector("#get-video-info-btn").addEventListener("click", function(){
    let videoURL = document.querySelector("#videoURL").value.trim();
    if(videoURL.length == 0){
        alert("please enter youtube video link")
        return;
    }
    fetch(host+"videoInfo?videoURL="+ videoURL).then(function(response){
        console.log(data);
        return response.json();
    }).then(function(data){
        console.log(data);
    }).catch(function(error){
        console.log(data);
        alert("something went wrong");
    })
});