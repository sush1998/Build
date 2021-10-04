const input=document.querySelector("#inputText")
const btnH1=document.querySelector("#btn-h1")
const btnH2=document.querySelector("#btn-h2")
const btnH3=document.querySelector("#btn-h3")

btnH1.addEventListener("click",()=>
{
    console.log("clicked")
    input.style.fontSize=2+'em'
})
btnH2.addEventListener("click",()=>
{
    console.log("clicked")
    input.style.fontSize=1.5+'em'
})
btnH3.addEventListener("click",()=>
{
    console.log("clicked")
    input.style.fontSize=1.17+'em'
})

