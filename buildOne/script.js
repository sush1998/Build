const input1=document.querySelector("#input1")
const input2=document.querySelector("#input2")
const btns=document.querySelectorAll("button")
const output=document.querySelector("#output")

for(let btn of btns)
{
    //console.log(btn)
    btn.addEventListener("click",()=>
    {
        let operator=btn.value
        let num1=parseInt(input1.value)
        let num2=parseInt(input2.value)
        switch(operator)
        {
            case "+":
                output.innerHTML=num1+num2;
                break;
            case "-":
                output.innerHTML=num1-num2;
                break;
            case "*":
                output.innerHTML=num1*num2;
                break;
            case "/":
                output.innerHTML=num1/num2;
                break;
        }
    })
}