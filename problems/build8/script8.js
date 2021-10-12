const passwordInput=document.querySelector("#password")
const btnCheck=document.querySelector("#btn-check")

function checkLength(length)
{
    return length>=10
}

function btnVisiblity(flag)
{
    flag==true?btnCheck.style.display="block":btnCheck.style.display="none"
}
passwordInput.addEventListener("keypress",()=>
{
    console.log("pressed")

    let passwordLength=passwordInput.value.split('').length
    console.log(passwordLength)

    btnVisiblity(checkLength(passwordLength))
})