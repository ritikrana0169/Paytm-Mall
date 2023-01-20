let insideName=JSON.parse(localStorage.getItem("insideName"));
console.log(insideName);
document.getElementById("setBrand").innerText=insideName;
document.getElementById("nameOfProduc").innerText=insideName;
let form=document.querySelector("form");
let min=document.getElementById("minValue");
let max=document.getElementById("maxValue");
const api="https://63c7ea385c0760f69ac0cafc.mockapi.io/brands";
let cartData=JSON.parse(localStorage.getItem("cartData"))||[];
console.log(cartData.length)
my_cart=[];
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
form.addEventListener("submit",(e)=>{
    e.preventDefault();
        if(min.value==0 && max.value==0){
            display(data,cartData);
        }
        else{
            let price=data.filter((ele,ind)=>{
                if(min.value<=ele.price && max.value>=ele.price){
                    return true;
                }
            })
            display(price,data2);
        }
        min.value=null;
                max.value=null;
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
    document.getElementById("itemInBag").innerText=data2.length;
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
            if(checkItem(element)){
                alert("Already In Cart")
            }else{
                my_cart.push({...element})
                localStorage.setItem("cartData",JSON.stringify(my_cart));
            }
        })
        main.append(div);
    })
};
}
function checkItem(data){
    for(let i=0;i<my_cart.length;i++){
        if(my_cart[i].id==data.id){
            return true;
        }
    }
    return false;
}