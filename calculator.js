let myString="";
let myButton=document.querySelectorAll("button");
let display=document.querySelector("#display");

myButton.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.innerText=="AC"){
            myString="";
           
        }
        else if(button.innerText=="DE"){
            myString=myString.substring(0,myString.length-1);
            
        }
        else if(button.innerText=="="){
            myString=eval(myString);
        }
        else{
            myString=myString+button.innerText;
            
        }
        display.innerText=myString;
    })
})