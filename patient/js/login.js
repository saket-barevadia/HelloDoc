// forgot password

document.getElementById("click").addEventListener("click",()=>{
    return [
        fetch("forgotPass.html")
        .then(response=>response.text())
        .then(data=>document.getElementById("wrapper").innerHTML+=data),
        document.getElementById("display").style.display="none"
    ]
})


document.getElementById("back").addEventListener("click",()=>{
    // return [
    //     document.getElementById("displayPass").style.display="none",
    //     document.getElementById("display").style.display="block"
    // ]
})