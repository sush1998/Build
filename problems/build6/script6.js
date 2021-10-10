const inputText=document.querySelector("#inputText")
const btnClick=document.querySelector("#btn-click")
const output=document.querySelector("#output")
inputText.style.display="none"
btnClick.addEventListener("click",()=>
{
    btnClick.style.display="none"
    inputText.style.display="block"

    setTimeout(() => {
        btnClick.style.display="block"
        inputText.style.display="none"
    }, 3000);
      
})