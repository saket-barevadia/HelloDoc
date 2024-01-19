// forgot password

// document.getElementById("click").addEventListener("click",()=>{
//     return [
//         fetch("forgotPass.html")
//         .then(response=>response.text())
//         .then(data=>{ document.getElementById("wrapper").innerHTML+=data;
//     addListners();}),
//         document.getElementById("display").style.display="none",
//     ]
// })

// function addListners(){
//     console.log("load");
//     console.log(document.getElementById("displayPass"));
//     console.log(document);
//     console.log(document.getElementById("display"));
//     document.getElementById("back").addEventListener("click",()=>{
//         return [
//             document.getElementById("displayPass").style.display="none",
//             document.getElementById("display").style.display="flex"
//         ]
//     })
// }





//change type 

document.getElementById("password").addEventListener("click",()=>{
    return[
    document.querySelector("#changeType").type="text",
    document.getElementById("password").style.display="none",
    document.getElementById("password2").style.display="block"
    ]
})

document.getElementById("password2").addEventListener("click",()=>{
    return[
    document.querySelector("#changeType").type="password",
    document.getElementById("password2").style.display="none",
    document.getElementById("password").style.display="block",
    ]
})





//dark mode
document.getElementById("dark").addEventListener("click",()=>{
    document.body.style.backgroundColor="rgb(27,26,26)"
})




// rgb(27, 26, 26)".color="white";