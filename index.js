let count =0;
const hearts =document.querySelectorAll(".heart-click")
const heartsCount =document.getElementById('heart-count')
hearts.forEach(function (heart) {
    heart.addEventListener("click" , function(){
        count++; 
        heartsCount.innerText =count

    })
})


