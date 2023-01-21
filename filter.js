let apin="https://63c7ea385c0760f69ac0cafc.mockapi.io/brands";

fetchAgain(apin);
async function fetchAgain(data){
    try{
        let req=await fetch(data);
        req= await req.json();
        return changeDom(req),searching(req);
    }catch{
console.log("error")
    }
}
let sBtn=document.getElementById("searchBtn");
let sBar=document.getElementById("searchBar");

function searching(data){
    sBtn.addEventListener("click",()=>{
        let searched=data.filter((ele,index)=>{

            if(ele.category.toUpperCase().includes(sBar.value.toUpperCase())==true){
                return true;
            }else{
                false;
            }
        })
        appendDom(searched)
    })
}

let mainFilter=document.getElementById("filter");
function changeDom(data){
mainFilter.addEventListener("change",()=>{
    if(mainFilter.value==""){
        console.log("Nothing");
        window.location.href="index.html"
    }else{
        let filtered=data.filter((ele,ind)=>{
            if(mainFilter.value==ele.category){
                return true;
            }else{
                return false;
            }
        })
       return appendDom(filtered);
    }
})
}

function appendDom(data){
    main.classList.add("myStyle")
    main.innerHTML="";
    data.forEach((element,index) => {
        let div=document.createElement("div");
        // div.style.textAlign="center";
        let image=document.createElement("img");
        image.src=element.image;
        let name=document.createElement("h3");
        name.innerText="Brand-"+element.name;
        let cat=document.createElement("h4");
        cat.innerText=element.category;
        let price=document.createElement("h3");
        price.innerText=element.price;
        div.append(image,name,cat,price)
        main.append(div);
    });
    if(data.length==0){
        let h=document.createElement("h1");
        h.innerText="No Item Found";
        main.append(h)
    }
}