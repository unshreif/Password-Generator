const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
function random() {

    let result = '';
    let sec = '';
    for (let i = 9; i > 8 && i<20 ; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
        let pass = document.getElementById("pass1").innerHTML = result;
    }
    for (let i = 9; i > 8 && i<20; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        sec += characters[randomIndex];
        let pass = document.getElementById("pass2").innerHTML = sec;
    }
}

const pass = document.getElementById("pass1");

pass.onclick = function() {
    document.execCommand("copy");
}

pass.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", pass.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});



const pass2 = document.getElementById("pass2");

pass2.onclick = function() {
    document.execCommand("copy");
}

pass2.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", pass2.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});
