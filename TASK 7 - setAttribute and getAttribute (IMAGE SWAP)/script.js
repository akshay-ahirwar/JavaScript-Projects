let img1=document.querySelector("#first")
let img2=document.querySelector("#second")
let btn=document.querySelector("button")

btn.addEventListener("click",function(){
    let img1Src=img1.getAttribute('src')
    let img2Src=img2.getAttribute('src')
    
    img1.setAttribute('src',img2Src)
    img2.setAttribute('src',img1Src)

    
})