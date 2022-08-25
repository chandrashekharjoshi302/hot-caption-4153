let video=document.getElementById("video");

video.addEventListener("click",()=>{
    let iframe_div=document.createElement("div")
    iframe_div.setAttribute("id","iframe_div")
    let content=document.getElementById("constent")

    let iframe=document.createElement("iframe");

    iframe.src="https://www.youtube.com/embed/D_3ONFnI8MM";
    iframe.allowFullscreen="fullscreen";
    let cancel=document.createElement("button");
    cancel.setAttribute("id","cancel")
    cancel.innerText="x";
    cancel.addEventListener("click",()=>{
        window.location.reload()
    })
    iframe_div.append(iframe,cancel)
    content.append(iframe_div)
})
