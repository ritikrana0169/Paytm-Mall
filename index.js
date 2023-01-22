let main=document.getElementById("main");
let main2=document.getElementById("main2")
let main3=document.getElementById("main3")
let maincon=document.getElementById("mainCon")
let partUp1=document.querySelector(".partUpper1");
let partUp2=document.querySelector(".partUpper2");
let partUp3=document.querySelector(".partUpper3");
let part1=document.querySelector(".part1");
let part2=document.querySelector(".part2");
let part3=document.querySelector(".part3")
let login=document.getElementById("login");
let signUpPage=document.getElementById("signUpPage");
let closeBtn=document.querySelector(".closeBtn");
let goto=document.getElementById("goToSignIn");

const api="https://63c6452ddcdc478e15be0fe2.mockapi.io/e-commerce";
let cartData=JSON.parse(localStorage.getItem("cartData"))||[];
let userName=JSON.parse(localStorage.getItem("userName"))||[];
if(userName.length!==0){
    document.getElementById("login").innerHTML="<b>Welcome -</b>"+userName
}
fetching(api);
async function fetching(data){
    let request=await fetch(data);
    let inData=await request.json();
    return display(inData,cartData),display3(inData,cartData);
}
login.addEventListener("click",()=>{
    if(userName==""){
        signUpPage.style.display="block"
    }else{
       document.getElementById("logOutBtn").style.display="block"
    }
})
goto.addEventListener("click",()=>{
    signUpPage.style.display="none"
    document.getElementById("signIn").style.display="block"
})





function display(data,data2){
    // main.innerHTML="";
    if(userName.length==0){
        document.getElementById("itemInBag").innerText=0;

    }else{

        document.getElementById("itemInBag").innerText=data2.length;
    }    data.forEach((element,index) => {
        let div=document.createElement("div");
        
        div.setAttribute=("class","part1")
        let image=document.createElement("img");
        image.src=element.image;
        let title=document.createElement("a");
        title.href="/inside data/inside.html";
        title.innerText=element.title;
        let name="";
        title.addEventListener("click",()=>{
            data=data.filter((ele,ind)=>{
                if(index==ind){
                    name=element.title;
                }
            })
            localStorage.setItem("insideName",JSON.stringify(name));
        })
        
        div.append(image,title)
        part1.append(div)
        partUp1.append(part1)
    });
    main.append(partUp1)
}
document.querySelector(".part1Btn1").addEventListener("click",()=>{
    part1.scrollLeft+=1300;
})
document.querySelector(".part1Btn2").addEventListener("click",()=>{
    part1.scrollLeft-=1300;
})
const api2="https://63c6452ddcdc478e15be0fe2.mockapi.io/paytm2"
fetching2(api2);
async function fetching2(data){
    let request=await fetch(data);
    let inData=await request.json();
    return display2(inData);
}

function display2(data){
    // main.innerHTML="";
    
    data.forEach((element,index) => {
        let div=document.createElement("div");
        
        div.setAttribute=("class","part1")
        let image=document.createElement("img");
        image.src=element.image;
        let title=document.createElement("a");
        title.href="/inside data/inside.html";
        title.innerText=element.title;
        let name="";
        title.addEventListener("click",()=>{
            data=data.filter((ele,ind)=>{
              if(index==ind){
                  name=element.title;
                }
            })
            localStorage.setItem("insideName",JSON.stringify(name));
        })
        div.append(image,title)
        part2.append(div)
        partUp2.append(part2)
    });
    main.append(partUp2)
}
document.querySelector(".part2Btn1").addEventListener("click",()=>{
    part2.scrollLeft+=1300;
})
document.querySelector(".part2Btn2").addEventListener("click",()=>{
    part2.scrollLeft-=1300;
})
function display3(data){
    
    
    for(let i=data.length-1;i>=0;i--){
        
        let div=document.createElement("div");
        div.setAttribute=("class","part1")
        let image=document.createElement("img");
        image.src=data[i].image;
        let title=document.createElement("a");
        title.href="/inside data/inside.html";
        title.innerText=data[i].title;
        let name="";
        title.addEventListener("click",()=>{
            data=data.filter((ele,ind)=>{
                if(i==ind){
                    name=data[i].title;
                }
            })
            localStorage.setItem("insideName",JSON.stringify(name));
        })
        div.append(image,title)
        part3.append(div)
        partUp3.append(part3)
    };
    main.append(partUp3)
}
document.querySelector(".part3Btn1").addEventListener("click",()=>{
    part3.scrollLeft+=1300;
})
document.querySelector(".part3Btn2").addEventListener("click",()=>{
    part3.scrollLeft-=1300;
})

closeBtn.addEventListener("click",()=>{
    signUpPage.style.display="none";
})
document.querySelector(".closeBtn2") .addEventListener("click",()=>{
    document.getElementById("signIn").style.display="none";
})
function clearAll(){
    localStorage.removeItem("userName")
    window.location.href="index.html"
}
function gotocart(){
    window.location.href="cart.html"
}
