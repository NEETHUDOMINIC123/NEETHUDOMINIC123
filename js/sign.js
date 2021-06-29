
   
      const indicator = document.querySelector(".indicator");
      const input = document.getElementById("pwd");
      const weak = document.querySelector(".weak");
      const medium = document.querySelector(".medium");
      const strong = document.querySelector(".strong");
      const text = document.querySelector(".text");
    
      
     
      let regExpWeak = /[a-z]/;
      let regExpMedium = /[\d]+/;
      let regExpStrong = /[A-Z]/;

      function trigger(){
        error2.setAttribute("hidden","false");
        password.style.border="1px solid black";
        text.removeAttribute("hidden","true");
        
        if(input.value != ""){
        
          indicator.style.display = "block";
          
          if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
          if(input.value.length > 3 || (input.value.length <= 7 ) && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
          if(input.value.length >= 8 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
          if(no==1){
            weak.classList.add("active");
            text.style.display = "block";
            text.textContent = "Week Password: utleast include 1 uppercase letter , 1 lowercase and 1 digit ";
            text.classList.add("weak");
            return false;
            
          }if(no==2){
            medium.classList.add("active");
            text.textContent = "Medium Password: utleast include 1 uppercase letter , 1 lowercase and 1 digit";
            text.classList.add("medium");
            return false;
          }else{
            medium.classList.remove("active");
            text.classList.remove("medium");
    
          } if(no==3){
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your password is strong";
            text.classList.add("strong");
            return true;
          }else{
            strong.classList.remove("active");
            text.classList.remove("strong");
            
          }
        }
      };

        let password=document.getElementById("pwd");
        let email=document.getElementById("Email");
        let error1=document.getElementById("error1");
        let error2=document.getElementById("error2");
        let firstname=document.getElementById("firstname");
        let lastname=document.getElementById("lastname");
        let Address=document.getElementById("Address");
        let error3=document.getElementById("error3");
        let error4=document.getElementById("error4");
        let error5=document.getElementById("error5");
        

        
       function validate(){ 
            if(password.value.trim()=="" && firstname.value.trim()=="" && lastname.value.trim()=="" && Address.value.trim()==""){
                text.setAttribute("hidden","true");
                error2.removeAttribute("hidden","true");
                error2.style.color="white";
                password.style.border="1px solid red";
                error3.removeAttribute("hidden","true");
                error3.style.color="white";
                firstname.style.border="1px solid red";
                error4.removeAttribute("hidden","true");
                error4.style.color="white";
                lastname.style.border="1px solid red";
                error5.removeAttribute("hidden","true");
                error5.style.color="white";
                Address.style.border="1px solid red";
              return false;
            }else if( lastname.value.trim()=="" && Address.value.trim()==""  && password.value.trim()==""){
              error1.removeAttribute("hidden","true");
              error1.style.color="white";
              email.style.border="1px solid red";
              error2.removeAttribute("hidden","true");
              error2.style.color="white";
              password.style.border="1px solid red";
              error3.setAttribute("hidden","true");
              firstname.style.border="1px solid black";
              error4.removeAttribute("hidden","true");
              error4.style.color="white";
              lastname.style.border="1px solid red";
              error5.removeAttribute("hidden","true");
              error5.style.color="white";
              Address.style.border="1px solid red";
            return false;
            } else if(firstname.value.trim()=="" && Address.value.trim()==""  && password.value.trim()==""){
              text.setAttribute("hidden","true");
              error1.removeAttribute("hidden","true");
              error1.style.color="white";
              email.style.border="1px solid red";
              error2.removeAttribute("hidden","true");
              error2.style.color="white";
              password.style.border="1px solid red";
              error3.removeAttribute("hidden","true");
              error3.style.color="white";
              firstname.style.border="1px solid red";
              error4.setAttribute("hidden","true");
              lastname.style.border="1px solid black";
              error5.removeAttribute("hidden","true");
              error5.style.color="white";
              Address.style.border="1px solid red";
              return false
            } else if(password.value.trim()=="" && firstname.value.trim()=="" && lastname.value.trim()=="" ){
              error1.removeAttribute("hidden","true");
              error1.style.color="white";
              email.style.border="1px solid red";
              error2.removeAttribute("hidden","true");
              error2.style.color="white";
              password.style.border="1px solid red";
              error3.removeAttribute("hidden","true");
              error3.style.color="white";
              firstname.style.border="1px solid red";
              error4.removeAttribute("hidden","true");
              error4.style.color="white";
              lastname.style.border="1px solid black";
              error5.setAttribute("hidden","true");
              Address.style.border="1px solid black";
              return false
            }else if(firstname.value.trim()=="" && lastname.value.trim()=="" && Address.value.trim()==""){
              error2.setAttribute("hidden","true");
              password.style.border="1px solid black";
              error3.removeAttribute("hidden","true");
              error3.style.color="white";
              firstname.style.border="1px solid red";
              error4.removeAttribute("hidden","true");
              error4.style.color="white";
              lastname.style.border="1px solid black";
              error5.removeAttribute("hidden","true");
              error4.style.color="white";
              Address.style.border="1px solid black";
              return false
            }else if((firstname.value.trim()=="" && lastname.value.trim()=="")|| (Address.value.trim()==""  && password.value.trim()=="")){
              error2.removeAttribute("hidden","true");
              error2.style.color="white";
              password.style.border="1px solid red";
              error3.setAttribute("hidden","true");
              firstname.style.border="1px solid black";
              error4.setAttribute("hidden","true");
              lastname.style.border="1px solid black";
              error5.removeAttribute("hidden","true");
              error5.style.color="white";
              Address.style.border="1px solid red";
              return false;

            } else if((password.value.trim()=="" && firstname.value.trim()=="") || (lastname.value.trim()=="" && Address.value.trim()=="")){
              error2.removeAttribute("hidden","true");
              error2.style.color="white";
              password.style.border="1px solid red";
              error3.removeAttribute("hidden","true");
              error3.style.color="white";
              firstname.style.border="1px solid red";
              error4.setAttribute("hidden","true");
              lastname.style.border="1px solid black";
              error5.setAttribute("hidden","true");
              Address.style.border="1px solid black";
              return false;
            }else if((lastname.value.trim()==""&& password.value.trim()=="") || (Address.value.trim()=="" && firstname.value.trim()=="") ){

              error2.removeAttribute("hidden","true");
              error2.style.color="white";
              password.style.border="1px solid red";
              error3.setAttribute("hidden","true");
              firstname.style.border="1px solid black";
              error4.removeAttribute("hidden","true");
              error4.style.color="white";
              lastname.style.border="1px solid red";
              error5.setAttribute("hidden","true");
              Address.style.border="1px solid black";
            return false;
            }else if((firstname.value.trim()=="" && lastname.value.trim()=="" && Address.value.trim()=="")||password.value.trim()==""){
              error2.removeAttribute("hidden","true");
                error2.style.color="white";
                password.style.border="1px solid red";
                error3.setAttribute("hidden","true");
                firstname.style.border="1px solid black";
                error4.setAttribute("hidden","true");
                lastname.style.border="1px solid black";
                error5.setAttribute("hidden","true");
                Address.style.border="1px solid black";
              return false;
            }else if(password.value.trim()==""){
              text.setAttribute("hidden","true");
              error2.removeAttribute("hidden","true");
                error2.style.color="white";
                password.style.border="1px solid red";
                error1.setAttribute("hidden","false");
                email.style.border="1px solid black";
                return false;
              }else{
                error1.setAttribute("hidden","false");
                error2.setAttribute("hidden","false");
                email.style.border="1px solid black";
                password.style.border="1px solid black";
                error3.setAttribute("hidden","true");
                firstname.style.border="1px solid black";
                error4.setAttribute("hidden","true");
                lastname.style.border="1px solid black";
                error5.setAttribute("hidden","true");
                Address.style.border="1px solid black";
                alert("signIn successfully");
                return true; 
              }
      };

  
      let regexp1= /^([\w\d\.-]+)@([\w\d\.-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
      function emailvalidate(){
        if(regexp1.test(email.value)){
          error1.removeAttribute("hidden","true");
          error1.innerText="valid";
          error1.style.color="white";
          error1.style.border="1px solid white";
          error1.style.backgroundColor="green";
          email.style.border="1px solid black";
          return true;
          
        }else{
          error1.removeAttribute("hidden","true");
          error1.innerText="invalid email"
          error1.style.backgroundColor="red";
          error1.style.color="white";
          email.style.border="1px solid black";
          return false;
         
        }
      };

      let phonenumber=document.getElementById("number");
      let error6=document.getElementById("error6");
      let regexp2=/([\d]{3})-([\d]{3})-([\d]{4})/;
      let regexp3=/([\d]{3})\.([\d]{3})\.([\d]{4})/;
      let regexp4=/([\d]{3}) ([\d]{3}) ([\d]{4})/;
      function numbervalidate(){
        if(regexp2.test(phonenumber.value)||regexp3.test(phonenumber.value)||regexp4.test(phonenumber.value)){
          error6.removeAttribute("hidden", "true");
          error6.innerText="valid";
          error6.style.color="white";
          error6.style.backgroundColor="green";
          phonenumber.style.border="1px solid black";
          return true;
        }else{
          error6.removeAttribute("hidden", "true");
          error6.innerText="invalid format";
          error6.style.color="white";
          error6.style.backgroundColor="red";
          phonenumber.style.border="1px solid black";
        }
      };

      var list=document.getElementById("list");
      function showlist(){
        list.removeAttribute("hidden","true");
      }

      function unshowlist(){
        list.setAttribute("hidden","true");
      }
      




    
  
      


   