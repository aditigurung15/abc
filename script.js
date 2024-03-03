const ham=(e)=>{
    if (document.querySelector(".ham-container2").style.display=="none")
    {
        document.querySelector(".ham-container2").style.display="flex"
        document.querySelector(".ham1").style.display="none"
    document.querySelector(".ham2").style.transform="rotate(45deg)"
    document.querySelector(".ham2").style.top="10px"
    document.querySelector(".ham3").style.transform="rotate(-50deg)"

    }
    else{
        document.querySelector(".ham-container2").style.display="none"
        document.querySelector(".ham1").style.display="block"
    document.querySelector(".ham2").style.transform="rotate(0deg)"
    document.querySelector(".ham2").style.top="0px"
    document.querySelector(".ham3").style.transform="rotate(0deg)"

    }
}

let x=document.getElementById("scroll-left");
let z=document.getElementById("container7");
x.addEventListener("click", ()=>{
    z.scrollBy(200,0)
})
let y=document.getElementById("scroll-right");

y.addEventListener("click", ()=>{
    z.scrollBy(-200,0)
})