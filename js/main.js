let password=document.getElementById("pwd");
let email=document.getElementById("email");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");

function validate(){
  if(email.value.trim()==""&& password.value.trim()=="")
  {
      text.setAttribute("hidden","true");
      error1.removeAttribute("hidden","true");
      error1.style.color="white";
      email.style.border="1px solid red";
      error2.removeAttribute("hidden","true");
      error2.style.color="white";
      password.style.border="1px solid red";
      return false;
  }
  else if(email.value.trim()=="")
  {
      error1.removeAttribute("hidden","true");
      error1.style.color="white";
      email.style.border="1px solid red";
      error2.setAttribute("hidden","false");
      error2.style.color="white";
      password.style.border="1px solid black";
      return false;
  }
  else if( password.value.trim()=="")
  {
    text.setAttribute("hidden","true");
    error2.removeAttribute("hidden","true");
    error2.style.color="white";
    password.style.border="1px solid red";
    error1.setAttribute("hidden","false");
    email.style.border="1px solid black";
    return false;
  }
  else{
    error1.setAttribute("hidden","true");
    error2.setAttribute("hidden","false");
    email.style.border="1px solid black";
    password.style.border="1px solid black";
    return true;

  }
}

 let regexp = /^([w\d\.-]+)@[\w\d\.-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
 function emailvalidate()
 {

if(regexp.test(email.value)){
  error1.removeAttribute("hidden","true");
  error1.innerText="Valid";
  error1.style.color="white";
  error1.style.backgroundcolor="green";
  error1.style.border="1px solid white";
  email.style.border="1px solid black";
  return true;
}
else{
  error1.removeAttribute("hidden","true");
  error1.innerText="inValid email";
  error1.style.color="white";
  error1.style.backgroundcolor="red";
  return false;

}
 };