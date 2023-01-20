let form1=document.getElementById("formSingUp");
let nme=document.getElementById("signUpName");
let sEmail=document.getElementById("signUpMail");
let sPass=document.getElementById("signUpPass");

let lEmail=document.getElementById("signInMail");
let lPass=document.getElementById("signInPass");

let loginData=JSON.parse(localStorage.getItem("loginSuccess"));
console.log(loginData)
let userData=[];
form1.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
Name:nme.value,
email:sEmail.value,
pass:sPass.value
    }
userData.push(obj);
localStorage.setItem(("user-data"),JSON.stringify(userData))
window.location.href="index.html";
alert("SignUp Sucess");
})
let inData=JSON.parse(localStorage.getItem("user-data"))||[];
let form2=document.getElementById("formSingIn");
loginS(inData);
function loginS(data)
{form2.addEventListener("submit",(e)=>{
    e.preventDefault();
data.forEach((element,index) => {  

    if(lEmail.value==element.email && lPass.value==element.pass){
         
        localStorage.setItem(("userName"),JSON.stringify(Name=element.Name)) 
        
        document.getElementById("signIn").style.display="none";
        localStorage.setItem(("loginSuccess"),JSON.stringify
        ({loginSuccess:true}));
        window.location.href="index.html"
        document.getElementById("loginImg").src="./navBar Images/icons8-lol-50.png";
        alert("SignIn Sucess");
        // console.log(loginData)
    }else{
        alert("Wrong Credentials")
    }
    
}

);
})}