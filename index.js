let count =0;
const hearts =document.querySelectorAll(".heart-click")
const heartsCount =document.getElementById('heart-count')
hearts.forEach(function (heart) {
    heart.addEventListener("click" , function(){
        count++; 
        heartsCount.innerText =count

    })
})

let coin =100;

const callBtn = document.querySelectorAll(".call-btn")
const totalCoin = document.getElementById("total-coin")

callBtn.forEach(function(btn)){
    btn.addEventListener("click", 
        function(){
            if(coin >= 20){
                coin =coin -20
                alert( "you used 20 coin for this call")
            }
            else{
                alert("Not Enough Coin")
            }
        })
}
