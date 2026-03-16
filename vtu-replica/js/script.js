let captchaText=""

function generateCaptcha(){

let chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"

captchaText=""

for(let i=0;i<5;i++){

captchaText += chars[Math.floor(Math.random()*chars.length)]

}

document.getElementById("captchaImage").src =
"https://dummyimage.com/150x60/eeeeee/000000&text="+captchaText

}


function checkUSN(){

let usn =
document.getElementById("usn").value.trim().toUpperCase()

let captchaInput =
document.getElementById("captchaInput").value.trim().toUpperCase()

let output =
document.getElementById("output")

if(captchaInput !== captchaText){

output.innerHTML="<h3>Invalid Captcha</h3>"

generateCaptcha()

return

}

if(usn === "1BI23CS183"){

output.innerHTML =
'<img src="assets/result.png" style="width:100%;margin-top:20px;">'

}else{

output.innerHTML =
"<h3>No Result Found</h3>"

}

}

window.onload = generateCaptcha