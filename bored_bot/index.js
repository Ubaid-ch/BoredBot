
document.getElementById("get-activity").addEventListener("click", myFun)

function myFun() {
    fetch("https://www.boredapi.com/api/activity")
    .then(response => response.json())
    .then(data => {
        
       document.getElementById("activity").textContent=data.activity
       document.getElementById("title").textContent="🦾 Happy Bot 🦿"
       document.body.classList.add("fun")
    })}