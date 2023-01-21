document.getElementById("logo").addEventListener("click",()=>{
    window.location.href="../index.html"
 })
 let main1=document.getElementById("mainCart");
 let inData=JSON.parse(localStorage.getItem("cartData"))||[];
document.getElementById("itemInBag").innerText=inData.length;
let userName=JSON.parse(localStorage.getItem("userName"))||[];
document.getElementById("login").innerHTML="<b>Welcome- </b>"+userName;
 display(inData)
 function display(data){
main1.innerHTML="";
data.forEach((element,index) => {
    console.log(element)
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.src=element.image;
    let title=document.createElement("h3");
    title.innerText=element.name;
    let price=document.createElement("h4");
    price.innerText="₹"+`${element.price}`;
    let div2=document.createElement("div");
    div2.style.display="flex";
    let plus=document.createElement("button");
    plus.innerText="+";
    plus.addEventListener("click",()=>{
    element.quantity++;
    localStorage.setItem(("cartData"),JSON.stringify(data));
    display(data)
    });
   let quan=document.createElement("h5");
   quan.innerText=element.quantity;


    let minus=document.createElement("button");
    minus.innerText="-";
    minus.addEventListener("click",()=>{
        if(element.quantity>1){
            element.quantity--;
        }
    localStorage.setItem(("cartData"),JSON.stringify(data));
    display(data)
    })
    let remove=document.createElement("button");
    remove.innerText="Remove";
    remove.addEventListener("click",()=>{
        data=data.filter((ele,ind)=>{
            if(index==ind){
             return false;
            }else{
                return true;
            }
        })
        display(data);
        localStorage.setItem(("cartData"),JSON.stringify(data));
        window.location.href="cart.html"
    })
    div2.append(plus,quan,minus,remove)
    div.append(image,title,price,div2)
    main1.append(div);

    let sum=0;
    for(let i=0;i<data.length;i++){
        sum+=data[i].price*data[i].quantity;
    }
    if(sum<0){
        document.getElementById("priceMe").innerText=0;
    }else{
        document.getElementById("priceMe").innerText=sum;
    }
   
});
 }
 function checkout(){
    if(document.getElementById("priceMe").innerText>0){
        main1.innerHTML="";
        let image=document.createElement("img");
        image.style.marginLeft="30vw"
        image.src="https://www.btec.ae/wp-content/uploads/2021/10/success.gif";
        main1.append(image);
    }else{
        alert("No item")
    }
   
 }