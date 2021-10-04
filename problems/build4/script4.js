const input=document.querySelector("#inputText")
const btnClick=document.querySelector("#btn-click")
const btnGreen=document.querySelector("#btn-green")
const btnRed=document.querySelector("#btn-red")
const btnBlue=document.querySelector("#btn-blue")
const output=document.querySelector("#output")

btnClick.addEventListener("click",()=>
{
    output.innerHTML=input.value;
})

btnGreen.addEventListener("click",()=>
{
    output.style.color="green"
})

btnRed.addEventListener("click",()=>
{
    output.style.color="red"
})

btnBlue.addEventListener("click",()=>
{
    output.style.color="blue"
})