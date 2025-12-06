let count = 0;
const callHistory = []
const hearts = document.querySelectorAll(".heart-click");
const heartsCount = document.getElementById("heart-count");

hearts.forEach(function (heart) {
    heart.addEventListener("click", function () {
        count++;
        heartsCount.innerText = count;
    });
});

let copy = 0
const copyBtn = document.querySelectorAll(".copy-btn")
const copyCount = document.getElementById("copy-count")


copyBtn.forEach(function (ja) {
    ja.addEventListener("click",
        function () {
            copy++
            copyCount.innerText = copy
            if (copy < 20) {


            }
            else {
                alert("too much copy")
            }
        }
    )
})



let coin = 100;

const callBtn = document.querySelectorAll(".call-btn")
const totalCoin = document.getElementById("total-coin")

callBtn.forEach(function (btn) {
    btn.addEventListener("click",
        function () {
            if (coin >= 20) {
                coin = coin - 20
                alert("you used 20 coin for this call")
                document.getElementById("total-coin").innerText = coin

            }
            else {
                alert("Not Enough Coin")
            }
        })
})






const callbuttons = document.querySelectorAll(".call-btn")

const historyContainer = document.getElementsByClassName("add-history")[0]


callbuttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const card = btn.closest(".card-container")
        const name = card.querySelector(".service-name").innerText
        const number =card.querySelector(".service-number").innerText
        const time = new Date().toLocaleTimeString();
        const item = document.createElement("div")
        item.classList = "items-center mt-5 p-3 bg-[#F2F2F2] px-3 rounded-2xl mb-5 flex justify-between"
        item.innerHTML = `
 <div>     <h1 class="font-bold">${name}</h1>
                  <p class="text-[#5C5C5C]">${number}</p></div>
             <div><p class="text-[#5C5C5C]">${time}</p></div>
                  
            `
            historyList.appendChild(item)
    })
})


const clearHistory = document.getElementById("clear-btn")
const historyList = document.getElementById("history-list")
clearHistory.addEventListener("click", function(){
historyList.innerHTML = ""
})






