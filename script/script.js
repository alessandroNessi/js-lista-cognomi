document.getElementById("userInput").addEventListener('keyup', addSecondName);
var secondNames=["Rossi", "Bruni", "Madrigali","Pignataro","Nessi","Lodigiani", "Mastrobattista", "D'agelo"];
function addSecondName(event){
    if(event.code=="Enter"){
        userInput=document.getElementById("userInput").value;
        document.getElementById("userInput").value="";
        userInput = userInput.toLowerCase();
        let endFunc=false, i=0, nextToUpperCase=true;
        while(i<userInput.length && endFunc==false){
            //check it has no forbidden chars
            if(!(userInput[i]=="q"||userInput[i]=="w"||userInput[i]=="e"||userInput[i]=="r"||userInput[i]=="t"||userInput[i]=="y"||userInput[i]=="u"||userInput[i]=="i"||userInput[i]=="o"||userInput[i]=="p"||userInput[i]=="a"||userInput[i]=="s"||userInput[i]=="d"||userInput[i]=="f"||userInput[i]=="g"||userInput[i]=="h"||userInput[i]=="j"||userInput[i]=="k"||userInput[i]=="l"||userInput[i]=="z"||userInput[i]=="x"||userInput[i]=="c"||userInput[i]=="v"||userInput[i]=="b"||userInput[i]=="n"||userInput[i]=="m"||userInput[i]==" "||userInput[i]=="à"||userInput[i]=="ò"||userInput[i]=="ù"||userInput[i]=="è"||userInput[i]=="ì"||userInput[i]=="é"||userInput[i]=="ç"||userInput[i]=="'")){
                endFunc=true;
            }
            // if is space i should uppercase the first next letter
            if(userInput[i]!=" " && nextToUpperCase==true){
                nextToUpperCase=false;
                userInput = userInput.slice(0,i) + userInput[i].toUpperCase() + userInput.slice(i+1);    
            }
            //if has "'" the next letter should be uppercase
            if(userInput[i]=="'"){
                nextToUpperCase=true;
            }
            i++;
        }
        if(endFunc==false){
            secondNames.push(userInput);
            secondNames.sort;
            let ul = document.getElementById("results__output");
            ul.innerHTML="";
            for (i = 0; i < secondNames.length; i++) {
                let li = document.createElement('li');
                li.appendChild(document.createTextNode(secondNames[i]));
                ul.appendChild(li);
            }
        }else{
            alert("The second name contains some forbidden chars")
        }
    }
}