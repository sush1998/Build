const btnGetImage=document.querySelector("#btn-getImage")
const imgeDiv=document.querySelector("#img-dog")

function setImage(link)
{
    imgeDiv.src=link
    console.log("src set")
}
btnGetImage.addEventListener("click",()=>
{
    console.log("clicked")
    let url="https://dog.ceo/api/breeds/image/random"

    fetch(url)
    .then(response=>response.json())
    .then(json=>
        {
            let link=json.message
            setImage(link)
        })
    
    
})