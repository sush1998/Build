const passwordInput=document.querySelector("#password")
const btnCheck=document.querySelector("#btn-check")

btnCheck.addEventListener("click",()=>
{
    //console.log("clicked")
    let password=passwordInput.value;
    
    let passArr=password.split("")
    if(passArr.length<10)
    {
        console.log("ERROR")
    }
    else
    {
        console.log(password)
    }

}) 