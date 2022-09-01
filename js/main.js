
$(function() {
    $('.selector').animatedHeadline({
        animationType: 'clip'
    });
});

let nav=document.querySelector("nav")
window.addEventListener('scroll' ,function () {
    if (window.scrollY >= 25) {
        nav.classList.add("scroll")
    }
    else{
        nav.classList.remove("scroll")
    }
})

// start about


let section = document.querySelector(".skills");

let spans = document.querySelectorAll(".progress span");
    window.addEventListener('scroll' ,function () {
    if (window.scrollY >= section.offsetTop-500) {
    spans.forEach((span) => {
        span.style.width = span.dataset.width;
    });
    }
})




let videos=document.querySelector(".video")

videos.addEventListener("click",(e)=>{
    let overlay = document.createElement("div");
    overlay.className = "video-overlay";
    document.body.appendChild(overlay);
    let videoBackground = document.createElement("div");
    videoBackground.className = "videoBackground";
    let video = document.createElement("video");
    video.src = "../about.mp4";
    video.controls = true
    video.autoplay=true;
    videoBackground.appendChild(video);
    document.body.appendChild(videoBackground);
    overlay.onclick=function(){
        videoBackground.remove()
        overlay.remove()
    }
})


// finish about







    // start protofolio

let protofolioImage=document.querySelectorAll(".protofolio-image");
let protofolioOverlay=document.querySelectorAll(".protofolio-image .protofolio-image-overlay");

protofolioImage.forEach((e,i)=>{
    e.addEventListener("mouseover",function(){
        protofolioOverlay[i].classList.add("visible")
        
        })
    e.addEventListener("mouseleave",function(){
        protofolioOverlay[i].classList.remove("visible")
    })

})





let select=document.querySelectorAll(".select");

select[0].onclick=function(){
    for(let i=0;i<protofolioImage.length;i++){
        protofolioImage[i].style.display="block"
    }
    if(select[0].classList.contains("active")!==true){
        select[0].classList.add("active")
        select[1].classList.remove("active")
        select[2].classList.remove("active")
        select[3].classList.remove("active")
    }
}
select[1].onclick=function(){
    for(let i=0;i<protofolioImage.length;i++){
        if(i==2||i==5){
            protofolioImage[i].style.display="block"
        }
        else{
            protofolioImage[i].style.display="none"
        }
    }
    
    if(select[1].classList.contains("active")!==true){
        select[1].classList.add("active")
        select[0].classList.remove("active")
        select[2].classList.remove("active")
        select[3].classList.remove("active")
    }
    
}
select[2].onclick=function(){
    for(let i=0;i<protofolioImage.length;i++){
        if(i==1||i==4||i==6){
            protofolioImage[i].style.display="block"
        }
        else{
            protofolioImage[i].style.display="none"
        }
    }
    
    if(select[2].classList.contains("active")!==true){
        select[2].classList.add("active")
        select[0].classList.remove("active")
        select[1].classList.remove("active")
        select[3].classList.remove("active")
    }
    
}
select[3].onclick=function(){
    for(let i=0;i<protofolioImage.length;i++){
        if(i==0||i==3){
            protofolioImage[i].style.display="block"
        }
        else{
            protofolioImage[i].style.display="none"
        }
    }
    
    if(select[3].classList.contains("active")!==true){
        select[3].classList.add("active")
        select[0].classList.remove("active")
        select[1].classList.remove("active")
        select[2].classList.remove("active")
    }
    
}

    let nums = document.querySelectorAll(".after-pro .num");
let afterPro = document.querySelector(".after-pro");
let started = false; 

window.onscroll = function () {
    if (window.scrollY >= afterPro.offsetTop-400) {
    if (!started) {
        nums.forEach((num) => startCount(num));
    }
    started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
        clearInterval(count);
    }
    }, 2000 / goal);
}

    // finish protofolio




    