let main=document.getElementById("main");
let partUp1=document.querySelector(".partUpper1");
let partUp2=document.querySelector(".partUpper2");
let partUp3=document.querySelector(".partUpper3");
let part1=document.querySelector(".part1");
let part2=document.querySelector(".part2");
let part3=document.querySelector(".part3")
const api="https://63c6452ddcdc478e15be0fe2.mockapi.io/e-commerce";
fetching(api);
async function fetching(data){
    let request=await fetch(data);
    let inData=await request.json();
    return display(inData),display3(inData);
}

function display(data){
    // main.innerHTML="";
   
    data.forEach((element,index) => {
        let div=document.createElement("div");
        div.setAttribute=("class","part1")
        let image=document.createElement("img");
        image.src=element.image;
        let title=document.createElement("p");
        title.innerText=element.title;
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
        let title=document.createElement("p");
        title.innerText=element.title;
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
    // main.innerHTML="";
   
   for(let i=data.length-1;i>=0;i--){
    
        let div=document.createElement("div");
        div.setAttribute=("class","part1")
        let image=document.createElement("img");
        image.src=data[i].image;
        let title=document.createElement("p");
        title.innerText=data[i].title;
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