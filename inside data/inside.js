let insideName=JSON.parse(localStorage.getItem("insideName"));
console.log(insideName);
document.getElementById("setBrand").innerText=insideName;
document.getElementById("nameOfProduc").innerText=insideName;
let formFil=document.getElementById("formFil");
let min1=document.getElementById("minValue");
let max1=document.getElementById("maxValue");
const api="https://63c7ea385c0760f69ac0cafc.mockapi.io/brands";
let cartData=JSON.parse(localStorage.getItem("cartData"))||[];
console.log(cartData.length)
let userName=JSON.parse(localStorage.getItem("userName"))||[];
let goto=document.getElementById("goToSignIn");
if(userName.length!==0){
    document.getElementById("login").innerHTML="<b>Welcome -</b>"+userName
}

let main=document.getElementById("main");
fetching(api);
async function fetching(data){
    try{
let req=await fetch(data);
let inData=await req.json();
    let filtering=inData.filter((element,index)=>{
if(element.name==insideName){
    return true;
}else{
    return false;
}
    });
    display(filtering,cartData),priceB(filtering,cartData);
    }catch{
console.log("err")
    }
}

function priceB(data,data2){
formFil.addEventListener("submit",(e)=>{
    e.preventDefault();
        if(min1.value==0 && max1.value==0){
            display(data,cartData);
        }
        else{
            let price=data.filter((ele,ind)=>{
                if(min1.value<=ele.price && max1.value>=ele.price){
                    return true;
                }
            })
            display(price,data2);
        }
        min1.value=null;
                max1.value=null;
    })
}
function display(data,data2){
    // console.log(data2)
      if(data.length==0){
        let heading=document.createElement("h2");
        heading.innerText="No Item Here";
        heading.style.paddingLeft="4vw";
        heading.style.paddingTop="4vh";
        heading.style.color="red";


        let img=document.createElement("img");
        img.style.marginTop="10vh"
        img.src="https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif";
        main.append(heading,img)
      }else{
        if(userName.length==0){
            document.getElementById("itemInBag").innerText=0;

        }else{

            document.getElementById("itemInBag").innerText=data2.length;
        }
    document.getElementById("numOfProduct").innerText=data.length;
    main.innerHTML="";
    console.log(data)
    data.forEach((element,index) => {
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=element.image;
        let name=document.createElement("h5");
        name.innerText=element.name;
        let price=document.createElement("h4");
        price.innerText="₹"+element.price;
        let discount=document.createElement("h5");
        discount.innerText="₹"+"150 Off";
        discount.style.color="red";
        let addTocart=document.createElement("button");
        addTocart.innerText="Add To Cart"
        div.append(img,name,price,discount,addTocart);
        addTocart.addEventListener("click",()=>{
            if(userName.length<1){
                document.getElementById("signUpPage").style.display="block"
            }else{
            if(checkItem(element)){
                alert("Already In Cart")
            }else{
                cartData.push({...element,quantity:1})
                localStorage.setItem("cartData",JSON.stringify(cartData));
                window.location.href="./inside.html"
            }
        }})
        main.append(div);
    })
};
}
function checkItem(data){
    for(let i=0;i<cartData.length;i++){
        if(cartData[i].id==data.id){
            return true;
        }
    }
    return false;
}
let closeBtn=document.querySelector(".closeBtn");
closeBtn.addEventListener("click",()=>{
    document.getElementById("signUpPage").style.display="none"
})
let closeBtn2=document.querySelector(".closeBtn2");
document.querySelector(".closeBtn2") .addEventListener("click",()=>{
    document.getElementById("signIn").style.display="none";
})

goto.addEventListener("click",()=>{
    signUpPage.style.display="none"
    document.getElementById("signIn").style.display="block"
})
document.getElementById("logo").addEventListener("click",()=>{
    window.location.href="../index.html"
 })
 function gotocart(){
    window.location.href="../cart.html"
}