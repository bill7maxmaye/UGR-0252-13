const cities=Array.from(document.querySelectorAll(".city"))

document.getElementById("cities").addEventListener("input",(()=>{
    const inputValue=document.getElementById("cities").value.toLowerCase()
    cities.forEach((item)=>{
        const city=item.innerHTML.toLowerCase()
        if(city.includes(inputValue)){
            item.parentElement.parentElement.style.display="flex"
        }
        else{
            item.parentElement.parentElement.style.display="none"
        }
    })
    

}))
