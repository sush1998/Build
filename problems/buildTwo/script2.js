const input=document.querySelector("#input")
const btnClick=document.querySelector("#btn-text")
const btnPlus=document.querySelector("#btn-plus")
const btnMinus=document.querySelector("#btn-minus")
const output=document.querySelector("#outputText")
var number=16

btnClick.addEventListener("click",()=>
{
   console.log("clicked")
   output.innerHTML=input.value;
})
btnPlus.addEventListener("click",()=>
{
    number+=2;
    output.style.fontSize=number+'px'
})

btnMinus.addEventListener("click",()=>
{
    number-=2
    output.style.fontSize=number+'px'
    console.log(number)
})