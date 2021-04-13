
const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
function trigger(){
  if(input.value != ""){
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
    if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
    if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
    if(no==1){
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too week";
      text.classList.add("weak");
    }
    if(no==2){
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add("medium");
    }else{
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if(no==3){
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
    }else{
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
    showBtn.style.display = "block";
    showBtn.onclick = function(){
      if(input.type == "password"){
        input.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#23ad5c";
      }else{
        input.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#000";
      }
    }
  }else{
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}
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
    
      let phonenumber=document.getElementById("number");

      function ValidatePhoneNumber(phoneNumber) {
        var regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
        var phone = phoneNumber.match(regExp);
        if (phone) {
          alert('yes');
          return true;
        }
        alert('no');
        return false;
      }
    
    
    
    
 };