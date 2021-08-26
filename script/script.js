document.getElementById("userInput").addEventListener('keyup', addSecondName);
function addSecondName(event){
    if(event.code=="Enter"){
        userInput=document.getElementById("userInput").value;
        document.getElementById("userInput").value="";
        console.log(userInput);
    }
    // userInput = userInput.toLowerCase();
}
// var booelan ="0";
// if(booelan==true){
//     alert("true");
// }
// if(booelan===false){
//     alert("false");
// }