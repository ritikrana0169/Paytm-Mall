let form1=document.getElementById("formSingUp");
let nme=document.getElementById("signUpName");
let sEmail=document.getElementById("signUpMail");
let sPass=document.getElementById("signUpPass");

let lEmail=document.getElementById("signInMail");
let lPass=document.getElementById("signInPass");
let loginData=JSON.parse(localStorage.getItem("loginSuccess"));
let inData=JSON.parse(localStorage.getItem("user-data"))||[];
console.log(loginData)

form1.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
Name:nme.value,
email:sEmail.value,
pass:sPass.value
    }
inData.push(obj);
localStorage.setItem(("user-data"),JSON.stringify(inData))
window.location.href="../index.html";
alert("SignUp Sucess");
})
let form2=document.getElementById("formSingIn");
loginS(inData);
function loginS(data)
{
    form2.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(checkIt(data)){
       
        
        document.getElementById("signIn").style.display="none";
        localStorage.setItem(("loginSuccess"),JSON.stringify
        ({loginSuccess:true}));
            window.location.href="../index.html"
        document.getElementById("loginImg").src="./inside data/navBar Images/icons8-nerd-50.";
        console.log(loginData)
        alert("SignIn Sucess");
    }else{
        alert("Wrong Credentials")
    }
    function checkIt(data){
        for(let i=0;i<data.length;i++){
            if(lEmail.value==data[i].email && lPass.value==data[i].pass){
                localStorage.setItem(("userName"),JSON.stringify(Name=data[i].Name)) 
                return true;
            }
        }
        return false;
    }
})
}
