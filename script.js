let likeFeature = document.querySelector("#card");
let icon = document.querySelector("i");
likeFeature.addEventListener('dblclick',()=>{
    icon.style.transform = "translate(50%,-50%) scale(1)";
    icon.style.opacity = "0.8";
    setTimeout(()=>{
        icon.style.opacity = "0";
        icon.style.transform = "translate(50%,-50%) scale(1)";
    }, 2000)
})